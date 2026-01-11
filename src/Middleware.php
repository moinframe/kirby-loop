<?php

namespace Moinframe\Loop;

use Kirby\Http\Response;

class Middleware
{
    /**
     * Authentication middleware
     * @param callable $next The next action to execute
     * @return callable Middleware function
     */
    public static function auth(callable $next): callable
    {
        return function ($language = null, $pageId = null) use ($next) {

            // Handle both multilingual and non-multilingual cases
            if ($pageId === null && $language !== null) {
                // Non-multilingual: only pageId was passed as first argument
                $pageId = $language;
                $language = null;
            }
            $onPage = null;

            if ($pageId === 'home'):
                $onPage = kirby()->site()->homePage();
            else:
                $onPage = page($pageId);
            endif;

            // Check if loop is enabled
            if (!Options::enabled($onPage)) {
                return Response::json([
                    'status' => 'error',
                    'message' => 'Loop is disabled',
                    'code' => 'DISABLED'
                ], 403);
            }

            $csrfToken = kirby()->request()->header('X-CSRF-Token');
            if (csrf($csrfToken) !== true) {
                return Response::json([
                    'status' => 'error',
                    'message' => t('moinframe.loop.csrf.invalid'),
                    'code' => 'CSRF_INVALID'
                ], 403);
            }


            if (Options::public() === false && kirby()->user() === null) {
                return Response::json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                    'code' => 'UNAUTHORIZED'
                ], 401);
            }


            return $next(...func_get_args());
        };
    }
}
