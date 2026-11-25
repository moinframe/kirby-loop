<script lang="ts">
  import { untrack } from "svelte";
  import Button from "./Button.svelte";
  import { t } from "../store/translations.svelte";
  const {
    handleSubmit,
    cancel,
    parentId = null,
  }: {
    handleSubmit: (e: SubmitEvent) => void;
    cancel: () => void;
    parentId?: number | null;
  } = $props();
  import { formData } from "../store/form.svelte";
  formData.parentId = untrack(() => (parentId ? Number(parentId) : null));

  function handleKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      const form = (e.currentTarget as Element)?.closest("form");
      if (form) {
        form.requestSubmit();
      }
    }
  }
</script>

<form onsubmit={handleSubmit} method="POST">
  <div class="input">
    <textarea
      bind:value={formData.text}
      name="comment"
      placeholder={parentId
        ? t("ui.reply.placeholder", "Write a reply...")
        : t("ui.comment.placeholder", "Enter your comment...")}
      onkeydown={handleKeydown}
      required
    ></textarea>
  </div>
  <div class="keyboard-hint">
    {t("ui.comment.keyboardHint", "⌘+Enter or Ctrl+Enter to submit")}
  </div>
  <footer>
    <Button type="submit" style="button--solid">
      {parentId
        ? t("ui.reply.submit", "Reply")
        : t("ui.comment.submit", "Submit")}
    </Button>
    <Button onclick={cancel}>{t("ui.comment.cancel", "Cancel")}</Button>
  </footer>
</form>

<style>
  form {
    padding: 0;
    cursor: auto;
    background-color: var(--comment-form-background);
    color: var(--comment-form-color);
    border-radius: var(--comment-form-border-radius);
    overflow: hidden;
    border: var(--comment-form-border);
  }

  textarea {
    width: 100%;
    border: 0;
    height: var(--comment-form-textarea-height);
    resize: none;
    padding: var(--comment-form-textarea-padding);
    box-sizing: border-box;
    background-color: var(--comment-form-textarea-background);
    font-family: var(--comment-form-textarea-font-family);
    font-size: var(--comment-form-textarea-font-size);
    color: currentColor;
    margin: 0;

    &:focus-visible,
    &:focus {
      outline: 0;
    }
  }

  footer {
    padding: var(--comment-form-footer-padding);
    display: flex;
    gap: var(--comment-form-footer-gap);
    :global(button) {
      flex: 1;
    }
  }

  .keyboard-hint {
    font-size: var(--comment-form-hint-font-size);
    color: var(--comment-form-hint-color);
    padding: var(--comment-form-hint-padding);
    align-self: center;
    white-space: nowrap;
    margin-left: auto;
  }
</style>
