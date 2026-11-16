import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textInputVariants = cva(
  [
    'box-border w-full',
    'h-10',
    'p-govuk-1',
    'border-2 border-govuk-black',
    'rounded-none',
    'appearance-none',
    'text-govuk-body font-normal font-govuk',
    'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
    'focus:inset-ring-2 focus:inset-ring-govuk-black',
    'disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed',
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
        true: 'border-govuk-error focus:border-govuk-black',
      },
      extraLetterSpacing: {
        true: 'tracking-govuk-code tabular-nums',
      },
    },
    defaultVariants: {
      width: 'full',
    },
  },
);

const affixStyles = [
  'box-border flex items-center justify-center',
  'min-w-10 h-10',
  'p-govuk-1',
  'border-2 border-govuk-black',
  'bg-govuk-light-grey text-govuk-black',
  'text-govuk-body font-normal font-govuk',
  'text-center whitespace-nowrap',
  'cursor-default flex-none',
  'max-[20em]:block max-[20em]:h-auto max-[20em]:whitespace-normal',
].join(' ');

const prefixStyles = cn(
  affixStyles,
  'min-[20em]:border-r-0',
  'max-[20em]:border-b-0',
);

const suffixStyles = cn(
  affixStyles,
  'min-[20em]:border-l-0',
  'max-[20em]:border-t-0',
);

interface TextInputProps
  extends
    Omit<React.ComponentProps<'input'>, 'width' | 'prefix'>,
    VariantProps<typeof textInputVariants> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const TextInput = ({
  className,
  width = 'full',
  error,
  extraLetterSpacing,
  prefix,
  suffix,
  ...props
}: TextInputProps) => {
  const input = (
    <input
      aria-invalid={error || undefined}
      className={cn(
        textInputVariants({ width, error, extraLetterSpacing }),
        (prefix || suffix) && 'flex-auto focus:z-10 max-[20em]:max-w-full',
        className,
      )}
      {...props}
    />
  );

  if (!prefix && !suffix) return input;

  return (
    <div className='flex max-[20em]:block'>
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
