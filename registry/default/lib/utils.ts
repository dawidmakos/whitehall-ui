import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Custom tailwind-merge instance that understands Whitehall-UI @theme tokens.
 *
 * Out of the box tailwind-merge only knows Tailwind's default scales, so:
 * - `--spacing-govuk-*` utilities (`mb-govuk-3`) aren't recognised as spacing,
 *   and a `className="mb-0"` override would be kept alongside them and lose.
 * - Unknown `text-*` / `border-*` values are treated as colours, so font sizes
 *   (`text-govuk-body`) and border widths (`border-t-govuk-wide`) get stripped
 *   when a colour class from the same group is also present.
 */
const govukBorderWidths = [
  'govuk-standard',
  'govuk-wide',
  'govuk-exit-page-dot',
  'govuk-warning-icon-border',
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: [(value: string) => value.startsWith('govuk-')],
    },
    classGroups: {
      'border-w': [{ border: govukBorderWidths }],
      'border-w-t': [{ 'border-t': govukBorderWidths }],
      'border-w-b': [{ 'border-b': govukBorderWidths }],
      'border-w-l': [{ 'border-l': govukBorderWidths }],
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

export const mergeRefs =
  <T>(...refs: (React.Ref<T> | undefined)[]) =>
  (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }
  };
