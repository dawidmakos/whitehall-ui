import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const selectVariants = cva(
  [
    'box-border',
    'min-w-govuk-input-width-10 max-w-full',
    'h-10',
    'p-govuk-1',
    'border-2 border-govuk-black',
    'rounded-none',
    'text-govuk-body leading-tight font-normal font-govuk text-govuk-black',
    'bg-white',
    'cursor-pointer',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      error: {
        true: 'border-govuk-error focus:border-govuk-black',
      },
    },
  },
);

type SelectProps = React.ComponentProps<'select'> &
  VariantProps<typeof selectVariants>;

const Select = ({ className, error, ...props }: SelectProps) => (
  <select
    aria-invalid={error || undefined}
    className={cn(selectVariants({ error }), className)}
    {...props}
  />
);

export { Select, selectVariants, type SelectProps };
