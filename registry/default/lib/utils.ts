import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Custom tailwind-merge instance that understands Whitehall-UI @theme tokens.
 *
 * Tailwind 4 uses the `--text-*` namespace for both font-size utilities
 * (e.g. `text-govuk-body`) and color utilities (e.g. `text-white`).
 * Out-of-the-box tailwind-merge treats unknown `text-*` classes as
 * text-color, so `text-govuk-body` gets stripped when `text-white` is
 * also present. We fix this by telling tailwind-merge which custom
 * `text-*` classes are font-sizes.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['govuk-body', 'govuk-start', 'govuk-tag'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
