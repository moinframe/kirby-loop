<?php

return [
    'loop' => function () {
        return [
            'label' => t('moinframe.loop.panel.label'),
            'icon'  => 'chat',
            'menu'  => true,
            'link'  => 'loop',

            'views' => [
                [
                    'pattern' => ['loop', 'loop/(:any)'],
                    'action'  => function (string $tab = 'open') {
                        if ($tab !== 'open' && $tab !== 'resolved') {
                            return false;
                        }
                        return [
                            'component' => 'k-loop-comments-view',
                            'title'     => t('moinframe.loop.panel.label'),
                            'props'     => [
                                'tab' => $tab,
                            ],
                        ];
                    }
                ],
            ],

            'drawers' => require __DIR__ . '/drawers.php',
        ];
    },
];
