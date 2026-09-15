# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Kirby CMS plugin that provides a feedback tool for web pages. The architecture consists of:

**Backend (PHP):**
- Kirby plugin structure with main entry point at `index.php`
- Core logic in `src/App.php` with database abstraction
- API routes in `src/Routes.php` for comment management
- Models in `src/Models/` for Comment and Reply entities
- Database layer in `src/Database.php`

**Frontend (Svelte):**
- Svelte 5 component library in `frontend/src/`
- Builds to ES modules in `assets/` directory
- Uses Vite for build process with custom element compilation
- State management via Svelte stores in `frontend/src/store/`

## Development Commands

**Frontend Development:**
```bash
# Start development server
pnpm dev

# Build assets
pnpm build

# Type checking
pnpm --filter=frontend run check
```

**PHP Development:**
```bash
# Static analysis
vendor/bin/phpstan analyse

# PHP analysis level 8 with strict rules
# Configuration in phpstan.neon
```

**Documentation:**
Use context7 to find out about Kirby CMS, Documentation for this plugin is placed in the `docs/` folder.

**Test environments:**
```bash
kirbyenv up            # build Kirby 4 / 5, each single- and multi-language
kirbyenv list          # variants with their URLs and active preset
kirbyenv preset public # switch plugin options across all installs
kirbyenv serve k5-ml   # or run one without Herd
```
Driven by `.kirbyenv.php` and the option presets in `kirbyenv/presets/`.
Installs are generated into the gitignored `.kirbyenv/` folder with this repo
symlinked in as `site/plugins/loop`, so a `pnpm build` is live immediately.
Tooling lives in `~/Server/kirby-plugin-kirbyenv`.

## Key Architecture Details

**Plugin Integration:**
- Auto-injects feedback component into all HTML pages via `page.render:after` hook
- Component snippet located at `snippets/loop/app.php`
- Requires authenticated users (see `Middleware::auth()`)

**API Endpoints:**
- `GET /loop/comments/{pageId}` - Get comments for a specific page
- `POST /loop/comment/new` - Create new comment
- `POST /loop/comment/reply` - Reply to existing comment
- `POST /loop/comment/resolve` - Mark comment as resolved
- `POST /loop/comment/unresolve` - Mark comment as unresolved
- `POST /loop/guest/name` - Set guest name for non-authenticated users

**Data Flow:**
- Comments are tied to Kirby page ids
- Position tracking via CSS selectors and page coordinates
- Validation happens at model level before database operations

## Translations

**IMPORTANT: When adding new translatable text to the frontend:**

1. **Add translation key to PHP backend** (`index.php`):
   ```php
   'moinframe.loop.ui.component.key' => 'Default English text',
   ```

2. **Add translation key to snippet** (`snippets/loop/app.php`):
   ```php
   'ui.component.key' => t('moinframe.loop.ui.component.key'),
   ```

3. **Use translation in Svelte components**:
   ```svelte
   {t("ui.component.key", "Default fallback text")}
   ```

**Translation Architecture:**
- PHP translations defined in `index.php` under `'translations'` key
- Frontend translations passed via `snippets/loop/app.php`
- Svelte components use `t()` function from `store/translations.svelte.ts`
- Always provide fallback text in components for development

## Linting and Code Quality

- Biome for frontend linting (config in `biome.json`)
- PHPStan level 8 analysis with strict rules
- TypeScript checking via `svelte-check`
