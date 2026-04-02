import { cn } from '@/lib/utils';

interface DateInputProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: React.Ref<HTMLDivElement>;
}

interface DateInputItemProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: React.Ref<HTMLDivElement>;
}

interface DateInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  ref?: React.Ref<HTMLLabelElement>;
}

interface DateInputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
}

const DateInput = ({ className, children, ref, ...props }: DateInputProps) => (
  <div ref={ref} className={cn('govuk-date-input', className)} {...props}>
    {children}
  </div>
);

const DateInputItem = ({
  className,
  children,
  ref,
  ...props
}: DateInputItemProps) => (
  <div
    ref={ref}
    className={cn('inline-block mr-govuk-4 mb-0 align-bottom', className)}
    {...props}
  >
    {children}
  </div>
);

const DateInputLabel = ({
  className,
  children,
  htmlFor,
  ref,
  ...props
}: DateInputLabelProps) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn(
      'block font-govuk text-govuk-body text-govuk-black',
      className,
    )}
    {...props}
  >
    {children}
  </label>
);

const DateInputInput = ({
  className,
  error = false,
  ref,
  ...props
}: DateInputInputProps) => (
  <input
    ref={ref}
    type='text'
    inputMode='numeric'
    className={cn(
      'govuk-date-input-field box-border',
      'p-govuk-1 h-10',
      'border-2 border-govuk-black',
      'rounded-none appearance-none',
      'text-govuk-body font-normal font-govuk',
      'focus:outline-3 focus:outline-govuk-yellow focus:outline-offset-0',
      'focus:inset-ring-2 focus:inset-ring-govuk-black',
      error && 'border-govuk-error focus:border-govuk-black',
      className,
    )}
    {...props}
  />
);

export { DateInput, DateInputItem, DateInputLabel, DateInputInput };

export type {
  DateInputProps,
  DateInputItemProps,
  DateInputLabelProps,
  DateInputInputProps,
};
