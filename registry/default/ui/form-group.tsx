import { cn } from '@/lib/utils';

interface FormGroupProps extends React.ComponentProps<'div'> {
  error?: boolean;
}

const FormGroup = ({ className, error, ...props }: FormGroupProps) => (
  <div
    data-form-group={error ? 'error' : ''}
    className={cn(
      'mb-govuk-r6',
      'in-data-form-group:last-of-type:mb-0',
      error && 'pl-govuk-3 border-l-govuk-standard border-l-govuk-error',
      'in-data-[form-group=error]:p-0 in-data-[form-group=error]:border-0',
      className,
    )}
    {...props}
  />
);

export { FormGroup, type FormGroupProps };
