<?php

// Registered as an extension rather than a file in kirbyenv/site/blueprints,
// so the field only appears while this preset is active. Site blueprint files
// win over extensions, which is why the page uses its own `loop-field` template.
return [
    'extensions' => [
        'blueprints' => [
            'pages/loop-field' => [
                'title'   => 'Loop field',
                'columns' => [
                    'main' => [
                        'width'  => '2/3',
                        'fields' => [
                            'text' => ['type' => 'textarea', 'size' => 'large'],
                        ],
                    ],
                    'sidebar' => [
                        'width'  => '1/3',
                        'fields' => [
                            'feedback' => [
                                'type'   => 'loop-comments',
                                'label'  => 'Open',
                                'status' => 'open',
                            ],
                            'feedbackResolved' => [
                                'type'   => 'loop-comments',
                                'label'  => 'Resolved',
                                'status' => 'resolved',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
];
