<script lang="ts">
  import { store } from "../store/api.svelte";
  import { panel } from "../store/ui.svelte";
  import { t } from "../store/translations.svelte";
  import Comment from "./Comment.svelte";
  const { scrollIntoView, handleSubmit, cancel } = $props();
  import Button from "./Button.svelte";
  import ContextMenu from "./ContextMenu.svelte";
  import IconChat from "./Icon/IconChat.svelte";
  import { onMount } from "svelte";

  let dialogEl: HTMLDialogElement;

  // Filter comments based on resolved status
  const filteredComments = $derived(
    panel.showResolvedOnly
      ? store.comments.filter((comment) => comment.status === "RESOLVED")
      : store.comments.filter((comment) => comment.status === "OPEN"),
  );

  // Sync dialog state with panel store
  $effect(() => {
    if (!dialogEl) return;

    if (panel.open && !dialogEl.open) {
      dialogEl.show();
    } else if (!panel.open && dialogEl.open) {
      dialogEl.close();
    }
  });

  // Handle ESC key to close panel
  onMount(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && panel.open) {
        panel.open = false;
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  });

  // Handle dialog close event
  function handleDialogClose() {
    panel.open = false;
  }
</script>

<dialog
  bind:this={dialogEl}
  class="panel"
  class:open={panel.open}
  onclose={handleDialogClose}
>
  <header>
    <Button
      onclick={() => (panel.open = !panel.open)}
      style="button--header"
      ariaLabel={t("ui.panel.open", "Open comments")}
    >
      <IconChat slot="icon" />
    </Button>
  </header>

  <ul class="threads" data-lenis-prevent inert={!panel.open}>
    {#if filteredComments.length === 0}
      <li class="no-threads">
        <p>
          {t("ui.panel.no.comments", "No comments yet.")}
        </p>
      </li>
    {:else if filteredComments.length === 0 && panel.showResolvedOnly}
      <li class="no-threads">
        <p>{t("ui.panel.no.resolved", "No resolved comments yet.")}</p>
      </li>
    {:else}
      {#each filteredComments as comment (comment.id)}
        <li>
          <Comment {comment} {scrollIntoView} {cancel} {handleSubmit} />
        </li>
      {/each}
    {/if}
  </ul>

  <ContextMenu />
</dialog>

<style>
  .panel {
    position: var(--panel-position);
    right: var(--panel-right);
    top: var(--panel-top);
    left: auto;
    bottom: auto;
    transform: var(--panel-transform-closed);
    width: var(--panel-width);
    max-width: none;
    margin: 0;
    padding: 0;
    background: none;
    height: var(--panel-height);
    border: 0;
    color: var(--panel-color);
    border-radius: var(--panel-border-radius);
    border-top-left-radius: var(--panel-border-top-left-radius);
    transition: var(--panel-transition);
    display: flex;
    flex-direction: column;
    z-index: var(--panel-z-index);
    cursor: auto;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
      width: var(--panel-mobile-width);
    }

    header {
      transform: var(--panel-header-transform-closed);
      border-top-left-radius: var(--panel-header-border-radius);
      border-bottom-left-radius: var(--panel-header-border-radius);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: var(--panel-header-gap);
      backdrop-filter: var(--panel-header-backdrop-filter);
      background: var(--panel-header-background);
      box-shadow: var(--shadow-l), var(--shadow-light-edge),
        var(--shadow-dark-edge);
      transition: transform var(--transition-duration) var(--transition-easing);
    }

    /* The .open header and hover rules have the same specificity, so hover
       has to come last to still win on an open panel. */
    &.open {
      transform: var(--panel-transform-open);
      box-shadow: var(--panel-shadow);
      header {
        transform: var(--panel-header-transform-open);
      }
    }

    header:hover,
    header:focus-visible {
      transform: var(--panel-header-transform-hover);
    }
  }

  .threads {
    flex: 1 1 100%;
    overflow-y: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: var(--panel-threads-padding);
    width: 100%;
    box-sizing: border-box;
    background-color: var(--panel-threads-background);
    backdrop-filter: var(--panel-threads-backdrop);
    z-index: 2;
    border-radius: var(--panel-threads-border-radius);
    border-top-left-radius: var(--panel-threads-border-top-left-radius);
    scrollbar-width: var(--panel-threads-scrollbar-width);
    scrollbar-gutter: stable;

    li {
      + li {
        margin-top: var(--panel-threads-item-margin);
      }
    }
    .no-threads {
      text-align: center;
      padding: var(--panel-no-threads-padding);
      font-size: var(--panel-no-threads-font-size);
      color: var(--panel-no-threads-color);
      margin-block: auto;
    }
  }
</style>
