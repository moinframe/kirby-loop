<script lang="ts">
  import { panel } from "../store/ui.svelte";
  import { t } from "../store/translations.svelte";
  import Button from "./Button.svelte";
  import IconSettings from "./Icon/IconSettings.svelte";

  let contextMenu: HTMLElement;
  let triggerButton: HTMLElement;

  const toggleMenu = () => {
    if (contextMenu.matches(":popover-open")) {
      contextMenu.hidePopover();
    } else {
      contextMenu.showPopover();
      // Position the popover relative to the trigger button
      positionMenu();
    }
  };

  const positionMenu = () => {
    if (!triggerButton || !contextMenu) return;

    const buttonRect = triggerButton.getBoundingClientRect();
    const menuRect = contextMenu.getBoundingClientRect();

    // Position above and to the left of the button
    const top = buttonRect.top - menuRect.height - 8;
    const left = buttonRect.left - menuRect.width + buttonRect.width;

    contextMenu.style.position = "fixed";
    contextMenu.style.top = `${Math.max(8, top)}px`;
    contextMenu.style.left = `${Math.max(8, left)}px`;
    contextMenu.style.margin = "0";
  };

  const closeMenu = () => {
    contextMenu.hidePopover();
  };

  const setFilter = (showResolved: boolean) => {
    panel.showResolvedOnly = showResolved;
    closeMenu();
  };
</script>

<div class="context-menu-container">
  <div class="context-menu-trigger" bind:this={triggerButton}>
    <Button
      onclick={toggleMenu}
      ariaLabel={t("ui.panel.menu.open", "Open menu")}
      style="button--icon"
      id="context-menu-trigger"
      ariaHaspopup="menu"
      ariaExpanded={contextMenu?.matches(":popover-open") ? "true" : "false"}
      ariaControls="context-menu"
    >
      <IconSettings slot="icon" />
    </Button>
  </div>

  <div
    bind:this={contextMenu}
    class="context-menu"
    popover="auto"
    role="menu"
    aria-labelledby="context-menu-trigger"
    id="context-menu"
  >
    <div class="menu-section">
      <div class="menu-section-title">
        {t("ui.panel.menu.filter.title", "Show Comments")}
      </div>
      <div class="filter-options">
        <Button
          style="button--menu-item {!panel.showResolvedOnly
            ? 'button--menu-item-active'
            : ''}"
          onclick={() => setFilter(false)}
          ariaLabel={!panel.showResolvedOnly
            ? t(
                "ui.panel.filter.open.active",
                "Show open comments (currently selected)",
              )
            : t("ui.panel.filter.open.inactive", "Show open comments")}
        >
          <span
            class="filter-dot filter-dot--open"
            slot="icon"
            aria-hidden="true"
          ></span>
          {t("ui.panel.filter.open", "Open")}
        </Button>
        <Button
          style="button--menu-item {panel.showResolvedOnly
            ? 'button--menu-item-active'
            : ''}"
          onclick={() => setFilter(true)}
          ariaLabel={panel.showResolvedOnly
            ? t(
                "ui.panel.filter.resolved.active",
                "Show resolved comments (currently selected)",
              )
            : t("ui.panel.filter.resolved.inactive", "Show resolved comments")}
        >
          <span
            class="filter-dot filter-dot--resolved"
            slot="icon"
            aria-hidden="true"
          ></span>
          {t("ui.panel.filter.resolved", "Resolved")}
        </Button>
      </div>
    </div>
  </div>
</div>

<style>
  .context-menu-container {
    position: absolute;
    bottom: var(--context-menu-container-bottom);
    right: var(--context-menu-container-right);
    z-index: var(--context-menu-container-z-index);
  }

  .context-menu-trigger {
    width: var(--context-menu-trigger-size);
    height: var(--context-menu-trigger-size);
    border-radius: var(--context-menu-trigger-border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .context-menu {
    background: var(--context-menu-background);
    border: 0;
    border-radius: var(--context-menu-border-radius);
    box-shadow: var(--context-menu-shadow);
    padding: var(--context-menu-padding);
    min-width: var(--context-menu-min-width);
    position: fixed;
    margin: 0;

    &::backdrop {
      background: var(--context-menu-backdrop-background);
    }
  }

  .menu-section {
    display: flex;
    flex-direction: column;
    gap: var(--context-menu-section-gap);
  }

  .menu-section-title {
    font-size: var(--context-menu-title-font-size);
    font-weight: var(--context-menu-title-font-weight);
    color: var(--context-menu-title-color);
    padding: 0;
    margin-bottom: var(--context-menu-title-margin-bottom);
    text-transform: uppercase;
    letter-spacing: var(--context-menu-title-letter-spacing);
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: var(--context-menu-filter-gap);
  }

  .filter-dot {
    width: var(--context-menu-filter-dot-size);
    height: var(--context-menu-filter-dot-size);
    border-radius: var(--context-menu-filter-dot-border-radius);
    display: inline-block;
    margin-right: var(--context-menu-filter-dot-margin-right);
  }

  .filter-dot--open {
    background: var(--context-menu-filter-dot-open-background);
  }

  .filter-dot--resolved {
    background: var(--context-menu-filter-dot-resolved-background);
  }
</style>
