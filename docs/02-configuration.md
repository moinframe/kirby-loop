---
title: Configuration
---

You can customize the plugin's look and behavior by adding configuration options.
Add configuration options to your `site/config/config.php` file:

```php
<?php

return [
    // Your existing Kirby configuration...

    // Loop Configuration
    'moinframe.loop' => [
      'auto-inject' => true,
      ...
    ]
];
```

## Configuration Options

### Enable/Disable Tool

**Option**: `moinframe.loop.enabled`
**Type**: `boolean|callable`
**Default**: `true`

Controls whether loop is enabled globally or conditionally.

```php
// Simple boolean enable/disable
'moinframe.loop.enabled' => false, // Disables globally

// Use a callback for dynamic control
'moinframe.loop.enabled' => function($page) {
    // Only enable for specific templates
    return in_array($page->template()->name(), ['article', 'blog']);
},

// Filter by page status
'moinframe.loop.enabled' => function($page) {
    return $page->status() === 'published';
},

// Complex conditions
'moinframe.loop.enabled' => function($page) {
    return $page->template()->name() === 'article'
        && $page->status() === 'published'
        && !$page->archived()->toBool();
}
```

**Callback function receives:**
- `$page` - The current Kirby page object

**Common use cases:**
- Disable feedback on specific page templates
- Enable only for published content
- Conditional enabling based on page fields or metadata

**Note**: This option is checked both during auto-injection and manual snippet
usage, and is enforced again on every API request that acts on a comment
(creating, replying, resolving, unresolving) using the page the request
applies to - so a disabled page also rejects direct API requests, not just
the widget. The one exception is `POST /loop/guest/name`: it isn't tied to a
specific page, so it isn't gated by this option.

### Auto-Injection

**Option**: `moinframe.loop.auto-inject`
**Type**: `boolean`
**Default**: `true`

Controls whether loop is automatically injected into all pages.

```php
// Disable auto-injection (requires manual snippet placement)
'moinframe.loop.auto-inject' => false,
```

When disabled, you must manually add the snippet to your templates:

```php
<?php snippet('loop/app') ?>
```

**Use cases for disabling auto-injection:**
- Custom page templates where you want precise control
- JavaScript-based routing (Swup, Taxi.js) that needs manual initialization
- Conditional loading based on user roles or page types

### Position

**Option**: `moinframe.loop.position`
**Type**: `string`
**Default**: `'top'`
**Values**: `'top'` | `'bottom'`

Sets the position of loop header on the page.

```php
// Position header at bottom of page
'moinframe.loop.position' => 'bottom',
```

### Database Path

**Option**: `moinframe.loop.database`
**Type**: `string|null`
**Default**: `null` (uses `site/logs/loop/comments.sqlite`)

Customize the SQLite database location.

```php
// Custom database path
'moinframe.loop.database' => '/custom/path/comments.sqlite',

// Alternative locations
'moinframe.loop.database' => kirby()->root('content') . '/feedback.sqlite',
'moinframe.loop.database' => '/var/www/data/feedback.sqlite',
```

**Important considerations:**
- Path must be absolute
- Directory must exist and be writable
- Consider backup strategies for custom locations
- Ensure path is outside web root for security

### Public Access

**Option**: `moinframe.loop.public`
**Type**: `boolean`
**Default**: `false`

Controls whether loop requires authentication.

```php
// Allow public access (no authentication required)
'moinframe.loop.public' => true,
```

**Security implications:**
- `false` (default): Only authenticated panel users can see/use the tool
- `true`: Anyone can add comments

**Recommended for public access:**
- Internal staging environments
- Client review sites with controlled access
- Public beta feedback collection

### Language Override

**Option**: `moinframe.loop.language`
**Type**: `string|null`
**Default**: `null` (auto-detect from Kirby)

Force a specific UI language regardless of the current page language.

```php
// Force German UI
'moinframe.loop.language' => 'de',

// Force English UI
'moinframe.loop.language' => 'en',
```

**When to use:**
- Single-language sites with non-English content but English-speaking editors
- Multi-language sites where editors prefer consistent UI language

### Theme

**Option**: `moinframe.loop.theme`
**Type**: `string`
**Default**: `'default'`
**Values**: `'default'` | `'dark'` | custom theme name

Sets the visual theme for the loop interface.

```php
// Use dark theme
'moinframe.loop.theme' => 'dark',

// Use custom theme
'moinframe.loop.theme' => 'custom',
```

**Available themes:**
- `'default'` - Light theme with clean, bright interface
- `'dark'` - Dark theme for low-light environments
- Custom theme names - See [Theming Guide](https://moinfra.me/docs/moinframe-loop/04-theming) for creating custom themes

### Welcome Dialog

The welcome dialog introduces new users to loop functionality.

#### Enable/Disable Welcome Dialog

**Option**: `moinframe.loop.welcome.enabled`
**Type**: `boolean`
**Default**: `true`

```php
// Disable welcome dialog
'moinframe.loop.welcome.enabled' => false,
```

#### Custom Welcome Headline

**Option**: `moinframe.loop.welcome.headline`
**Type**: `string|null`
**Default**: `null` (uses default translation)

```php
// Custom welcome headline
'moinframe.loop.welcome.headline' => 'Welcome to Our Review Tool!',
```

#### Custom Welcome Text

**Option**: `moinframe.loop.welcome.text`
**Type**: `string|null`
**Default**: `null` (uses default translation)

```php
// Custom welcome message
'moinframe.loop.welcome.text' => 'Click anywhere on the page to leave feedback. Use the toggle button to switch between navigation and comment modes.',
```

## Manual Snippet Usage

When auto-injection is disabled, you have full control over when and where loop appears.

### Basic Usage

```php
<?php snippet('loop/app') ?>
```

### Conditional Loading

```php
<?php if ($kirby->user() && $kirby->user()->role()->isAdmin()): ?>
    <?php snippet('loop/app') ?>
<?php endif ?>
```

> [!TIPP]
> Manual snippets also respect the `enabled` configuration option. If you've set up conditional enabling via the `enabled` option, you don't need to duplicate that logic in your template - the snippet will automatically check the enabled status.


## Caching Behavior

> [!WARNING]
> Pages with loop automatically have Kirby's page **cache** **disabled**. This is necessary for CSRF token validation and User authentication checks.
