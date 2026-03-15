<?php

use Moinframe\Loop\App;
use Kirby\Toolkit\A;
use Kirby\Toolkit\Str;

return [
    'loop/comments/(:num)' => [
        'load' => function (int $id) {
            $comment = App::getComment($id);
            if ($comment === null) {
                return false;
            }

            $isResolved = $comment->status->value === 'RESOLVED';
            $author = $comment->resolveAuthor();
            $replies = [];

            // Resolve page info
            $page = kirby()->page('page://' . $comment->page);
            $pageTitle = $page !== null ? $page->title()->value() : t('moinframe.loop.panel.unknownPage');
            $pagePanelUrl = $page !== null ? $page->panel()->url(true) : null;

            // Format timestamp server-side
            $date = date('Y-m-d H:i', $comment->timestamp);

            // Format replies as KirbyText
            $replyCount = count($comment->replies);
            if ($replyCount > 0) {
                foreach ($comment->replies as $reply) {
                    $replyAuthor = $reply->resolveAuthor();
                    $replyDate = date('Y-m-d H:i', $reply->timestamp);
                    $replies['reply-' . $reply->id] = [
                        'type'  => 'info',
                        'theme' => 'text',
                        'label' => "",
                        'text'  => "<strong>{$replyAuthor}</strong> ({$replyDate})<br />{$reply->comment}"
                    ];
                }
            } else {
                $replies['reply-0'] = [
                    'type'  => 'info',
                    'theme' => 'empty',
                    'label' => "",
                    'text'  => t('moinframe.loop.panel.drawer.noReplies')
                ];
            }

            return [
                'component' => 'k-form-drawer',
                'props' => [
                    'title' => t('moinframe.loop.panel.drawer.comment'),
                    'icon'  => 'chat',
                    'id' => 'loop-comment-drawer',
                    'fields' => [
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
                            'icon'     => 'user',
                            'width'    => '1/2',
                        ],
                        'date' => [
                            'type'     => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.date'),
                            'disabled' => true,
                            'icon'     => 'calendar',
                            'width'    => '1/2',
                        ],
                        'page' => [
                            'type'     => 'text',
                            'label'    => t('moinframe.loop.panel.drawer.page'),
                            'width'    => '1/2',
                            'icon'     => 'page',
                            'disabled' => true,
                        ],
                        'resolved' => [
                            'type'  => 'toggle',
                            'disabled' => true,
                            'label' => t('moinframe.loop.panel.drawer.status.resolved'),
                            'width' => '1/2',
                            'text' => [
                                t('moinframe.loop.panel.drawer.status.open'),
                                t('moinframe.loop.panel.drawer.status.resolved')
                            ],
                        ],
                        'repliesCount' => [
                            'type'  => 'headline',
                            'label' =>  tt('moinframe.loop.panel.drawer.replies', ['count' => $replyCount]),
                        ],
                        ...$replies
                    ],
                    'value' => [
                        'author'  => $author,
                        'date'    => $date,
                        'page'    => $pageTitle,
                        'resolved'  => $isResolved,
                    ],
                ],
            ];
        },
        'submit' => function (int $id) {
            return true;
        },
    ],
];
