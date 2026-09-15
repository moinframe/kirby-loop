<?php

/**
 * Forces the German UI regardless of page language. On the -ml variants this
 * is the case worth watching: the UI must stay German on an English page
 * while the API keeps using the page's own language.
 */

return [
    'moinframe.loop.language' => 'de',
];
