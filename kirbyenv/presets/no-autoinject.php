<?php

/**
 * Auto-injection off. Nothing should render anywhere until a template calls
 * `snippet('loop/app')` by hand — the setup used with JS routers like Swup.
 */

return [
    'moinframe.loop.auto-inject' => false,
];
