<?php

use Kirby\Cms\Page;
use Kirby\Toolkit\I18n;
use Moinframe\Loop\App;

return [
    'loop-comments' => [
        'props' => [
            /**
             * Heading shown above the comment list.
             * Defaults to the plugin label.
             */
            'label' => function ($label = null) {
                return I18n::translate($label, $label) ?? t('moinframe.loop.panel.label');
            },
            /**
             * Which comments to list: `all`, `open` or `resolved`.
             */
            'status' => function (string $status = 'all') {
                return in_array($status, ['all', 'open', 'resolved'], true) ? $status : 'all';
            },
        ],
        'computed' => [
            'comments' => function () {
                // $this is bound to the Section instance at runtime by Kirby.
                // @phpstan-ignore variable.undefined
                $model = $this->model();

                $comments = $model instanceof Page
                    ? App::getCommentsByPage($model)
                    : App::getComments();

                // @phpstan-ignore variable.undefined
                $status = $this->status;
                $items  = [];

                foreach ($comments as $comment) {
                    $resolved = $comment->status->value === 'RESOLVED';

                    if ($status === 'open' && $resolved === true) {
                        continue;
                    }

                    if ($status === 'resolved' && $resolved === false) {
                        continue;
                    }

                    $pageUrl = $model instanceof Page
                        ? $model->url()
                        : (page($comment->page)?->url() ?? $comment->url);

                    $items[] = [
                        'id'         => $comment->id,
                        'comment'    => $comment->comment,
                        'author'     => $comment->resolveAuthor(),
                        'status'     => $comment->status->value,
                        'replyCount' => count($comment->replies),
                        'pageUrl'    => $pageUrl,
                    ];
                }

                return $items;
            },
        ],
    ],
];
