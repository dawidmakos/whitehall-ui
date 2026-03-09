import { cn } from '@/lib/utils';

interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLParagraphElement>;
  visuallyHiddenText?: string;
}

const ErrorMessage = ({
  className,
  children,
  visuallyHiddenText = 'Error',
  ref,
  ...props
}: ErrorMessageProps) => (
  <p
    ref={ref}
    className={cn(
      'block',
      'mt-0 mb-govuk-3',
      'clear-both',
      'font-govuk text-govuk-body font-bold',
      'text-govuk-error',
      className,
    )}
    {...props}
  >
    {visuallyHiddenText && (
      <span className='sr-only'>{visuallyHiddenText}:</span>
    )}{' '}
    {children}
  </p>
);

export { ErrorMessage, type ErrorMessageProps };
