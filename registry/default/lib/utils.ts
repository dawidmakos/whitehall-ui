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
      'font-size': [
        {
          text: [
            'govuk-header',
            'govuk-header-link',
            'govuk-body',
            'govuk-body-small',
            'govuk-tag',
            'govuk-start',
            'govuk-heading-xl',
            'govuk-heading-l',
            'govuk-heading-m',
            'govuk-warning-icon',
            'govuk-phase-banner',
          ],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
