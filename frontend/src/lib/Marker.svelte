<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import type { Comment } from "../types";
  import { panel } from "../store/ui.svelte";
  import useResizeHandler from "../composables/useResizeHandler";
  import { getDocumentHeight } from "../composables/getDocumentHeight";
  import Button from "./Button.svelte";
  const {
    comment,
    selectComment,
  }: { comment: Comment; selectComment: (id: number) => void } = $props();

  let shouldPulse = $state(false);

  // Listen for marker pulse triggers from the panel
  $effect(() => {
    shouldPulse = panel.pulseMarkerId === comment.id;
  });

  let markerElement: HTMLElement | null = $state(null);
  let targetElement: HTMLElement | null = $state(null);
  let unsubscribeResize: (() => void) | null = $state(null);

  onMount(() => {
    // Delay initial positioning to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      positionMarker();
    });

    // Subscribe to resize events for repositioning markers
    unsubscribeResize = useResizeHandler(() => {
      positionMarker();
    });
  });

  onDestroy(() => {
    // Clean up resize listener
    if (unsubscribeResize) {
      unsubscribeResize();
    }
  });

  function positionMarker() {
    if (!comment || !markerElement) return;

    try {
      targetElement = document.querySelector(comment.selector);

      let absoluteX: number;
      let absoluteY: number;

      if (targetElement) {
        // Position based on selector if element is found
        const targetRect = targetElement.getBoundingClientRect();

        // Calculate position using the percentage values directly
        const offsetXInPixels =
          (targetRect.width * comment.selectorOffsetX) / 100;
        const offsetYInPixels =
          (targetRect.height * comment.selectorOffsetY) / 100;

        // Calculate absolute position accounting for scroll
        absoluteX = targetRect.left + window.scrollX + offsetXInPixels;
        absoluteY = targetRect.top + window.scrollY + offsetYInPixels;
      } else {
        // Fallback to absolute page position if selector is not found
        absoluteX = Number(comment.pagePositionX);
        absoluteY = Number(comment.pagePositionY);
      }

      // Get marker dimensions for boundary calculations
      const markerRect = markerElement.getBoundingClientRect();
      const markerWidth = markerRect.width || 32; // fallback to default marker size
      const markerHeight = markerRect.height || 32;

      // Calculate half dimensions for transform: translate(-50%, -50%)
      const halfWidth = markerWidth / 2;
      const halfHeight = markerHeight / 2;

      // Get document and viewport dimensions
      const documentHeight = getDocumentHeight();
      const viewportWidth = window.innerWidth;

      // Calculate boundaries
      // X-axis: constrain to viewport to prevent horizontal scrolling
      const minX = halfWidth;
      const maxX = viewportWidth - halfWidth;

      // Y-axis: constrain to document height to prevent overflow but allow positioning anywhere in document
      const minY = halfHeight;
      const maxY = documentHeight - halfHeight;

      // Constrain position within boundaries
      const constrainedX = Math.max(minX, Math.min(maxX, absoluteX));
      const constrainedY = Math.max(minY, Math.min(maxY, absoluteY));

      // Set absolute position
      markerElement.style.left = `${constrainedX}px`;
      markerElement.style.top = `${constrainedY}px`;
    } catch (error) {
      console.error("Error positioning marker:", error);
    }
  }

  function handleMouseEnter(id: number) {
    panel.currentCommentId = id;
  }

  function handleMouseOut() {
    panel.currentCommentId = 0;
  }

  function handleClick() {
    selectComment(comment.id);
  }
</script>

{#if comment}
  <div
    bind:this={markerElement}
    class="marker marker--{comment.status}"
    class:marker--pulse={shouldPulse}
    id="marker-{comment.id}"
  >
    <Button
      onmouseenter={() => handleMouseEnter(comment.id)}
      onmouseout={handleMouseOut}
      onblur={handleMouseOut}
      onclick={handleClick}
      style="button--marker button--marker-{comment.status}"
    >
      {comment.id}
    </Button>
  </div>
{/if}

<style>
  .marker {
    position: var(--marker-position);
    z-index: var(--marker-z-index);
    transform: var(--marker-transform);
    border-radius: var(--marker-border-radius);
  }

  .marker--pulse {
    animation: kirby-loop-pulse 1.5s ease-in-out infinite;
  }

  @keyframes kirby-loop-pulse {
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
