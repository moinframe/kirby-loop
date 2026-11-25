/**
 * Performance-optimized resize handler with debouncing and RAF
 */

type ResizeCallback = () => void

interface ResizeHandlerOptions {
  /** Debounce delay in milliseconds (default: 100) */
  debounceDelay?: number;
  /** Whether to use requestAnimationFrame (default: true) */
  useRAF?: boolean;
}

class ResizeHandler {
  private callbacks = new Set<ResizeCallback>();
  private debounceTimer: number | null = null;
  private rafId: number | null = null;
  private isListening = false;
  private options: Required<ResizeHandlerOptions>;

  constructor(options: ResizeHandlerOptions = {}) {
    this.options = {
      debounceDelay: options.debounceDelay ?? 100,
      useRAF: options.useRAF ?? true,
    };
  }

  private handleResize = () => {
    // Clear existing timers
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    // Debounce the resize event
    this.debounceTimer = window.setTimeout(() => {
      if (this.options.useRAF) {
        // Use RAF for smooth updates
        this.rafId = requestAnimationFrame(() => {
          this.executeCallbacks();
        });
      } else {
        this.executeCallbacks();
      }
    }, this.options.debounceDelay);
  };

  private executeCallbacks() {
    this.callbacks.forEach(callback => {
      try {
        callback();
      } catch (error) {
        console.error('Error in resize callback:', error);
      }
    });
  }

  private startListening() {
    if (!this.isListening) {
      window.addEventListener('resize', this.handleResize, { passive: true });
      this.isListening = true;
    }
  }

  private stopListening() {
    if (this.isListening) {
      window.removeEventListener('resize', this.handleResize);
      this.isListening = false;
    }
  }

  /**
   * Add a callback to be executed on resize
   */
  subscribe(callback: ResizeCallback): () => void {
    this.callbacks.add(callback);
    this.startListening();

    // Return unsubscribe function
    return () => {
      this.callbacks.delete(callback);
      if (this.callbacks.size === 0) {
        this.stopListening();
      }
    };
  }

  /**
   * Clean up all resources
   */
  destroy() {
    this.callbacks.clear();
    this.stopListening();
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

// Singleton instance for global use
const globalResizeHandler = new ResizeHandler();

/**
 * Svelte composable for handling window resize events with performance optimization
 * @param callback Function to call on resize
 * @param options Configuration options
 * @returns Cleanup function
 */
export function useResizeHandler(
  callback: ResizeCallback,
  options?: ResizeHandlerOptions
): () => void {
  if (options) {
    // Create a new handler with custom options
    const handler = new ResizeHandler(options);
    return handler.subscribe(callback);
  } else {
    // Use the global handler
    return globalResizeHandler.subscribe(callback);
  }
}

export default useResizeHandler;