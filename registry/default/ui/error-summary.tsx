import { cn } from '@/lib/utils';

interface ErrorSummaryItem {
  text: string;
  href?: string;
}

interface ErrorSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  titleText?: string;
  descriptionText?: string;
  errorList: ErrorSummaryItem[];
}

const ErrorSummary = ({
  className,
  titleText = 'There is a problem',
  descriptionText,
  errorList,
  ref,
  ...props
}: ErrorSummaryProps) => (
  <div
    ref={ref}
    tabIndex={-1}
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'p-govuk-3 sm:p-govuk-4',
      'mb-govuk-6 sm:mb-govuk-8',
      'border-govuk-error-summary',
      'focus:outline-3 focus:outline-govuk-yellow',
      className,
    )}
    {...props}
  >
    <div role='alert'>
      <h2
        className={cn(
          'text-govuk-heading-m font-bold',
          'mt-0 mb-govuk-3 sm:mb-govuk-4',
        )}
      >
        {titleText}
      </h2>
      <div
        className={cn(
          '[&>p]:mb-0',
          '[&>*+*]:mt-govuk-3 sm:[&>*+*]:mt-govuk-4',
          '*:last:mb-govuk-1',
        )}
      >
        {descriptionText && <p>{descriptionText}</p>}
        <ul className='list-none p-0 m-0 [&>li]:mb-govuk-1 [&>li:last-child]:mb-0'>
          {errorList.map((item) => (
            <li key={item.href ?? item.text}>
              {item.href ? (
                <a
                  href={item.href}
                  className={cn(
                    'font-bold',
                    'text-govuk-error visited:text-govuk-error',
                    'hover:text-govuk-error-hover',
                    'underline govuk-link-underline',
                    'hover:govuk-link-underline-hover',
                    'focus:govuk-link-focus',
                  )}
                >
                  {item.text}
                </a>
              ) : (
                <span className='font-bold'>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export { ErrorSummary, type ErrorSummaryProps, type ErrorSummaryItem };
