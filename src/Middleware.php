<?php

namespace Moinframe\Loop;

use Kirby\Cms\Language;
use Kirby\Http\Response;

class Middleware
{
    /**
     * For routes with a language scope Kirby injects the current Language
     * object as the very first argument – but only on multi-language sites.
     * On single-language sites nothing is injected, so the first argument is
     * already the route's own pattern.
     *
     * @param mixed $language First argument received from the router
     * @param mixed $pageId Second argument received from the router
     * @return array{0: string|null, 1: string|null} Language code and page id
     */
    public static function args(mixed $language, mixed $pageId = null): array
    {
        if ($language instanceof Language) {
            return [$language->code(), is_string($pageId) ? $pageId : null];
        }

        // single language: the first argument is the page id, if any
        $id = $language ?? $pageId;

        return [null, is_string($id) ? $id : null];
    }

    /**
     * Authentication middleware
     * @param callable $next The next action to execute
     * @return callable Middleware function
     */
    public static function auth(callable $next): callable
    {
        return function ($language = null, $pageId = null) use ($next) {

            // Normalize arguments
            [$language, $pageId] = Middleware::args($language, $pageId);

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


            return $next($language, $pageId);
        };
    }
}
