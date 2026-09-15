<?php

/**
 * The callable form of `enabled`. In the starterkit this leaves the tool on
 * for notes and albums and off everywhere else — including the home page —
 * which is a quick way to confirm the check is applied on both the
 * auto-inject path and the manual snippet.
 */

return [
    'moinframe.loop.enabled' => function ($page) {
        return in_array($page->template()->name(), ['note', 'album'], true);
    },
];
