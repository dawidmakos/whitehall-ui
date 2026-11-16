import { cn } from '@/lib/utils';

type FeedbackProps = React.ComponentProps<'div'>;

interface FeedbackTitleProps extends React.ComponentProps<'h2'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type FeedbackBodyProps = React.ComponentProps<'div'>;

const Feedback = ({ className, children, ...props }: FeedbackProps) => (
  <div
    className={cn(
      'box-border max-w-240 mx-0 sm:mx-govuk-6 min-[1020px]:mx-auto',
      'pt-govuk-4 pb-govuk-5 px-govuk-3 sm:px-govuk-4',
      'border-t border-govuk-brand bg-govuk-surface',
      'font-govuk text-govuk-body text-govuk-black',
      'print:border-current print:bg-transparent',
      className,
    )}
    {...props}
  >
    <div className='sm:w-2/3'>{children}</div>
  </div>
);

const FeedbackTitle = ({
  as: Tag = 'h2',
  className,
  children,
  ...props
}: FeedbackTitleProps) => (
  <Tag
    className={cn(
      'text-govuk-heading-m font-bold text-govuk-black',
      'mt-0 mb-govuk-1',
      className,
    )}
    {...props}
  >
    {children}
  </Tag>
);

const FeedbackBody = ({ className, ...props }: FeedbackBodyProps) => (
  <div className={cn('*:last:mb-0', className)} {...props} />
);

export {
  Feedback,
  FeedbackTitle,
  FeedbackBody,
  type FeedbackProps,
  type FeedbackTitleProps,
  type FeedbackBodyProps,
};
