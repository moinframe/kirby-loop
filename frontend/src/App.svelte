<svelte:options customElement="kirby-loop" />

<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import Header from "./lib/Header.svelte";
  import Marker from "./lib/Marker.svelte";
  import Panel from "./lib/Panel.svelte";
  import store, { addReply, getComments } from "./store/api.svelte";
  import setNewMarker from "./composables/setNewMarker";
  import { addComment } from "./store/api.svelte";
  import CommentDialog from "./lib/CommentDialog.svelte";
  import WelcomeDialog from "./lib/WelcomeDialog.svelte";
  import { formData, reset } from "./store/form.svelte";
  import { overlay, guestName, panel } from "./store/ui.svelte";
  import { setTranslations } from "./store/translations.svelte";
  import type {
    LoopProps,
    ReplyPayload,
    CommentPayload,
    MarkerPosition,
  } from "./types";

  const {
    position,
    language,
    apibase,
    pageId,
    authenticated,
    "welcome-enabled": welcomeEnabled,
    "welcome-headline": welcomeHeadline,
    "welcome-text": welcomeText,
    translations,
  }: LoopProps = $props();

  let showLoop = $state(false);

  // Feedback Dialog
  let showModal = $state(false);
  let welcomeDialog: { showModal: () => void; close: () => void };
  let isAuthenticated = $derived(authenticated === "true");
  let isWelcomeEnabled = $derived(welcomeEnabled === "true");

  // Filter comments to show only non-resolved ones for markers
  const visibleComments = $derived(
    store.comments.filter((c) => c.status !== "RESOLVED"),
  );

  // Session storage key for tracking welcome dialog dismissal (global)
  const welcomeDismissedKey = "loop-welcome-dismissed";

  // Check if welcome was dismissed for authenticated users
  const isWelcomeDismissed = () => {
    if (!isAuthenticated) return false;
    return sessionStorage.getItem(welcomeDismissedKey) === "true";
  };

  // Mark welcome as dismissed for authenticated users
  const markWelcomeDismissed = () => {
    if (isAuthenticated) {
      sessionStorage.setItem(welcomeDismissedKey, "true");
    }
  };
  // Default state for markers
  let newMarker: MarkerPosition | null = $state(null);

  /**
   * Scroll a marker into view
   * @param id The id of the marker
   */
  const scrollIntoView = (id: string) => {
    const marker = $host().shadowRoot?.getElementById(`marker-${id}`);
    if (marker) marker.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /**
   * Focus a comment coming from a deep link (#loop-comment-{id}):
   * open the panel, reveal resolved comments if needed, scroll to the
   * marker (or its panel entry when there is no marker) and pulse it.
   * @param id The id of the comment
   */
  const focusComment = async (id: number) => {
    const comment = store.comments.find((c) => c.id === id);
    if (!comment) return;

    panel.open = true;
    panel.currentCommentId = id;
    if (comment.status === "RESOLVED") {
      panel.showResolvedOnly = true;
    }

    // Wait for the panel/markers to render before scrolling.
    await tick();
    requestAnimationFrame(() => {
      const root = $host().shadowRoot;
      // Page: bring the marker into view (resolved comments have none).
      root
        ?.getElementById(`marker-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      // Sidebar: bring the matching comment thread into view.
      root
        ?.getElementById(`comment-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

      panel.pulseMarkerId = id;
      setTimeout(() => {
        if (panel.pulseMarkerId === id) panel.pulseMarkerId = 0;
      }, 3000);
    });
  };

  /**
   * Open the panel and scroll the matching comment thread into view
   * when a marker on the page is clicked.
   * @param id The id of the comment
   */
  const selectComment = (id: number) => {
    panel.open = true;
    panel.currentCommentId = id;
    requestAnimationFrame(() => {
      $host()
        .shadowRoot?.getElementById(`comment-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  /**
   * Read the current URL hash and focus the referenced comment, if any.
   */
  const handleDeepLink = () => {
    const match = window.location.hash.match(/^#loop-comment-(\d+)$/);
    if (match) focusComment(Number(match[1]));
  };

  /**
   * Click to add a new comment
   * @param e The click event
   */
  const clickToComment = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const clickedOnLoop =
      target.nodeName === "KIRBY-LOOP" || target.parentElement?.closest("loop");

    // Do nothing if feedback mode is off or the click is on loop elements
    if (!overlay.open || clickedOnLoop) return;

    // For non-authenticated users, require a guest name before allowing comments
    if (!isAuthenticated && !guestName.get()) {
      welcomeDialog?.showModal();
      return;
    }

    // Get new marker
    const marker = setNewMarker(e);
    if (!marker) return;
    newMarker = marker;
    // Open comment form dialog
    showModal = true;
  };

  const cancel = () => {
    showModal = false;
    reset();
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    // For non-authenticated users, require a guest name before allowing comments or replies
    if (!isAuthenticated && !guestName.get()) {
      welcomeDialog?.showModal();
      return;
    }

    const { text, parentId } = formData;
    // submit is a reply
    if (parentId) {
      const reply: ReplyPayload = {
        parentId,
        comment: text,
      };
      // add reply to api
      addReply(reply);
      // reset form data
      reset();
      // submit is a comment
    } else {
      if (!newMarker) return;

      // Use language from component attribute
      const lang = language || "";

      const comment: CommentPayload = {
        url: window.location.href,
        comment: text,
        parentId: null,
        lang,
        pageId,
        ...newMarker,
      };

      // close modal
      showModal = false;
      // add comment to api
      addComment(comment);
      // reset form data
      reset();
    }
  };

  onMount(async () => {
    // Initialize translations
    const translationsData = JSON.parse(translations || "{}");
    setTranslations(translationsData);

    showLoop = await getComments(pageId);

    // Honor a deep link to a specific comment (#loop-comment-{id}).
    if (showLoop) {
      handleDeepLink();
      window.addEventListener("hashchange", handleDeepLink);
    }

    // Initialize guest name from session storage
    guestName.get();

    // Show welcome dialog on page load if enabled and conditions are met
    if (isWelcomeEnabled && showLoop) {
      // For authenticated users, show only if not dismissed
      // For unauthenticated users, show if no guest name is set (mandatory)
      if (
        (isAuthenticated && !isWelcomeDismissed()) ||
        (!isAuthenticated && !guestName.get())
      ) {
        welcomeDialog?.showModal();
      }
    }
    // Even if welcome is disabled, show dialog for non-authenticated users without a name
    else if (!isAuthenticated && !guestName.get() && showLoop) {
      welcomeDialog?.showModal();
    }
  });

  onDestroy(() => {
    window.removeEventListener("hashchange", handleDeepLink);
  });

  $effect(() => {
    if (overlay.open) {
      document.body.style.setProperty(
        "cursor",
        `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='black' stroke-width='1.5'/%3E%3Cpath d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z' stroke='white' stroke-width='0.75'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"), auto`,
      );
    } else {
      document.body.style.removeProperty("cursor");
    }

    document.documentElement.classList.toggle(
      "loop-overlay-open",
      overlay.open,
    );
  });
</script>

<svelte:document on:click={clickToComment} />

{#if showLoop}
  <Header {position} commentsCount={visibleComments.length} />

  <Panel {scrollIntoView} {handleSubmit} {cancel} />

  {#each visibleComments as comment (comment.id)}
    <Marker {comment} {selectComment} />
  {/each}

  <CommentDialog {handleSubmit} {showModal} {newMarker} {cancel} />
{/if}

<WelcomeDialog
  bind:this={welcomeDialog}
  headline={welcomeHeadline || ""}
  text={welcomeText || ""}
  authenticated={isAuthenticated}
  welcomeEnabled={isWelcomeEnabled}
  onDismiss={markWelcomeDismissed}
/>

<style>
  /*
    Marker styles must live here on the host custom element so they are always
    injected into the shadow root, regardless of whether a marker is present on
    initial render. They target a child component's element, hence :global.
  */
  :global(.marker) {
    position: var(--marker-position);
    z-index: var(--marker-z-index);
    transform: var(--marker-transform);
    border-radius: var(--marker-border-radius);
  }

  :global(.marker--pulse) {
    animation: kirby-loop-pulse 1.5s ease-in-out infinite;
  }

  /* -global- keeps the keyframes name unscoped so the :global rule above can reference it */
  @keyframes -global-kirby-loop-pulse {
    0% {
      box-shadow:
        0 0 0 0 var(--color-accent),
        0 0 0 0 rgba(128, 128, 128, 0.3),
        0 0 0 0 rgba(128, 128, 128, 0.2);
    }
    30% {
      box-shadow:
        0 0 0 8px transparent,
        0 0 0 0 rgba(128, 128, 128, 0.3),
        0 0 0 0 rgba(128, 128, 128, 0.2);
    }
    60% {
      box-shadow:
        0 0 0 8px rgba(128, 128, 128, 0.15),
        0 0 0 12px transparent,
        0 0 0 0 rgba(128, 128, 128, 0.2);
    }
    100% {
      box-shadow:
        0 0 0 16px transparent,
        0 0 0 12px transparent,
        0 0 0 8px transparent;
    }
  }
</style>
