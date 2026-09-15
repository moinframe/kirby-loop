<?php


return [
    'moinframe.loop.enabled' => function ($page) {
        return in_array($page->template()->name(), ['note', 'album'], true);
    },
];
