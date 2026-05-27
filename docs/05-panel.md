---
title: Panel
---

Besides the on-page feedback widget, the plugin surfaces comments inside the
Kirby Panel in two places: a global **Feedback area** and a per-page
**comments section** you can drop into any blueprint.

## Feedback area

The plugin automatically registers a **Feedback** entry in the Panel menu.
It lists every comment across the whole site, grouped by page.

## Per-page comments section

Use the `loop-comments` section to show only the comments that belong to the
page the section is placed on. This is handy on a page blueprint so editors see
feedback in context while editing.

Add it to any page blueprint:

```yaml
sections:
  feedback:
    type: loop-comments
```

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
