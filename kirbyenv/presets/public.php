<?php

/**
 * No authentication: the tool is usable logged out, which is the client
 * review / staging scenario. Guests are asked for a name instead
 * (POST /loop/guest/name).
 */

return [
    'moinframe.loop.public'          => true,
    'moinframe.loop.welcome.enabled' => true,
];
