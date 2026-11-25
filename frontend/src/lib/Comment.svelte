<script lang="ts">
  import { untrack } from "svelte";
  import { resolveComment, unresolveComment } from "../store/api.svelte";
  import { t } from "../store/translations.svelte";
  import type { Comment } from "../types";
  import { panel } from "../store/ui.svelte";
  import Button from "./Button.svelte";
  import CommentForm from "./CommentForm.svelte";
  import Reply from "./Reply.svelte";
  import { formatDate } from "../composables/formatDate";
  import { formatDateISO } from "../composables/formatDateISO";
  import { decodeHTMLEntities } from "../composables/decodeHTMLEntities";
  const {
    comment,
    scrollIntoView,
    handleSubmit,
    cancel,
  }: {
    comment: Comment;
    scrollIntoView: (id: number) => void;
    handleSubmit: (e: SubmitEvent) => void;
    cancel: () => void;
  } = $props();

  let openReplyForm = $state(false);
  // Only the initial open state comes from the comment, afterwards the user toggles it.
  let detailsOpen = $state(
    untrack(() => comment.replies?.length > 0 && !panel.showResolvedOnly),
  );
</script>

<details
  id="comment-{comment.id}"
  class="comment comment--{comment.status}"
  class:comment--current={panel.currentCommentId === comment.id}
  bind:open={detailsOpen}
>
  <summary
    class="comment__header"
    aria-label="{t(
      'ui.comment.summary.aria.label',
      'Comment by',
    )} {comment.author}: {decodeHTMLEntities(comment.comment)}"
  >
    <Button
      style="button--marker button--marker-{comment.status} {panel.currentCommentId ===
      comment.id
        ? 'button--marker-highlighted'
        : ''}"
      onclick={() => scrollIntoView(comment.id)}
      onmouseenter={() => (panel.pulseMarkerId = comment.id)}
      onmouseout={() => (panel.pulseMarkerId = 0)}
      ariaLabel={`${t("ui.comment.maker.aria.label", "Jump to marker")} ${comment.id}`}
    >
      {comment.id}
    </Button>
    <div class="comment__content">
      <header>
        <strong>{comment.author}</strong>
        <time
          datetime={formatDateISO(comment.timestamp)}
          title={formatDate(comment.timestamp, false)}
        >
          {formatDate(comment.timestamp)}
        </time>
      </header>
      <div class="comment__text">{decodeHTMLEntities(comment.comment)}</div>
    </div>

    {#if !detailsOpen}
      <Button
        style="button--solid button--small comment__replies-count"
        ariaLabel={`${t("ui.comment.replies.aria.label", "Show replies")} ${comment.id}`}
        onclick={() => {
          detailsOpen = !detailsOpen;
        }}
      >
        {comment.replies?.length > 0 ? `+${comment.replies.length}` : "+"}
      </Button>
    {/if}
  </summary>

  {#if comment.replies?.length > 0}
    <ul class="comment__replies">
      {#each comment.replies as reply (reply.id)}
        <li>
          <Reply {reply} />
        </li>
      {/each}
    </ul>
  {/if}

  <footer>
    {#if openReplyForm}
      <CommentForm
        handleSubmit={(e) => {
          openReplyForm = false;
          handleSubmit(e);
        }}
        cancel={() => {
          openReplyForm = false;
          cancel();
        }}
        parentId={comment.id}
      />
    {:else}
      <div class="buttons">
        {#if comment.status === "OPEN"}
          <Button style="button--solid" onclick={() => (openReplyForm = true)}>
            {t("ui.reply.submit", "Reply")}
          </Button>
          <Button onclick={() => resolveComment(comment)}>
            {t("ui.comment.mark.solved", "Resolve")}
          </Button>
        {:else}
          <Button onclick={() => unresolveComment(comment)}>
            {t("ui.comment.mark.unsolved", "Reopen")}
          </Button>
        {/if}
      </div>
    {/if}
  </footer>
</details>

<style>
  .comment {
    --loop-marker-background: var(--comment-marker-background);
    --loop-marker-color: var(--comment-marker-color);
    --marker-size: var(--comment-avatar-size);
    position: relative;

    > * {
      z-index: 1;
      position: relative;
    }

    &::after {
      content: "";
      position: absolute;
      left: var(--comment-line-offset);
      top: 1.5rem;
      width: var(--comment-line-width);
      height: calc(100% - 4rem);
      background-color: var(--comment-line-background);
      z-index: 0;
    }
  }

  .comment:not([open]) {
    &::after {
      height: calc(100% - 2.75rem);
    }
  }

  .comment__header {
    display: flex;
    font-size: var(--comment-header-font-size);
    padding: var(--comment-header-padding);
    gap: var(--comment-header-gap);
    cursor: pointer;
    border-radius: var(--comment-header-border-radius);

    &:focus-visible {
      outline: 2px solid var(--comment-header-outline-color);
      outline-offset: var(--comment-header-outline-offset);
    }

    :global(.comment__replies-count) {
      position: absolute;
      bottom: 0;
      left: var(--space-s);
      min-width: var(--comment-avatar-size);
    }

    header {
      display: flex;
      gap: var(--comment-author-gap);
      align-items: center;
      justify-content: flex-start;
      margin-bottom: var(--comment-author-margin-bottom);
      time {
        font-size: var(--comment-timestamp-font-size);
        color: var(--comment-timestamp-color);
      }
    }

    .comment__content {
      padding: var(--comment-content-padding);
      background-color: var(--comment-content-background);
      border-radius: var(--comment-content-border-radius);
      flex: 1;

      @media (prefers-color-scheme: dark) {
        background-color: var(--comment-content-background-dark);
      }
    }

    .comment__text {
      white-space: pre-line;
    }
  }

  .comment__replies {
    list-style: none;
    margin: 0;
    padding: var(--comment-replies-padding);
    display: flex;
    flex-direction: column;
    gap: var(--comment-replies-gap);
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: var(--comment-footer-gap);
    padding: var(--comment-footer-padding);
    .buttons {
      display: flex;
      gap: var(--comment-buttons-gap);
      align-items: flex-end;
    }
  }

  .is-hidden {
    display: none;
  }
</style>
