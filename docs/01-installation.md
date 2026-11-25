---
title: Installation
---

This guide covers all installation methods for the Kirby Loop plugin.

## Prerequisites

Before installing the plugin, ensure your system meets these requirements:

- **Kirby CMS**: Version 6. For Kirby 4 and 5, use Loop 1.x (`composer require moinframe/kirby-loop:^1.2`)
- **PHP**: Version 8.3 or higher
- **SQLite**: Support enabled (usually included by default in PHP)

## Installation Methods

### Method 1: Composer (Recommended)

Composer is the preferred installation method

```bash
composer require moinframe/kirby-loop
```

### Method 2: Manual Installation

For environments where Composer isn't available or preferred:

1. **Download the plugin**
   - Visit the [GitHub releases page](https://github.com/moinframe/kirby-loop/releases)
   - Download the latest version as a ZIP file

2. **Extract and place**
   - Unzip the downloaded archive
   - Rename the folder to `loop` (remove version numbers)
   - Move the folder to `/site/plugins/loop`

3. **Verify installation**
   - The plugin folder should contain `index.php` and other plugin files
   - Your final structure should be: `/site/plugins/loop/index.php`

### Method 3: Git Submodule

For projects using Git version control, submodules provide a clean way to include the plugin:

```bash
git submodule add https://github.com/moinframe/kirby-loop.git site/plugins/loop
```

## Next Steps

After successful installation:

1. **Configuration**: See [Configuration Guide](https://moinfra.me/docs/moinframe-loop/02-configuration) for customization options
2. **Multi-language**: If using multiple languages, review [Multi-language Setup](https://moinfra.me/docs/moinframe-loop/03-multi-language)
3. **API Integration**: For custom implementations, check the [API Reference](https://moinfra.me/docs/moinframe-loop/05-api)

## Updating

### Composer Updates
```bash
composer update moinframe/kirby-loop
```

### Manual Updates
1. Download the new version
2. Replace the plugin folder (backup first!)
3. Clear any caches

### Git Submodule Updates
```bash
git submodule update --remote site/plugins/loop
git add site/plugins/loop
git commit -m "Update loop plugin"
```

## Uninstallation

To remove the plugin:

1. **Remove plugin files**:
   - Composer: `composer remove moinframe/kirby-loop`
   - Manual: Delete `/site/plugins/loop/` folder
   - Git submodule: `git submodule deinit site/plugins/loop`

2. **Clean up data** (optional):
   - Delete `/site/logs/loop/` directory to remove all comments
   - Remove configuration from `site/config/config.php`

3. **Clear caches**: Clear any site caches to ensure complete removal
