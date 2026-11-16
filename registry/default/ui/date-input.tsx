import { cn } from '@/lib/utils';

type DateInputProps = React.ComponentProps<'div'>;

type DateInputItemProps = React.ComponentProps<'div'>;

type DateInputLabelProps = React.ComponentProps<'label'>;

interface DateInputInputProps extends React.ComponentProps<'input'> {
  error?: boolean;
}

const DateInput = ({ className, ...props }: DateInputProps) => (
  <div className={cn('govuk-date-input', className)} {...props} />
);

const DateInputItem = ({ className, ...props }: DateInputItemProps) => (
  <div
    className={cn('inline-block mr-govuk-4 mb-0 align-bottom', className)}
    {...props}
  />
);

const DateInputLabel = ({
  className,
  htmlFor,
  ...props
}: DateInputLabelProps) => (
  <label
    htmlFor={htmlFor}
    className={cn(
      'block mb-govuk-1 font-govuk text-govuk-body text-govuk-black',
      className,
    )}
    {...props}
  />
);

const DateInputInput = ({
  className,
  error,
  ...props
}: DateInputInputProps) => (
  <input
    type='text'
    inputMode='numeric'
    aria-invalid={error || undefined}
    className={cn(
      'mb-0 box-border',
      'p-govuk-1 h-10',
      'border-2 border-govuk-black',
      'rounded-none appearance-none',
      'text-govuk-body font-normal font-govuk',
      'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
      'focus:inset-ring-2 focus:inset-ring-govuk-black',
      'disabled:opacity-50 disabled:bg-transparent disabled:cursor-not-allowed',
      error && 'border-govuk-error focus:border-govuk-black',
      className,
    )}
    {...props}
  />
);

export {
  DateInput,
  DateInputItem,
  DateInputLabel,
  DateInputInput,
  type DateInputProps,
  type DateInputItemProps,
  type DateInputLabelProps,
  type DateInputInputProps,
};
