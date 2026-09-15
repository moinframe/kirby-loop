---
title: Panel
---

Besides the on-page feedback widget, the plugin surfaces comments inside the
Kirby Panel in two places: a global **Feedback area** and a per-page
**comments section** you can drop into any blueprint.

## Feedback area

The plugin automatically registers a **Feedback** entry in the Panel menu.
It lists every comment across the whole site, grouped by page. On
multi-language sites, each entry also shows the language the comment was
written in as a short code (e.g. `EN`, `DE`) next to the author.

### Comment details

Clicking a comment opens a drawer with the full text, author, date, the page
it belongs to and its status. On multi-language sites, the language the
comment was written in is shown next to the page, using the language's full
name (e.g. "Deutsch").

### Disabling the Feedback area

The area is registered under the id `loop`. Its visibility is controlled by
Kirby's built-in `access` permission, which defaults to allowing access. Set
`access.loop` to `false` in a role blueprint to hide the menu entry for that
role and block the area's API requests.

Disable it for a specific role (e.g. editors):

```yaml
# site/blueprints/users/editor.yml
permissions:
  access:
    loop: false
```

To disable it for everyone, add the same permission to every role blueprint or remove it from the menu by modifying `panel.menu` in your `config.php`. There is a simple to use plugin for that: [Kirby Panel Menu](https://github.com/moinframe/kirby-panel-menu).
## Per-page comments section

Use the `loop-comments` section to show only the comments that belong to the
page the section is placed on. This is handy on a page blueprint so editors see
feedback in context while editing. Like the Feedback area, entries also show
each comment's language code on multi-language sites.

Add it to any page blueprint:

```yaml
sections:
  feedback:
    type: loop-comments
```

Placed on `site.yml`, the section is no longer scoped to a single page and lists **all comments across the site** instead. The `status` option still applies, so `status: open` on `site.yml` gives you every open comment site-wide.

### Options

#### `label`

**Type**: `string|null`
**Default**: the plugin label (`Feedback`)

Sets the heading shown above the comment list. Accepts a plain string or a
translation array.

```yaml
sections:
  feedback:
    type: loop-comments
    label: Page feedback
```

```yaml
# Translated label
sections:
  feedback:
    type: loop-comments
    label:
      en: Page feedback
      de: Seiten-Feedback
```

#### `status`

**Type**: `string`
**Default**: `all`
**Values**: `all` | `open` | `resolved`

Controls which comments the section lists. Use `open` to show only unresolved
comments, `resolved` for resolved ones, or `all` (default) for both.

```yaml
# Only show open comments
sections:
  feedback:
    type: loop-comments
    status: open
```

### Example blueprint

```yaml
title: Article

columns:
  - width: 2/3
    fields:
      text:
        type: textarea
  - width: 1/3
    sections:
      feedback:
        type: loop-comments
        label: Feedback
```

## Deep linking to a comment

In the **Feedback area** and the **comments section**, clicking a comment's
colored marker opens the page in a new tab and jumps to that comment.

The link uses the anchor `#loop-comment-{id}`, e.g.
`https://example.com/blog/my-post#loop-comment-42`. You can also share these links
directly.

When such a link is opened, the on-page widget opens its panel, scrolls the
comment's marker into view and briefly highlights it (resolved comments, which
have no marker, are revealed in the panel list instead).

On multi-language sites, this link points to the page in the comment's own
language rather than whichever language you're currently viewing in the
Panel.

In the **Feedback area**, each comment's options menu also has an **Open
page** action that opens the page in the Panel itself (rather than the live
site) in a new tab. On multi-language sites, it likewise opens directly in
the comment's language, via a `?language={code}` query parameter.
