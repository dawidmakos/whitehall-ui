import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  [
    'box-border w-full',
    'p-govuk-1',
    'border-2 border-govuk-black',
    'rounded-none',
    'appearance-none resize-y',
    'text-govuk-body font-normal font-govuk',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed',
  ],
  {
    variants: {
      error: {
        true: 'border-govuk-error focus:border-govuk-black',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
);

interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>,
    VariantProps<typeof textareaVariants> {
  ref?: React.Ref<HTMLTextAreaElement>;
  className?: string;
}

const Textarea = ({
  className,
  error = false,
  rows = 5,
  disabled = false,
  'aria-describedby': ariaDescribedBy,
  ref,
  ...props
}: TextareaProps) => (
  <textarea
    ref={ref}
    rows={rows}
    disabled={disabled}
    aria-invalid={error || undefined}
    aria-describedby={ariaDescribedBy || undefined}
    className={cn(textareaVariants({ error }), className)}
    {...props}
  />
);

export { Textarea, textareaVariants, type TextareaProps };
