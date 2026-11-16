import { useId } from 'react';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
import { cn } from '@/lib/utils';

type CheckboxesProps = React.ComponentProps<typeof CheckboxGroup>;

const Checkboxes = (props: CheckboxesProps) => <CheckboxGroup {...props} />;

interface CheckboxesItemProps extends Omit<
  React.ComponentProps<typeof Checkbox.Root>,
  'className'
> {
  className?: string;
  hint?: React.ReactNode;
  small?: boolean;
}

const CheckboxesItem = ({
  className,
  children,
  hint,
  'aria-describedby': ariaDescribedBy,
  small,
  ...props
}: CheckboxesItemProps) => {
  const labelId = useId();
  const hintId = useId();

  return (
    <>
      <label
        className={cn(
          'flex flex-wrap items-start',
          'relative',
          small ? 'group/item mb-0' : 'mb-govuk-2 last:mb-0',
          'cursor-pointer touch-manipulation',
          'has-data-[disabled]:opacity-50 has-data-[disabled]:cursor-not-allowed',
          className,
        )}
      >
        <Checkbox.Root
          aria-labelledby={labelId}
          aria-describedby={
            `${hint ? hintId : ''} ${ariaDescribedBy ?? ''}`.trim() || undefined
          }
          className={cn(
            'group/checkbox',
            'relative flex-none',
            'w-govuk-checkbox-touch-target h-govuk-checkbox-touch-target',
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
                : 'top-[calc(var(--spacing-govuk-checkbox-gutter)/2)] left-[calc(var(--spacing-govuk-checkbox-gutter)/2)] w-govuk-checkbox-size h-govuk-checkbox-size',
              'border-2 border-current bg-transparent',
              'govuk-checkbox-composed-shadow',
              'group-focus/checkbox:border-4',
              'group-focus/checkbox:govuk-checkbox-focus-shadow',
              'group-focus/checkbox:outline-3 group-focus/checkbox:outline-transparent group-focus/checkbox:outline-offset-1',
              small && 'group-hover/item:govuk-checkbox-small-hover',
            )}
          />
          <Checkbox.Indicator
            keepMounted
            className={cn(
              'absolute box-border',
              small
                ? 'top-govuk-checkbox-small-check-top left-govuk-checkbox-small-check-left w-govuk-checkbox-small-check-width h-govuk-checkbox-small-check-height govuk-checkmark-small'
                : 'top-govuk-checkbox-check-top left-govuk-checkbox-check-left w-govuk-checkbox-check-width h-govuk-checkbox-check-height govuk-checkmark',
              'opacity-0 data-checked:opacity-100',
            )}
          />
        </Checkbox.Root>

        <span
          id={labelId}
          className={cn(
            'self-center',
            'py-govuk-checkbox-label-padding-y px-govuk-checkbox-label-padding-x',
            'text-govuk-tag font-normal font-govuk',
            small
              ? 'pl-px max-w-[calc(100%-50px)]'
              : 'max-w-[calc(100%-74px)]',
          )}
        >
          {children}
        </span>
      </label>
      {hint && (
        <CheckboxesHint
          id={hintId}
          className={cn(
            small &&
              'pl-[calc(var(--spacing-govuk-checkbox-touch-target)-var(--spacing-govuk-2))]',
          )}
        >
          {hint}
        </CheckboxesHint>
      )}
    </>
  );
};

type CheckboxesHintProps = React.ComponentProps<'span'>;

const CheckboxesHint = ({ className, ...props }: CheckboxesHintProps) => (
  <span
    className={cn(
      'block w-full',
      '-mt-govuk-3 mb-govuk-2 last:mb-0',
      'pr-govuk-checkbox-label-padding-x',
      'pl-[calc(var(--spacing-govuk-checkbox-label-padding-x)+var(--spacing-govuk-checkbox-touch-target))]',
      'text-govuk-tag font-normal font-govuk text-govuk-dark-grey',
      className,
    )}
    {...props}
  />
);

interface CheckboxesDividerProps extends React.ComponentProps<'div'> {
  small?: boolean;
}

const CheckboxesDivider = ({
  className,
  children = 'or',
  small,
  ...props
}: CheckboxesDividerProps) => (
  <div
    className={cn(
      small
        ? 'w-govuk-checkbox-small-size mb-govuk-1'
        : 'w-govuk-checkbox-size mb-govuk-2',
      'text-govuk-tag font-normal font-govuk text-govuk-black',
      'text-center',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

type CheckboxesConditionalProps = React.ComponentProps<'div'>;

const CheckboxesConditional = ({
  className,
  ...props
}: CheckboxesConditionalProps) => (
  <div
    className={cn(
      'ml-govuk-checkbox-conditional-ml pl-govuk-checkbox-conditional-pl',
      'mb-govuk-3 sm:mb-govuk-4',
      'border-l-4 border-govuk-grey',
      '*:last:mb-0',
      className,
    )}
    {...props}
  />
);

export {
  Checkboxes,
  CheckboxesItem,
  CheckboxesHint,
  CheckboxesDivider,
  CheckboxesConditional,
  type CheckboxesProps,
  type CheckboxesItemProps,
  type CheckboxesHintProps,
  type CheckboxesDividerProps,
  type CheckboxesConditionalProps,
};
