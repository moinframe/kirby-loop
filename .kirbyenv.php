<?php

return [
    'slug' => 'loop',
    'variants' => [
        'k6'    => ['kirby' => 6],
        'k6-ml' => ['kirby' => 6, 'languages' => true],
    ],
    'languages' => [
        ['code' => 'en', 'name' => 'English', 'locale' => 'en_US'],
        ['code' => 'de', 'name' => 'Deutsch', 'locale' => 'de_DE'],
    ],
    'buildArtifacts' => ['assets', 'index.js', 'index.css'],
    'buildCommand'   => 'pnpm build:all',
];
