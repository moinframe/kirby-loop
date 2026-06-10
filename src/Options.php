<?php

namespace Moinframe\Loop;

class Options
{

    /**
     * Check if loop should be public
     * @return bool
     */
    public static function public(): bool
    {
        return option('moinframe.loop.public', false);
    }

    /**
     * Get the path to the database file
     * @return string
     */
    public static function databasePath(): string
    {
        return option('moinframe.loop.database', kirby()->root('logs') . '/loop/comments.sqlite');
    }

    /**
     * Get header position (top or bottom)
     * @return string
     */
    public static function position(): string
    {
        return option('moinframe.loop.position', 'top');
    }

    /**
     * Check if auto-injection is enabled
     * @return bool
     */
    public static function autoInject(): bool
    {
        return option('moinframe.loop.auto-inject', true);
    }

    /**
     * Check if loop is enabled for the current page
     * @return bool
     */
    public static function enabled(?\Kirby\Cms\Page $page = null): bool
    {
        $enabledOption = option('moinframe.loop.enabled', true);

        // If it's a boolean, return it directly
        if (is_bool($enabledOption)) {
            return $enabledOption;
        }

        // If it's a callable, execute it with the current page
        if (is_callable($enabledOption)) {
            $page = $page ?? page();
            return (bool) $enabledOption($page);
        }

        // Default to enabled if invalid configuration
        return true;
    }

    /**
     * Check if welcome dialog is enabled
     * @return bool
     */
    public static function welcomeDialogEnabled(): bool
    {
        return option('moinframe.loop.welcome.enabled', true);
    }

    /**
     * Get welcome dialog headline
     * @return string
     */
    public static function welcomeDialogHeadline(): string
    {
        $customLang = self::language();
        return option('moinframe.loop.welcome.headline', $customLang !== null ? t('moinframe.loop.welcome.headline', '', $customLang) : t('moinframe.loop.welcome.headline'));
    }

    /**
     * Get welcome dialog text
     * @return string
     */
    public static function welcomeDialogText(): string
    {
        $customLang = self::language();
        $translatedPosition = t('moinframe.loop.ui.header.position.' . self::position(), self::position(), $customLang);
        return option('moinframe.loop.welcome.text', $customLang !== null ? tt('moinframe.loop.welcome.text', '', ['position' => $translatedPosition], $customLang) : tt('moinframe.loop.welcome.text', ['position' => $translatedPosition]));
    }

    /**
     * Get custom language setting for loop
     * @return string|null
     */
    public static function language(): ?string
    {
        return option('moinframe.loop.language', null);
    }

    /**
     * Set a theme
     * @return string
     */
    public static function theme(): string
    {
        return option('moinframe.loop.theme', 'default');
    }
}
