<?php

use Moinframe\Loop\App;

return [
    'loop/comments/(:num)' => [
        'load' => function (int $id) {
            $comment = App::getComment($id);
            if ($comment === null) {
                return false;
            }

            $isResolved = $comment->status->value === 'RESOLVED';
            $author = $comment->resolveAuthor();

            // Resolve page info
            $page = kirby()->page('page://' . $comment->page);
            $pageTitle = $page !== null ? $page->title()->value() : t('moinframe.loop.panel.unknownPage');
            $pagePanelUrl = $page !== null ? $page->panel()->url(true) : null;

            // Format timestamp server-side
            $date = date('Y-m-d H:i', $comment->timestamp);

            // Format replies as KirbyText
            $replyCount = count($comment->replies);
            if ($replyCount > 0) {
                $parts = [];
                foreach ($comment->replies as $reply) {
                    $replyAuthor = $reply->resolveAuthor();
                    $replyDate = date('Y-m-d H:i', $reply->timestamp);
                    $parts[] = "<strong>{$replyAuthor}</strong> ({$replyDate})<br />{$reply->comment}";
                }
                $repliesText = implode("\n\n---\n\n", $parts);
            } else {
                $repliesText = t('moinframe.loop.panel.drawer.noReplies');
            }

            /** @var string $repliesLabel */
            $repliesLabel = t('moinframe.loop.panel.drawer.replies');

            return [
                'component' => 'k-form-drawer',
                'props' => [
                    'title' => t('moinframe.loop.panel.drawer.comment'),
                    'icon'  => $isResolved ? 'check' : 'circle',
                    'fields' => [
                        'statusInfo' => [
                            'type'  => 'info',
                            'theme' => $isResolved ? 'positive' : 'warning',
                            'text'  => $isResolved
                                ? t('moinframe.loop.panel.drawer.status.resolved')
                                : t('moinframe.loop.panel.drawer.status.open'),
                        ],
                        'comment' => [
                            'type'     => 'info',
                            'theme'    => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.comment'),
                            'text'     => $comment->comment,
                        ],
                        'author' => [
                            'type'     => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.author'),
                            'disabled' => true,
                            'width'    => '1/3',
                        ],
                        'date' => [
                            'type'     => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.date'),
                            'disabled' => true,
                            'width'    => '1/3',
                        ],
                        'page' => [
                            'type'     => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.page'),
                            'width'    => '1/3',
                            'disabled' => true,
                        ],
                        'repliesInfo' => [
                            'type'  => 'info',
                            'theme' =>  $replyCount > 0  ? 'text' : 'empty',
                            'label' => $repliesLabel . " ({$replyCount})",
                            'text'  => $repliesText,
                        ],
                    ],
                    'value' => [
                        'author'  => $author,
                        'date'    => $date,
                        'page'    => $pageTitle,
                    ],
                ],
            ];
        },
        'submit' => function (int $id) {
            return true;
        },
    ],
];
