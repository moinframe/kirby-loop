<?php

namespace Moinframe\Loop;

use Kirby\Cms\Language;
use Kirby\Cms\Page;
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
     * @param callable|null $resolvePage Optional resolver returning the page
     *  the `enabled` option should be evaluated against, called with the
     *  normalized page id from the URL (if any). Routes that don't carry a
     *  page id at all (e.g. comment/reply, which only knows a parentId) use
     *  this to look up the page via the comment/reply instead. Defaults to
     *  resolving the page id from the URL or, failing that, the request body.
     * @return callable Middleware function
     */
    public static function auth(callable $next, ?callable $resolvePage = null): callable
    {
        return function ($language = null, $pageId = null) use ($next, $resolvePage) {

            // Normalize arguments
            [$language, $pageId] = Middleware::args($language, $pageId);

            $onPage = $resolvePage !== null
                ? $resolvePage($pageId)
                : Middleware::resolvePage($pageId);

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

    /**
     * Default page resolution for the `enabled` check: uses the page id from
     * the URL if the route pattern captured one, otherwise falls back to a
     * `pageId` field in the request body/query (e.g. comment/new, which only
     * carries it there).
     * @param string|null $pageId Page id from the URL, if any
     * @return Page|null
     */
    public static function resolvePage(?string $pageId): ?Page
    {
        if ($pageId === null) {
            $bodyPageId = kirby()->request()->get('pageId');
            if (is_string($bodyPageId)) {
                $pageId = $bodyPageId;
            }
        }

        if ($pageId === 'home') {
            return kirby()->site()->homePage();
        }

        return page($pageId);
    }
}
