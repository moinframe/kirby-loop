/**
 * CSS Selector Generator Composable
 * Generates reliable, unique CSS selectors for clicked DOM elements
 */

type SelectorStrategy = {
  name: string;
  generator: (element: Element) => string | null;
  priority: number;
};

/**
 * Main composable function to generate CSS selector from click event
 * @param event - Mouse event from user click
 * @returns CSS selector string that uniquely identifies the clicked element
 */
export function useGenerateSelector(event: MouseEvent): string {
  const target = event.target as Element;

  if (!target) {
    throw new Error('No target element found in event');
  }

  // Try each strategy in priority order
  const strategies = getSelectorStrategies();

  for (const strategy of strategies) {
    try {
      const selector = strategy.generator(target);

      if (selector && validateSelector(selector, target)) {
        return selector;
      }
    } catch (error) {
      console.warn(`Strategy ${strategy.name} failed:`, error);
    }
  }

  // Ultimate fallback - generate a path selector
  return generatePathSelector(target);
}

/**
 * Define selector generation strategies in priority order
 */
function getSelectorStrategies(): SelectorStrategy[] {
  return [
    {
      name: 'ID',
      priority: 1,
      generator: (element: Element) => {
        if (element.id && isValidId(element.id)) {
          return `#${CSS.escape(element.id)}`;
        }
        return null;
      }
    },
    {
      name: 'Unique Attributes',
      priority: 2,
      generator: (element: Element) => {
        const uniqueAttrs = ['data-testid', 'data-id', 'name', 'for'];

        for (const attr of uniqueAttrs) {
          const value = element.getAttribute(attr);
          if (value) {
            const selector = `${element.tagName.toLowerCase()}[${attr}="${CSS.escape(value)}"]`;
            if (isUniqueSelector(selector)) {
              return selector;
            }
          }
        }
        return null;
      }
    },
    {
      name: 'Semantic Attributes',
      priority: 3,
      generator: (element: Element) => {
        const semanticAttrs = [
          'aria-label',
          'aria-labelledby',
          'role',
          'type',
          'placeholder',
          'title',
          'alt'
        ];

        const tagName = element.tagName.toLowerCase();
        const selectors: string[] = [tagName];

        for (const attr of semanticAttrs) {
          const value = element.getAttribute(attr);
          if (value) {
            selectors.push(`[${attr}="${CSS.escape(value)}"]`);
          }
        }

        if (selectors.length > 1) {
          const selector = selectors.join('');
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }

        return null;
      }
    },
    {
      name: 'Structural Attributes',
      priority: 4,
      generator: (element: Element) => {
        const structuralAttrs = ['href', 'src', 'action', 'value'];
        const tagName = element.tagName.toLowerCase();

        for (const attr of structuralAttrs) {
          const value = element.getAttribute(attr);
          if (value && value.length > 0) {
            const selector = `${tagName}[${attr}="${CSS.escape(value)}"]`;
            if (isUniqueSelector(selector)) {
              return selector;
            }
          }
        }

        return null;
      }
    },
    {
      name: 'Class Combinations',
      priority: 5,
      generator: (element: Element) => {
        const classes = getStableClasses(element);

        if (classes.length === 0) {
          return null;
        }

        const tagName = element.tagName.toLowerCase();

        // Try single class first
        for (const className of classes) {
          const selector = `${tagName}.${CSS.escape(className)}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }

        // Try combinations of classes
        if (classes.length >= 2) {
          const classSelector = classes.slice(0, 3).map(c => `.${CSS.escape(c)}`).join('');
          const selector = `${tagName}${classSelector}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }

        return null;
      }
    },
    {
      name: 'Parent Context',
      priority: 6,
      generator: (element: Element) => {
        const parent = element.parentElement;
        if (!parent) return null;

        // Try to get a unique selector for parent
        const parentSelector = getSimpleSelector(parent);
        if (!parentSelector) return null;

        const tagName = element.tagName.toLowerCase();
        const siblingIndex = getSiblingIndex(element);

        if (siblingIndex > 0) {
          const selector = `${parentSelector} > ${tagName}:nth-of-type(${siblingIndex})`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }

        // Try with classes
        const classes = getStableClasses(element);
        if (classes.length > 0) {
          const selector = `${parentSelector} > ${tagName}.${CSS.escape(classes[0])}`;
          if (isUniqueSelector(selector)) {
            return selector;
          }
        }

        return null;
      }
    }
  ];
}

/**
 * Get stable classes (excluding utility/state classes)
 */
function getStableClasses(element: Element): string[] {
  const classes = Array.from(element.classList);

  // Filter out common utility/state classes
  const unstablePatterns = [
    /^(is-|has-|js-)/,           // State prefixes
    /^(active|disabled|loading|selected|hover|focus)/,  // State classes
    /^[a-z]+-[0-9]+$/,           // Generated classes like 'item-123'
    /^(sm-|md-|lg-|xl-)/,        // Responsive utilities
    /^(m-|p-|w-|h-|text-|bg-)/,  // Tailwind-like utilities
    /^[a-f0-9]{6,}$/,            // Hash-like classes
  ];

  return classes.filter(className => {
    return !unstablePatterns.some(pattern => pattern.test(className));
  });
}

/**
 * Generate a path-based selector as fallback
 */
function generatePathSelector(element: Element): string {
  const path: string[] = [];
  let current: Element | null = element;

  while (current && current !== document.body && path.length < 5) {
    const selector = getElementSelector(current);
    path.unshift(selector);

    // Check if this partial path is unique
    const partialSelector = path.join(' > ');
    if (isUniqueSelector(partialSelector)) {
      return partialSelector;
    }

    current = current.parentElement;
  }

  return path.join(' > ');
}

/**
 * Get a simple selector for an element
 */
function getSimpleSelector(element: Element): string | null {
  // Try ID first
  if (element.id && isValidId(element.id)) {
    return `#${CSS.escape(element.id)}`;
  }

  // Try unique attributes
  const uniqueAttrs = ['data-testid', 'data-id', 'name'];
  for (const attr of uniqueAttrs) {
    const value = element.getAttribute(attr);
    if (value) {
      return `[${attr}="${CSS.escape(value)}"]`;
    }
  }

  // Try tag + first stable class
  const tagName = element.tagName.toLowerCase();
  const classes = getStableClasses(element);

  if (classes.length > 0) {
    return `${tagName}.${CSS.escape(classes[0])}`;
  }

  return null;
}

/**
 * Get selector for element in path
 */
function getElementSelector(element: Element): string {
  const tagName = element.tagName.toLowerCase();

  // Use ID if available
  if (element.id && isValidId(element.id)) {
    return `#${CSS.escape(element.id)}`;
  }

  // Use classes if available
  const classes = getStableClasses(element);
  if (classes.length > 0) {
    return `${tagName}.${CSS.escape(classes[0])}`;
  }

  // Use nth-of-type for siblings
  const index = getSiblingIndex(element);
  if (index > 1) {
    return `${tagName}:nth-of-type(${index})`;
  }

  return tagName;
}

/**
 * Get sibling index for nth-of-type
 */
function getSiblingIndex(element: Element): number {
  let index = 1;
  let sibling = element.previousElementSibling;

  while (sibling) {
    if (sibling.tagName === element.tagName) {
      index++;
    }
    sibling = sibling.previousElementSibling;
  }

  return index;
}

/**
 * Validate that a selector uniquely identifies the target element
 */
function validateSelector(selector: string, target: Element): boolean {
  try {
    const matches = document.querySelectorAll(selector);
    return matches.length === 1 && matches[0] === target;
  } catch (error) {
    console.warn(`Invalid selector: ${selector}`, error);
    return false;
  }
}

/**
 * Check if a selector matches exactly one element
 */
function isUniqueSelector(selector: string): boolean {
  try {
    const matches = document.querySelectorAll(selector);
    return matches.length === 1;
  } catch {
    return false;
  }
}

/**
 * Check if ID is valid (not auto-generated)
 */
function isValidId(id: string): boolean {
  // Skip IDs that look auto-generated
  const invalidPatterns = [
    /^[a-f0-9]{8,}$/,           // Hex strings
    /^(ember|react|vue)[0-9]+/, // Framework generated
    /^[0-9]+$/,                 // Pure numbers
    /^temp-/,                   // Temporary prefixes
  ];

  return !invalidPatterns.some(pattern => pattern.test(id));
}
