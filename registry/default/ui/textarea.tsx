import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  [
    'box-border block w-full mb-govuk-r6',
    'p-govuk-1',
    'border-2 border-govuk-black',
    'rounded-none',
    'appearance-none resize-y',
    'text-govuk-body leading-tight font-normal font-govuk',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed',
  ],
  {
    variants: {
      error: {
        true: 'border-govuk-error focus:border-govuk-black',
      },
    },
  },
);

type TextareaProps = React.ComponentProps<'textarea'> &
  VariantProps<typeof textareaVariants>;

const Textarea = ({ className, error, rows = 5, ...props }: TextareaProps) => (
  <textarea
    rows={rows}
    aria-invalid={error || undefined}
    className={cn(textareaVariants({ error }), className)}
    {...props}
  />
);

export { Textarea, textareaVariants, type TextareaProps };
