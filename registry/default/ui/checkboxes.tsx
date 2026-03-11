import { useId } from 'react';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
import { cn } from '@/lib/utils';

interface CheckboxesProps extends Omit<
  React.ComponentProps<typeof CheckboxGroup>,
  'className' | 'children'
> {
  className?: string;
  children: React.ReactNode;
}

const Checkboxes = ({ className, children, ...props }: CheckboxesProps) => (
  <CheckboxGroup className={cn(className)} {...props}>
    {children}
  </CheckboxGroup>
);

interface CheckboxesItemProps extends Omit<
  React.ComponentProps<typeof Checkbox.Root>,
  'className' | 'children'
> {
  className?: string;
  children: React.ReactNode;
  small?: boolean;
}

const CheckboxesItem = ({
  className,
  children,
  value,
  small = false,
  ...props
}: CheckboxesItemProps) => {
  const labelId = useId();

  return (
    <label
      className={cn(
        'flex flex-wrap items-start',
        'relative',
        small ? 'group/item mb-0' : 'mb-2.5 last:mb-0',
        'cursor-pointer touch-action-manipulation',
        className,
      )}
    >
      <Checkbox.Root
        value={value}
        aria-labelledby={labelId}
        className={cn(
          'group/checkbox',
          'relative flex-none',
          'w-govuk-checkbox-touch-target h-govuk-checkbox-touch-target',
          'cursor-pointer outline-none',
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
          'cursor-pointer',
        )}
      >
        {children}
      </span>
    </label>
  );
};

interface CheckboxesHintProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const CheckboxesHint = ({ className, ...props }: CheckboxesHintProps) => (
  <span
    className={cn(
      'block w-full',
      '-mt-govuk-1',
      'pr-govuk-checkbox-label-padding-x',
      'pl-[calc(var(--spacing-govuk-checkbox-label-padding-x)+var(--spacing-govuk-checkbox-touch-target))]',
      'text-govuk-tag font-normal font-govuk text-govuk-dark-grey',
      className,
    )}
    {...props}
  />
);

interface CheckboxesDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  small?: boolean;
}

const CheckboxesDivider = ({
  className,
  children = 'or',
  small = false,
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

interface CheckboxesConditionalProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CheckboxesConditional = ({
  className,
  ...props
}: CheckboxesConditionalProps) => (
  <div
    className={cn(
      'ml-govuk-checkbox-conditional-ml pl-govuk-checkbox-conditional-pl',
      'mb-5',
      'border-l-2 border-govuk-grey',
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
