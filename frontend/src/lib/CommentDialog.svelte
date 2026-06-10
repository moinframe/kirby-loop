<script lang="ts">
  import { tick } from "svelte";
  import { getDialogPosition } from "../composables/getDialogPosition";
  import CommentForm from "./CommentForm.svelte";
  const { handleSubmit, showModal, newMarker, cancel } = $props();
  let dialogElement: HTMLDialogElement;
  let dialogPosition: { left: number; top: number } = $state({
    left: 0,
    top: 0,
  });
  let ready = $state(false);
  $effect(() => {
    if (showModal) {
      dialogElement.showModal();
      dialogPosition = getDialogPosition(newMarker, dialogElement);
      ready = true;
      tick().then(() => dialogElement.querySelector("textarea")?.focus());
    } else {
      dialogElement.close();
      ready = false;
    }
  });
</script>

<dialog
  onclose={cancel}
  bind:this={dialogElement}
  class:is-visible={ready}
  style="--left: {dialogPosition.left}px; --top: {dialogPosition.top}px;"
>
  <CommentForm {handleSubmit} {cancel} />
</dialog>

<style>
  dialog {
    --loop-textarea-font-size: var(--comment-dialog-textarea-font-size);
    position: var(--comment-dialog-position);
    top: var(--top);
    left: var(--left);
    max-width: var(--comment-dialog-max-width);
    max-height: none;
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    border-radius: var(--comment-dialog-border-radius);
    overflow: hidden;
    visibility: hidden;
    box-shadow: var(--comment-dialog-shadow);
    &.is-visible {
      visibility: visible;
    }

    &::backdrop {
      background-color: var(--comment-dialog-backdrop-background);
    }
  }
</style>
