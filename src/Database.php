<?php

namespace Moinframe\Loop;

use Kirby\Database\Db;
use Kirby\Filesystem\Dir;
use Kirby\Filesystem\F;
use Kirby\Toolkit\Collection;
use Moinframe\Loop\Models\Comment;
use Moinframe\Loop\Models\Reply;

class Database
{
    /**
     * Initializes the database connection if needed
     */
    protected static function initializeDatabase(): void
    {
        // Get path to database file
        $dbPath = Options::databasePath();

        // Make sure database directory exists
        $dir = dirname($dbPath);
        if (is_dir($dir) === false) {
            Dir::make($dir);
        }

        // Create empty database file if it doesn't exist
        if (F::exists($dbPath) === false) {
            self::createEmptyDatabase($dbPath);
        }

        // Configure Kirby's Db connection if not already done
        if (Db::connection() === null) {
            Db::connect([
                'type'     => 'sqlite',
                'database' => $dbPath
            ]);
        }
    }

    /**
     * Creates an empty database with schema
     * @param string $path Database file path
     */
    protected static function createEmptyDatabase(string $path): void
    {
        $db = new \SQLite3($path);
        $db->exec('PRAGMA foreign_keys = ON;');

        $db->exec('CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            url TEXT NOT NULL,
            page TEXT NOT NULL,
            comment TEXT NOT NULL,
            selector TEXT NOT NULL,
            selectorOffsetX REAL NOT NULL,
            selectorOffsetY REAL NOT NULL,
            pagePositionX REAL NOT NULL,
            pagePositionY REAL NOT NULL,
            status TEXT NOT NULL,
            timestamp INTEGER NOT NULL,
            lang TEXT NOT NULL DEFAULT ""
        )');

        // Create indexes for better performance
        $db->exec('CREATE INDEX IF NOT EXISTS idx_comments_page_lang ON comments(page, lang)');
        $db->exec('CREATE INDEX IF NOT EXISTS idx_comments_status ON comments(status)');
        $db->exec('CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp)');

        $db->exec('CREATE TABLE IF NOT EXISTS replies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            comment TEXT NOT NULL,
            parentId INTEGER NOT NULL,
            timestamp INTEGER NOT NULL,
            FOREIGN KEY (parentId) REFERENCES comments(id) ON DELETE CASCADE
        )');

        // Create indexes for replies
        $db->exec('CREATE INDEX IF NOT EXISTS idx_replies_parent ON replies(parentId)');
        $db->exec('CREATE INDEX IF NOT EXISTS idx_replies_timestamp ON replies(timestamp)');

        $db->close();
    }

    /**
     * Returns a query builder for replies table
     * @return \Kirby\Database\Query
     */
    protected static function tableReplies(): \Kirby\Database\Query
    {
        self::initializeDatabase();
        return Db::table('replies');
    }

    /**
     * Returns a query builder for comments table
     * @return \Kirby\Database\Query
     */
    protected static function tableComments(): \Kirby\Database\Query
    {
        self::initializeDatabase();
        return Db::table('comments');
    }


    /**
     * Retrieves a single comment by ID with its replies
     * @param int $id Comment ID
     * @return array<mixed>|null Comment data with nested replies, or null if not found
     */
    public static function getCommentById(int $id): ?array
    {
        try {
            $comment = self::tableComments()
                ->select('*')
                ->where('id', '=', $id)
                ->first();

            if ($comment === null) {
                return null;
            }

            $commentArray = $comment->toArray();

            // Fetch replies for this comment
            $replies = self::tableReplies()
                ->select('*')
                ->where('parentId', '=', $id)
                ->order('timestamp ASC')
                ->all();

            $commentArray['replies'] = [];
            foreach ($replies as $reply) {
                $commentArray['replies'][] = $reply->toArray();
            }

            return $commentArray;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Retrieves all comments from the database
     * @return Collection Array of comments
     */
    public static function getComments(): Collection
    {
        try {
            $comments = self::tableComments()
                ->select('*')
                ->order('timestamp DESC')
                ->all();
            return $comments;
        } catch (\Exception $e) {
            return new Collection();
        }
    }

    /**
     * Retrieves comments with their replies in a single optimized query
     * @param string|null $status Filter by status (optional)
     * @return Collection Array of comments with nested replies
     */
    public static function getCommentsWithReplies(?string $status = null): Collection
    {
        try {
            // Build the main comments query
            $commentsQuery = self::tableComments()->select('*');

            if ($status !== null) {
                $commentsQuery = $commentsQuery->where('status', '!=', $status);
            }

            $comments = $commentsQuery->order('timestamp DESC')->all();

            if ($comments->count() === 0) {
                return new Collection();
            }

            // Get all comment IDs for efficient reply lookup
            $commentIds = $comments->pluck('id');

            // Single query to get all replies for these comments
            $replies = self::tableReplies()
                ->select('*')
                ->where('parentId', 'in', $commentIds)
                ->order('timestamp ASC')
                ->all();

            // Group replies by parentId for efficient lookup
            $repliesByParent = [];
            foreach ($replies as $reply) {
                $parentId = $reply->parentId;
                if (!isset($repliesByParent[$parentId])) {
                    $repliesByParent[$parentId] = [];
                }
                $repliesByParent[$parentId][] = $reply->toArray();
            }

            // Add replies to their parent comments
            $result = [];
            foreach ($comments as $comment) {
                $commentArray = $comment->toArray();
                $commentArray['replies'] = $repliesByParent[$comment->id] ?? [];
                $result[] = $commentArray;
            }

            return new Collection($result);
        } catch (\Exception $e) {
            return new Collection();
        }
    }

    /**
     * Retrieves comments for a specific page with their replies
     * @param string $pageUuid Page UUID to filter by
     * @param string $lang Language to filter by
     * @param string|null $status Status to exclude (optional)
     * @return Collection Array of comments with nested replies
     */
    public static function getCommentsByPage(string $pageUuid, string $lang = '', ?string $status = null): Collection
    {
        try {
            // Build the main comments query with page filter
            $commentsQuery = self::tableComments()
                ->select('*')
                ->where('page', '=', $pageUuid);

            // Add language filter only if language is specified
            if ($lang !== '') {
                $commentsQuery = $commentsQuery->where('lang', '=', $lang);
            }

            if ($status !== null) {
                $commentsQuery = $commentsQuery->where('status', '!=', $status);
            }

            $comments = $commentsQuery->order('timestamp DESC')->all();

            if ($comments->count() === 0) {
                return new Collection();
            }

            // Get all comment IDs for efficient reply lookup
            $commentIds = $comments->pluck('id');

            // Single query to get all replies for these comments
            $replies = self::tableReplies()
                ->select('*')
                ->where('parentId', 'in', $commentIds)
                ->order('timestamp ASC')
                ->all();

            // Group replies by parentId for efficient lookup
            $repliesByParent = [];
            foreach ($replies as $reply) {
                $parentId = $reply->parentId();
                if (!isset($repliesByParent[$parentId])) {
                    $repliesByParent[$parentId] = [];
                }
                $repliesByParent[$parentId][] = $reply->toArray();
            }

            // Add replies to their parent comments
            $result = [];
            foreach ($comments as $comment) {
                $commentArray = $comment->toArray();
                $commentArray['replies'] = $repliesByParent[$comment->id] ?? [];
                $result[] = $commentArray;
            }

            return new Collection($result);
        } catch (\Exception $e) {
            return new Collection();
        }
    }

    /**
     * Retrieves all replies from the database
     * @return Collection Array of comments
     */
    public static function getReplies(): Collection
    {
        try {
            $replies = self::tableReplies()
                ->select('*')
                ->order('timestamp DESC')
                ->all();
            return $replies;
        } catch (\Exception $e) {
            return new Collection();
        }
    }

    /**
     * Adds a new comment to the database
     * @param Comment $comment Comment data
     * @return Comment|null The added comment or null on failure
     */
    public static function addComment(Comment $comment): ?Comment
    {
        try {
            $data = $comment->toArray();
            // Remove id field for insertion to allow auto-increment
            unset($data['id']);

            $id = self::tableComments()->insert($data);

            if (null !== $id) {
                $comment->id = $id;
                return $comment;
            }

            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Adds a new reply to the database
     * @param Reply $reply Reply data
     * @return Reply|null The added reply or null on failure
     */
    public static function addReply(Reply $reply): ?Reply
    {
        try {
            $data = $reply->toArray();
            // Remove id field for insertion to allow auto-increment
            unset($data['id']);

            $id = self::tableReplies()->insert($data);

            if (null !== $id) {
                $reply->id = $id;
                return $reply;
            }

            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    // /**
    //  * Updates a comment in the database
    //  * @param string $id Comment ID
    //  * @param array $data Updated comment data
    //  * @return bool Success status
    //  */
    // public static function updateComment(string $id, array $data): bool
    // {
    //     try {
    //         $updateData = [];

    //         foreach ($data as $key => $value) {
    //             if (in_array($key, ['comment', 'selector', 'posX', 'posY'])) {
    //                 $updateData[$key] = $value;
    //             }
    //         }

    //         if (empty($updateData)) {
    //             return false;
    //         }

    //         return self::table()->update($updateData, ['id' => $id]);
    //     } catch (\Exception $e) {
    //         return false;
    //     }
    // }

    /**
     * Updates a comment's status
     * @param string $id Comment ID
     * @param string $status New status
     * @return bool Success status
     */
    public static function updateCommentStatus(string $id, string $status): bool
    {
        try {
            return self::tableComments()->update(
                ['status' => $status],
                ['id' => $id]
            );
        } catch (\Exception $e) {
            return false;
        }
    }
}
