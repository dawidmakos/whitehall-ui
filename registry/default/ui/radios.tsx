import { useId } from 'react';
import { RadioGroup } from '@base-ui/react/radio-group';
import { Radio } from '@base-ui/react/radio';
import { cn } from '@/lib/utils';

interface RadiosProps extends Omit<
  React.ComponentProps<typeof RadioGroup>,
  'className'
> {
  className?: string;
  inline?: boolean;
}

const Radios = ({ className, inline, ...props }: RadiosProps) => (
  <RadioGroup
    className={cn(
      inline && 'sm:flex sm:flex-wrap sm:items-start sm:gap-x-govuk-4',
      className,
    )}
    {...props}
  />
);

interface RadiosItemProps extends Omit<
  React.ComponentProps<typeof Radio.Root>,
  'className'
> {
  className?: string;
}

const RadiosItem = ({ className, children, ...props }: RadiosItemProps) => {
  const labelId = useId();

  return (
    <label
      className={cn(
        'flex flex-wrap items-start',
        'relative',
        'mb-govuk-2 last:mb-0',
        'cursor-pointer',
        'has-data-[disabled]:opacity-50 has-data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      <Radio.Root
        aria-labelledby={labelId}
        className={cn(
          'group/radio',
          'relative flex-none',
          'w-govuk-radio-touch-target h-govuk-radio-touch-target',
          'outline-none',
        )}
        {...props}
      >
        <span
          aria-hidden='true'
          className={cn(
            'absolute box-border',
            'top-[calc(var(--spacing-govuk-radio-gutter)/2)] left-[calc(var(--spacing-govuk-radio-gutter)/2)]',
            'w-govuk-radio-size h-govuk-radio-size',
            'rounded-full',
            'border-2 border-current bg-transparent',
            'group-focus/radio:border-4',
            'group-focus/radio:shadow-[0_0_0_var(--spacing-govuk-radio-focus-width)_var(--color-govuk-yellow)]',
            'group-focus/radio:outline-govuk-radio-focus-width group-focus/radio:outline-transparent group-focus/radio:outline-offset-1',
          )}
        />
        <Radio.Indicator
          keepMounted
          className={cn(
            'absolute',
            'top-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-dot))]',
            'left-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-dot))]',
            'w-0 h-0',
            'rounded-full',
            'border-(length:--spacing-govuk-radio-dot) border-current',
            'bg-current',
            'opacity-0 data-checked:opacity-100',
          )}
        />
      </Radio.Root>

      <span
        id={labelId}
        className={cn(
          'self-center',
          'py-govuk-button-pb px-govuk-radio-label-padding-x',
          'text-govuk-tag font-normal font-govuk',
          'max-w-[calc(100%-74px)]',
        )}
      >
        {children}
      </span>
    </label>
  );
};

type RadiosHintProps = React.ComponentProps<'span'>;

const RadiosHint = ({ className, ...props }: RadiosHintProps) => (
  <span
    className={cn(
      'block w-full',
      '-mt-govuk-3 mb-govuk-2 last:mb-0',
      'pr-govuk-radio-label-padding-x',
      'pl-[calc(var(--spacing-govuk-radio-label-padding-x)+var(--spacing-govuk-radio-touch-target))]',
      'text-govuk-tag font-normal font-govuk text-govuk-dark-grey',
      className,
    )}
    {...props}
  />
);

type RadiosDividerProps = React.ComponentProps<'div'>;

const RadiosDivider = ({
  className,
  children = 'or',
  ...props
}: RadiosDividerProps) => (
  <div
    className={cn(
      'w-govuk-radio-size',
      'mb-govuk-2',
      'text-govuk-tag font-normal font-govuk text-govuk-black',
      'text-center',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export {
  Radios,
  RadiosItem,
  RadiosHint,
  RadiosDivider,
  type RadiosProps,
  type RadiosItemProps,
  type RadiosHintProps,
  type RadiosDividerProps,
};
