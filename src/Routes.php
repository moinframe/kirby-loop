<?php

namespace Moinframe\Loop;

use Moinframe\Loop\App;
use Kirby\Cms\Page;
use Kirby\Http\Response;
use Moinframe\Loop\Models\Comment;
use Moinframe\Loop\Models\Reply;

class Routes
{
    /**
     * Standard error codes
     */
    public const ERROR_CSRF_INVALID = 'CSRF_INVALID';
    public const ERROR_PAGE_NOT_FOUND = 'PAGE_NOT_FOUND';
    public const ERROR_FIELD_REQUIRED = 'FIELD_REQUIRED';
    public const ERROR_UNAUTHORIZED = 'UNAUTHORIZED';
    public const ERROR_INVALID_SELECTOR = 'INVALID_SELECTOR';
    public const ERROR_INVALID_NAME = 'INVALID_NAME';

    /**
     * Creates a consistent error response
     * @param string $message Human-readable error message
     * @param string|null $code Optional error code
     * @return array<string, mixed> Error response array
     */
    private static function errorResponse(string $message, ?string $code = null): array
    {
        $response = [
            'status' => 'error',
            'message' => $message
        ];

        if ($code !== null) {
            $response['code'] = $code;
        }

        return $response;
    }

    /**
     * Resolves the page a (top-level) comment belongs to. Used to evaluate
     * the `enabled` option for routes that only know a comment id (reply,
     * resolve, unresolve) rather than a page id.
     * @param mixed $commentId Comment id, typically from the request data
     * @return Page|null
     */
    private static function pageOfComment(mixed $commentId): ?Page
    {
        if (is_numeric($commentId) === false) {
            return null;
        }

        $comment = App::getComment((int) $commentId);

        return $comment !== null ? kirby()->page('page://' . $comment->page) : null;
    }

    /**
     * Registers routes and returns route definitions
     * @return array<mixed> Route definitions array
     */
    public static function register(): array
    {

        return [
            [
                'pattern' => 'loop/comments/(:all)',
                'method' => 'GET',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null, $pageId = null) {

                    $onPage = null;

                    if ($pageId === 'home'):
                        $onPage = kirby()->site()->homePage();
                    else:
                        $onPage = page($pageId);
                    endif;

                    // If not found, check if it's a draft and validate access
                    if (null === $onPage) {
                        $draftPage = kirby()->page($pageId);
                        if ($draftPage !== null && $draftPage->isDraft() && (
                            (App::getKirbyMajorVersion() >= 5 && $draftPage->renderVersionFromRequest() !== null) ||
                            // @phpstan-ignore method.notFound
                            (App::getKirbyMajorVersion() < 5 && $draftPage->isVerified(get('token')) === true)
                        )) {
                            $onPage = $draftPage;
                        }
                    }

                    if (null === $onPage) {
                        return Response::json(self::errorResponse(
                            tt('moinframe.loop.page.not.found', ['pageId' => $pageId]),
                            self::ERROR_PAGE_NOT_FOUND
                        ), 400);
                    }

                    $comments = App::getCommentsByPage($onPage, $language ?? '');

                    // Convert Comment objects to arrays to ensure resolved authors are included
                    $commentsArray = array_map(function ($comment) {
                        return $comment->toArray();
                    }, $comments);

                    return Response::json([
                        'status' => 'ok',
                        'comments' => $commentsArray
                    ], 200);
                })
            ],
            [
                'pattern' => 'loop/comment/new',
                'method' => 'POST',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null) {

                    $data = kirby()->request()->data();

                    // Sanitize input data
                    if (isset($data['comment'])) {
                        $data['comment'] = htmlspecialchars(strip_tags($data['comment']), ENT_QUOTES, 'UTF-8');
                    }
                    if (isset($data['selector'])) {
                        // Validate selector but don't HTML encode it as it needs to remain a valid CSS selector
                        $data['selector'] = trim($data['selector']);
                        // Basic validation - selector should not contain script tags or javascript
                        if (preg_match('/<script|javascript:|data:/i', $data['selector']) === 1) {
                            return Response::json(self::errorResponse(
                                'Invalid selector format',
                                self::ERROR_INVALID_SELECTOR
                            ), 400);
                        }
                    }

                    $required = ['comment', 'url', 'selector', 'selectorOffsetX', 'selectorOffsetY', 'pagePositionX', 'pagePositionY', 'pageId'];

                    foreach ($required as $field) {
                        if (!isset($data[$field])) {
                            return Response::json(self::errorResponse(
                                tt('moinframe.loop.field.required', ['field' => $field]),
                                self::ERROR_FIELD_REQUIRED
                            ), 400);
                        }
                    }

                    // Find page using page ID from data
                    $pageId = $data['pageId'] ?? null;

                    if ($pageId === null) {
                        return Response::json(self::errorResponse(
                            tt('moinframe.loop.field.required', ['field' => 'pageId']),
                            self::ERROR_FIELD_REQUIRED
                        ), 400);
                    }

                    $page = ($pageId === 'home') ? kirby()->site()->homePage() : page($pageId);

                    // If not found, check if it's a draft and validate access
                    if (null === $page) {
                        $draftPage = kirby()->page($pageId);
                        if ($draftPage !== null && $draftPage->isDraft() && (
                            (App::getKirbyMajorVersion() >= 5 && $draftPage->renderVersionFromRequest() !== null) ||
                            // @phpstan-ignore method.notFound
                            (App::getKirbyMajorVersion() < 5 && $draftPage->isVerified(get('token')) === true)
                        )) {
                            $page = $draftPage;
                        }
                    }

                    if (null === $page) {
                        return Response::json(self::errorResponse(
                            tt('moinframe.loop.page.path.not.found', ['path' => $pageId]),
                            self::ERROR_PAGE_NOT_FOUND
                        ), 404);
                    }

                    $comment = [
                        'author' => ($user = kirby()->user()) !== null ? (string) $user->uuid() : (kirby()->session()->data()->get('loop.guest.name') ?? "guest"),
                        'url' => $data['url'],
                        // @phpstan-ignore method.notFound
                        'page' => $page->content()->uuid(),
                        'comment' => $data['comment'],
                        'selector' => $data['selector'],
                        'selectorOffsetX' => $data['selectorOffsetX'],
                        'selectorOffsetY' => $data['selectorOffsetY'],
                        'pagePositionX' => $data['pagePositionX'],
                        'pagePositionY' => $data['pagePositionY'],
                        'timestamp' => time(),
                        'lang' => $language ?? '',
                        'replies' => []
                    ];

                    $comment = Comment::fromArray($comment);
                    $result = App::addComment($comment);
                    return Response::json([
                        'status' => 'ok',
                        'comment' => $result !== null ? $result->toArray() : null
                    ], 201);
                })
            ],
            [
                'pattern' => 'loop/comment/resolve',
                'method' => 'POST',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null) {


                    $data = kirby()->request()->data();

                    $required = ['id'];

                    foreach ($required as $field) {
                        if (!isset($data[$field])) {
                            return Response::json(self::errorResponse(
                                tt('moinframe.loop.field.required', ['field' => $field]),
                                self::ERROR_FIELD_REQUIRED
                            ), 400);
                        }
                    }

                    $success = App::resolveComment($data['id']);

                    return Response::json([
                        'status' => 'ok',
                        'success' => $success
                    ], 200);
                }, fn () => self::pageOfComment(kirby()->request()->get('id')))
            ],
            [
                'pattern' => 'loop/comment/reply',
                'method' => 'POST',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null) {


                    $data = kirby()->request()->data();

                    // Sanitize input data
                    if (isset($data['comment'])) {
                        $data['comment'] = htmlspecialchars(strip_tags($data['comment']), ENT_QUOTES, 'UTF-8');
                    }

                    $required = ['comment', 'parentId'];

                    foreach ($required as $field) {
                        if (!isset($data[$field])) {
                            return Response::json(self::errorResponse(
                                tt('moinframe.loop.field.required', ['field' => $field]),
                                self::ERROR_FIELD_REQUIRED
                            ), 400);
                        }
                    }

                    $reply = Reply::fromArray([
                        'author' => ($user = kirby()->user()) !== null ? (string) $user->uuid() : (kirby()->session()->data()->get('loop.guest.name') ?? "guest"),
                        'comment' => $data['comment'],
                        'parentId' => (int) $data['parentId'],
                        'timestamp' => time()
                    ]);

                    $result = App::addReply($reply);

                    return Response::json([
                        'status' => 'ok',
                        'reply' => $result !== null ? $result->toArray() : null
                    ], 201);
                }, fn () => self::pageOfComment(kirby()->request()->get('parentId')))
            ],
            [
                'pattern' => 'loop/comment/unresolve',
                'method' => 'POST',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null) {


                    $data = kirby()->request()->data();

                    $required = ['id'];

                    foreach ($required as $field) {
                        if (!isset($data[$field])) {
                            return Response::json(self::errorResponse(
                                tt('moinframe.loop.field.required', ['field' => $field]),
                                self::ERROR_FIELD_REQUIRED
                            ), 400);
                        }
                    }

                    $success = App::unresolveComment($data['id']);

                    return Response::json([
                        'status' => 'ok',
                        'success' => $success
                    ], 200);
                }, fn () => self::pageOfComment(kirby()->request()->get('id')))
            ],
            [
                'pattern' => 'loop/guest/name',
                'method' => 'POST',
                'language' => '*',
                'action' => Middleware::auth(function ($language = null) {
                    $data = kirby()->request()->data();

                    if (!isset($data['name']) || trim($data['name']) === '') {
                        return Response::json(self::errorResponse(
                            'Name is required',
                            self::ERROR_INVALID_NAME
                        ), 400);
                    }

                    $name = trim($data['name']);
                    kirby()->session()->data()->set('loop.guest.name', $name);

                    return Response::json([
                        'status' => 'ok',
                        'name' => $name
                    ], 200);
                })
            ]
        ];
    }
}
