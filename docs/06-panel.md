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
