import { cn } from '@/lib/utils';

type DetailsProps = React.ComponentProps<'details'>;

type DetailsSummaryProps = React.ComponentProps<'summary'>;

type DetailsTextProps = React.ComponentProps<'div'>;

const Details = ({ className, ...props }: DetailsProps) => (
  <details
    className={cn(
      'group/details mb-govuk-r6 font-govuk text-govuk-body text-govuk-black',
      className,
    )}
    {...props}
  />
);

const DetailsSummary = ({
  className,
  children,
  ...props
}: DetailsSummaryProps) => (
  <summary
    className={cn(
      'relative inline-block cursor-pointer',
      'pl-govuk-5 group-open/details:mb-govuk-1',
      'font-govuk text-govuk-body text-govuk-link',
      'underline govuk-link-underline',
      'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
      'focus:govuk-link-focus focus:no-underline',
      '[&::-webkit-details-marker]:hidden',
      className,
    )}
    {...props}
  >
    <svg
      className='absolute left-0 top-0 bottom-0 my-auto shrink-0 transition-transform group-open/details:rotate-90'
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='currentColor'
      aria-hidden='true'
      focusable='false'
    >
      <path d='M1 0l12.124 7L1 14z' />
    </svg>
    {children}
  </summary>
);

const DetailsText = ({ className, ...props }: DetailsTextProps) => (
  <div
    className={cn(
      'pt-govuk-3 pb-govuk-3 pl-govuk-4',
      'border-l-govuk-standard border-l-govuk-mid-grey',
      '[&_p]:mt-0 [&_p]:mb-govuk-4 *:last:mb-0',
      className,
    )}
    {...props}
  />
);

export {
  Details as Root,
  DetailsSummary as Summary,
  DetailsText as Text,
  type DetailsProps as RootProps,
  type DetailsSummaryProps as SummaryProps,
  type DetailsTextProps as TextProps,
};
