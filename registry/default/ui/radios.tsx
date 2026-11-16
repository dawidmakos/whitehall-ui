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
  hint?: React.ReactNode;
  small?: boolean;
}

const RadiosItem = ({
  className,
  children,
  hint,
  small,
  'aria-describedby': ariaDescribedBy,
  ...props
}: RadiosItemProps) => {
  const labelId = useId();
  const hintId = useId();

  return (
    <>
      <label
        className={cn(
          'flex flex-wrap items-start',
          'relative',
          small ? 'group/item mb-0' : 'mb-govuk-2 last:mb-0',
          'cursor-pointer',
          'has-data-disabled:opacity-50 has-data-disabled:cursor-not-allowed',
          className,
        )}
      >
        <Radio.Root
          aria-labelledby={labelId}
          aria-describedby={
            `${hint ? hintId : ''} ${ariaDescribedBy ?? ''}`.trim() || undefined
          }
          className={cn(
            'group/radio',
            'relative flex-none',
            'w-govuk-radio-touch-target h-govuk-radio-touch-target',
            'outline-none',
            small && '-ml-govuk-2',
          )}
          {...props}
        >
          <span
            aria-hidden='true'
            className={cn(
              'absolute box-border',
              small
                ? 'top-govuk-checkbox-small-box-offset left-govuk-checkbox-small-box-offset w-govuk-checkbox-small-size h-govuk-checkbox-small-size'
                : 'top-[calc(var(--spacing-govuk-radio-gutter)/2)] left-[calc(var(--spacing-govuk-radio-gutter)/2)] w-govuk-radio-size h-govuk-radio-size',
              'rounded-full',
              'border-2 border-current bg-transparent',
              'govuk-checkbox-composed-shadow',
              'group-focus/radio:border-4',
              'group-focus/radio:govuk-radio-focus-shadow',
              'group-focus/radio:outline-govuk-radio-focus-width group-focus/radio:outline-transparent group-focus/radio:outline-offset-1',
              small && 'group-hover/item:govuk-checkbox-small-hover',
            )}
          />
          <Radio.Indicator
            keepMounted
            className={cn(
              'absolute',
              small
                ? [
                    'top-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-small-dot))]',
                    'left-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-small-dot))]',
                    'border-(length:--spacing-govuk-radio-small-dot)',
                  ]
                : [
                    'top-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-dot))]',
                    'left-[calc(var(--spacing-govuk-radio-touch-target)/2-var(--spacing-govuk-radio-dot))]',
                    'border-(length:--spacing-govuk-radio-dot)',
                  ],
              'w-0 h-0',
              'rounded-full',
              'border-current',
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
            small ? 'pl-px max-w-[calc(100%-50px)]' : 'max-w-[calc(100%-74px)]',
          )}
        >
          {children}
        </span>
      </label>
      {hint && (
        <RadiosHint
          id={hintId}
          className={cn(
            small &&
              'pl-[calc(var(--spacing-govuk-radio-touch-target)-var(--spacing-govuk-2))]',
          )}
        >
          {hint}
        </RadiosHint>
      )}
    </>
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

interface RadiosDividerProps extends React.ComponentProps<'div'> {
  small?: boolean;
}

const RadiosDivider = ({
  className,
  children = 'or',
  small,
  ...props
}: RadiosDividerProps) => (
  <div
    className={cn(
      small
        ? 'w-govuk-checkbox-small-size mb-govuk-1'
        : 'w-govuk-radio-size mb-govuk-2',
      'text-govuk-tag font-normal font-govuk text-govuk-black',
      'text-center',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

interface RadiosConditionalProps extends React.ComponentProps<'div'> {
  small?: boolean;
}

const RadiosConditional = ({
  className,
  small,
  ...props
}: RadiosConditionalProps) => (
  <div
    className={cn(
      small
        ? 'ml-govuk-2 pl-govuk-4'
        : 'ml-govuk-checkbox-conditional-ml pl-govuk-checkbox-conditional-pl',
      'mb-govuk-3 sm:mb-govuk-4',
      'border-l-4 border-govuk-grey',
      '*:last:mb-0',
      className,
    )}
    {...props}
  />
);

export {
  Radios,
  RadiosItem,
  RadiosHint,
  RadiosDivider,
  RadiosConditional,
  type RadiosProps,
  type RadiosItemProps,
  type RadiosHintProps,
  type RadiosDividerProps,
  type RadiosConditionalProps,
};
