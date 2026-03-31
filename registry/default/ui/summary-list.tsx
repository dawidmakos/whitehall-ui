import { cn } from '@/lib/utils';

interface SummaryListProps extends React.HTMLAttributes<HTMLDListElement> {
  ref?: React.Ref<HTMLDListElement>;
  noBorder?: boolean;
}

interface SummaryListRowProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  noBorder?: boolean;
  noActions?: boolean;
}

interface SummaryListKeyProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface SummaryListValueProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface SummaryListActionsProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface SummaryListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface SummaryListCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface SummaryListCardActionsProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<HTMLUListElement>;
}

interface SummaryListCardActionProps extends React.HTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
}

const SummaryList = ({
  className,
  noBorder,
  ref,
  children,
  ...props
}: SummaryListProps) => (
  <dl
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'm-0 mb-govuk-6',
      'sm:table sm:w-full sm:table-fixed sm:border-collapse',
      noBorder && '[&_div]:border-0 sm:[&_dt]:pb-2.75 sm:[&_dd]:pb-2.75',
      className,
    )}
    {...props}
  >
    {children}
  </dl>
);

const SummaryListRow = ({
  className,
  noBorder,
  noActions,
  ref,
  children,
  ...props
}: SummaryListRowProps) => (
  <div
    ref={ref}
    className={cn(
      'border-b border-govuk-mid-grey',
      'max-sm:mb-govuk-3',
      'sm:table-row',
      noBorder && 'border-0 sm:[&>dt]:pb-2.75 sm:[&>dd]:pb-2.75',
      noActions && 'sm:after:content-[""] sm:after:table-cell sm:after:w-[20%]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const SummaryListKey = ({
  className,
  ref,
  children,
  ...props
}: SummaryListKeyProps) => (
  <dt
    ref={ref}
    className={cn(
      'm-0 mb-govuk-1 font-bold',
      'wrap-break-word',
      'sm:table-cell sm:pt-govuk-2 sm:pr-govuk-4 sm:pb-govuk-2 sm:align-top sm:w-[30%]',
      className,
    )}
    {...props}
  >
    {children}
  </dt>
);

const SummaryListValue = ({
  className,
  ref,
  children,
  ...props
}: SummaryListValueProps) => (
  <dd
    ref={ref}
    className={cn(
      'm-0 max-sm:mb-govuk-3',
      'wrap-break-word',
      'sm:table-cell sm:pt-govuk-2 sm:pr-govuk-4 sm:pb-govuk-2 sm:align-top',
      className,
    )}
    {...props}
  >
    {children}
  </dd>
);

const SummaryListActions = ({
  className,
  ref,
  children,
  ...props
}: SummaryListActionsProps) => (
  <dd
    ref={ref}
    className={cn(
      'm-0 mb-govuk-3',
      'sm:table-cell sm:pt-govuk-2 sm:pb-govuk-2 sm:w-[20%] sm:text-right sm:align-top',
      className,
    )}
    {...props}
  >
    {children}
  </dd>
);

const SummaryListCard = ({
  className,
  ref,
  children,
  ...props
}: SummaryListCardProps) => (
  <div
    ref={ref}
    className={cn('mb-govuk-6 border border-govuk-mid-grey', className)}
    {...props}
  >
    {children}
  </div>
);

const SummaryListCardTitle = ({
  className,
  ref,
  children,
  ...props
}: SummaryListCardTitleProps) => (
  <h2
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body font-bold text-govuk-black',
      'm-0 mr-govuk-4 mb-govuk-1',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const SummaryListCardHeader = ({
  className,
  ref,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn(
      'p-govuk-3 sm:px-govuk-4',
      'border-b border-transparent bg-govuk-light-grey',
      'sm:flex sm:flex-nowrap sm:justify-between',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const SummaryListCardActions = ({
  className,
  ref,
  children,
  ...props
}: SummaryListCardActionsProps) => (
  <ul
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body font-bold',
      'm-0 my-govuk-1 p-0 list-none',
      'flex flex-wrap gap-y-govuk-2',
      'sm:justify-end sm:text-right',
      className,
    )}
    {...props}
  >
    {children}
  </ul>
);

const SummaryListCardAction = ({
  className,
  ref,
  children,
  ...props
}: SummaryListCardActionProps) => (
  <li
    ref={ref}
    className={cn(
      'inline',
      'max-sm:mr-govuk-2 max-sm:pr-govuk-2 max-sm:border-r max-sm:border-govuk-mid-grey max-sm:last:mr-0 max-sm:last:pr-0 max-sm:last:border-0',
      'sm:ml-govuk-2 sm:pl-govuk-2 sm:first:ml-0 sm:first:pl-0 sm:first:border-0 sm:not-first:border-l sm:not-first:border-govuk-mid-grey',
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

const SummaryListCardContent = ({
  className,
  ref,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>;
}) => (
  <div
    ref={ref}
    className={cn(
      'pt-govuk-3 px-govuk-3 sm:px-govuk-4 sm:pb-govuk-3',
      '[&_dl]:mb-0 [&_dl_div:last-of-type]:mb-0 [&_dl_div:last-of-type]:border-b-0',
      className,
    )}
    {...props}
  >
    {children}
  </div>
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
  type SummaryListCardTitleProps,
  type SummaryListCardActionsProps,
  type SummaryListCardActionProps,
};
