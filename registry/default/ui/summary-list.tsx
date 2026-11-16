import { cn } from '@/lib/utils';

interface SummaryListProps extends React.ComponentProps<'dl'> {
  noBorder?: boolean;
}

interface SummaryListRowProps extends React.ComponentProps<'div'> {
  noBorder?: boolean;
  noActions?: boolean;
}

type SummaryListKeyProps = React.ComponentProps<'dt'>;

type SummaryListValueProps = React.ComponentProps<'dd'>;

type SummaryListActionsProps = React.ComponentProps<'dd'>;

type SummaryListCardProps = React.ComponentProps<'div'>;

type SummaryListCardHeaderProps = React.ComponentProps<'div'>;

type SummaryListCardContentProps = React.ComponentProps<'div'>;

type SummaryListCardTitleProps = React.ComponentProps<'h2'>;

type SummaryListCardActionsProps = React.ComponentProps<'ul'>;

type SummaryListCardActionProps = React.ComponentProps<'li'>;

const SummaryList = ({ className, noBorder, ...props }: SummaryListProps) => (
  <dl
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'm-0 mb-govuk-r6',
      'sm:table sm:w-full sm:table-fixed sm:border-collapse',
      noBorder && '[&_div]:border-0 sm:[&_dt]:pb-2.75 sm:[&_dd]:pb-2.75',
      className,
    )}
    {...props}
  />
);

const SummaryListRow = ({
  className,
  noBorder,
  noActions,
  ...props
}: SummaryListRowProps) => (
  <div
    className={cn(
      'border-b border-govuk-mid-grey',
      'max-sm:mb-govuk-3',
      'sm:table-row',
      noBorder && 'border-0 sm:[&>dt]:pb-2.75 sm:[&>dd]:pb-2.75',
      noActions && 'sm:after:table-cell sm:after:w-1/5',
      className,
    )}
    {...props}
  />
);

const SummaryListKey = ({ className, ...props }: SummaryListKeyProps) => (
  <dt
    className={cn(
      'm-0 mb-govuk-1 font-bold',
      'wrap-break-word',
      'sm:table-cell sm:pt-govuk-2 sm:pr-govuk-4 sm:pb-govuk-2 sm:align-top sm:w-3/10',
      className,
    )}
    {...props}
  />
);

const SummaryListValue = ({ className, ...props }: SummaryListValueProps) => (
  <dd
    className={cn(
      'm-0 max-sm:mb-govuk-3',
      'wrap-break-word [&>p]:mb-govuk-2 *:last:mb-0',
      'sm:table-cell sm:pt-govuk-2 sm:pr-govuk-4 sm:pb-govuk-2 sm:align-top',
      className,
    )}
    {...props}
  />
);

const SummaryListActions = ({
  className,
  ...props
}: SummaryListActionsProps) => (
  <dd
    className={cn(
      'm-0 mb-govuk-3',
      'sm:table-cell sm:pt-govuk-2 sm:pb-govuk-2 sm:w-1/5 sm:text-right sm:align-top',
      className,
    )}
    {...props}
  />
);

const SummaryListCard = ({ className, ...props }: SummaryListCardProps) => (
  <div
    className={cn('mb-govuk-r6 border border-govuk-mid-grey', className)}
    {...props}
  />
);

const SummaryListCardTitle = ({
  className,
  children,
  ...props
}: SummaryListCardTitleProps) => (
  <h2
    className={cn(
      'font-govuk text-govuk-body font-bold text-govuk-black',
      'mt-govuk-1 mr-govuk-4 mb-govuk-2 sm:mb-govuk-1',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const SummaryListCardHeader = ({
  className,
  ...props
}: SummaryListCardHeaderProps) => (
  <div
    className={cn(
      'p-govuk-3 sm:px-govuk-4',
      'border-b border-transparent bg-govuk-light-grey',
      'sm:flex sm:flex-nowrap sm:justify-between',
      className,
    )}
    {...props}
  />
);

const SummaryListCardActions = ({
  className,
  ...props
}: SummaryListCardActionsProps) => (
  <ul
    className={cn(
      'font-govuk text-govuk-body font-bold',
      'm-0 my-govuk-1 p-0 list-none',
      'flex flex-wrap gap-y-govuk-2',
      'sm:justify-end sm:text-right',
      className,
    )}
    {...props}
  />
);

const SummaryListCardAction = ({
  className,
  ...props
}: SummaryListCardActionProps) => (
  <li
    className={cn(
      'inline',
      'max-sm:mr-govuk-2 max-sm:pr-govuk-2 max-sm:border-r max-sm:border-govuk-mid-grey max-sm:last:mr-0 max-sm:last:pr-0 max-sm:last:border-0',
      'sm:ml-govuk-2 sm:pl-govuk-2 sm:first:ml-0 sm:first:pl-0 sm:first:border-0 sm:not-first:border-l sm:not-first:border-govuk-mid-grey',
      className,
    )}
    {...props}
  />
);

const SummaryListCardContent = ({
  className,
  ...props
}: SummaryListCardContentProps) => (
  <div
    className={cn(
      'pt-govuk-3 px-govuk-3 sm:px-govuk-4 sm:pb-govuk-3',
      '[&_dl]:mb-0 [&_dl_div:last-of-type]:mb-0 [&_dl_div:last-of-type]:border-b-0',
      className,
    )}
    {...props}
  />
);

export {
  SummaryList,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
  SummaryListActions,
  SummaryListCard,
  SummaryListCardHeader,
  SummaryListCardTitle,
  SummaryListCardActions,
  SummaryListCardAction,
  SummaryListCardContent,
  type SummaryListProps,
  type SummaryListRowProps,
  type SummaryListKeyProps,
  type SummaryListValueProps,
  type SummaryListActionsProps,
  type SummaryListCardProps,
  type SummaryListCardHeaderProps,
  type SummaryListCardContentProps,
  type SummaryListCardTitleProps,
  type SummaryListCardActionsProps,
  type SummaryListCardActionProps,
};
