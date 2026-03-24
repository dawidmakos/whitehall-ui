import { Collapsible } from '@base-ui/react/collapsible';
import { cn } from '@/lib/utils';

interface DetailsProps extends Omit<
  React.ComponentProps<typeof Collapsible.Root>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

interface DetailsSummaryProps extends Omit<
  React.ComponentProps<typeof Collapsible.Trigger>,
  'className'
> {
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
}

interface DetailsTextProps extends Omit<
  React.ComponentProps<typeof Collapsible.Panel>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

const Details = ({ className, ref, ...props }: DetailsProps) => (
  <Collapsible.Root
    ref={ref}
    className={cn(
      'mb-govuk-6 font-govuk text-govuk-body text-govuk-black',
      className,
    )}
    {...props}
  />
);

const DetailsSummary = ({
  className,
  ref,
  children,
  ...props
}: DetailsSummaryProps) => (
  <Collapsible.Trigger
    ref={ref}
    className={cn(
      'group relative w-fit cursor-pointer',
      'pl-govuk-4 border-none bg-transparent p-0',
      'font-govuk text-govuk-body text-govuk-brand',
      'underline govuk-link-underline',
      'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
      'focus:govuk-link-focus focus:no-underline',
      className,
    )}
    {...props}
  >
    <svg
      className='absolute left-0 top-0 bottom-0 my-auto shrink-0 transition-transform group-data-panel-open:rotate-90'
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='currentColor'
      aria-hidden='true'
      focusable='false'
    >
      <path d='M3.5 1L10.5 7L3.5 13z' />
    </svg>
    {children}
  </Collapsible.Trigger>
);

const DetailsText = ({ className, ref, ...props }: DetailsTextProps) => (
  <Collapsible.Panel
    ref={ref}
    className={cn(
      'pt-govuk-3 pb-govuk-3 pl-govuk-4',
      'border-l-govuk-inset',
      className,
    )}
    {...props}
  />
);

export {
  Details,
  DetailsSummary,
  DetailsText,
  type DetailsProps,
  type DetailsSummaryProps,
  type DetailsTextProps,
};
