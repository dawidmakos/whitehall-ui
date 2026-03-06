import { Input } from '@base-ui/react/input';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textInputVariants = cva(
  [
    'box-border w-full',
    'h-10',
    'p-govuk-input-padding',
    'border-2 border-govuk-input-border',
    'rounded-none',
    'appearance-none',
    'text-govuk-body font-normal font-govuk',
    'focus:outline-3 focus:outline-govuk-focus focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-input-border',
    'data-[disabled]:opacity-50 data-[disabled]:bg-transparent data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      width: {
        full: '',
        30: 'max-w-govuk-input-width-30',
        20: 'max-w-govuk-input-width-20',
        10: 'max-w-govuk-input-width-10',
        5: 'max-w-govuk-input-width-5',
        4: 'max-w-govuk-input-width-4',
        3: 'max-w-govuk-input-width-3',
        2: 'max-w-govuk-input-width-2',
      },
      error: {
        true: 'border-govuk-error focus:border-govuk-input-border',
        false: '',
      },
      extraLetterSpacing: {
        true: 'tracking-govuk-code tabular-nums',
        false: '',
      },
    },
    defaultVariants: {
      width: 'full',
      error: false,
      extraLetterSpacing: false,
    },
  },
);

const affixStyles = [
  'box-border flex items-center justify-center',
  'min-w-10 h-10',
  'p-govuk-input-padding',
  'border-2 border-govuk-input-border',
  'bg-govuk-secondary',
  'text-govuk-body font-normal font-govuk',
  'text-center whitespace-nowrap',
  'cursor-default flex-none',
  'max-sm:block max-sm:h-auto max-sm:whitespace-normal',
].join(' ');

const prefixStyles = cn(affixStyles, 'sm:border-r-0', 'max-sm:border-b-0');

const suffixStyles = cn(affixStyles, 'sm:border-l-0', 'max-sm:border-t-0');

interface TextInputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'prefix'>,
    VariantProps<typeof textInputVariants> {
  ref?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const TextInput = ({
  className,
  width = 'full',
  error = false,
  extraLetterSpacing = false,
  type = 'text',
  disabled = false,
  prefix,
  suffix,
  ref,
  ...props
}: TextInputProps) => {
  const input = (
    <Input
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        textInputVariants({ width, error, extraLetterSpacing }),
        (prefix || suffix) && 'flex-auto focus:z-10 max-sm:max-w-full',
        className,
      )}
      {...props}
    />
  );

  if (!prefix && !suffix) return input;

  return (
    <div className='flex max-sm:block'>
      {prefix && (
        <span className={prefixStyles} aria-hidden='true'>
          {prefix}
        </span>
      )}
      {input}
      {suffix && (
        <span className={suffixStyles} aria-hidden='true'>
          {suffix}
        </span>
      )}
    </div>
  );
};

export { TextInput, textInputVariants, type TextInputProps };
