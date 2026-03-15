<?php

use Moinframe\Loop\App;

return [
    [
        'pattern' => 'loop/comments',
        'method'  => 'GET',
        'action'  => function () {
            $comments = App::getComments();
            $result = [];

            foreach ($comments as $comment) {
                $data = $comment->toArray();

                $page = kirby()->page('page://' . $comment->page);
                $data['pageTitle'] = $page !== null ? $page->title()->value() : t('moinframe.loop.panel.unknownPage');
                $data['pagePath'] = $page !== null ? 'pages/' . str_replace('/', '+', $page->id()) : null;
                $data['pageUrl'] = $page !== null ? $page->url() : null;
                $data['panelUrl'] = $page !== null ? $page->panel()->url() : null;

                $result[] = $data;
            }

            return $result;
        },
    ],
    [
        'pattern' => 'loop/comments/(:num)/resolve',
        'method'  => 'POST',
        'action'  => function (int $id) {
            return ['ok' => App::resolveComment((string) $id)];
        },
    ],
    [
        'pattern' => 'loop/comments/(:num)/unresolve',
        'method'  => 'POST',
        'action'  => function (int $id) {
            return ['ok' => App::unresolveComment((string) $id)];
        },
    ],
];
