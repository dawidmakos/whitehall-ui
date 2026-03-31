import { cn } from '@/lib/utils';

interface TaskListProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<HTMLUListElement>;
}

interface TaskListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
  hasLink?: boolean;
}

interface TaskListNameAndHintProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface TaskListLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface TaskListHintProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface TaskListStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  cannotStartYet?: boolean;
}

const TaskList = ({ className, ref, children, ...props }: TaskListProps) => (
  <ul
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'mt-0 mb-govuk-6 p-0 list-none',
      className,
    )}
    {...props}
  >
    {children}
  </ul>
);

const TaskListItem = ({
  className,
  hasLink,
  ref,
  children,
  ...props
}: TaskListItemProps) => (
  <li
    ref={ref}
    className={cn(
      'table relative w-full mb-0',
      'py-govuk-2',
      'border-b border-govuk-mid-grey',
      'first:border-t first:border-t-govuk-mid-grey',
      hasLink && 'hover:bg-govuk-light-grey',
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

const TaskListNameAndHint = ({
  className,
  ref,
  children,
  ...props
}: TaskListNameAndHintProps) => (
  <div
    ref={ref}
    className={cn('table-cell align-top text-govuk-black', className)}
    {...props}
  >
    {children}
  </div>
);

const TaskListLink = ({
  className,
  ref,
  children,
  ...props
}: TaskListLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'text-govuk-brand underline govuk-link-underline',
      'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
      'after:content-[""] after:block after:absolute after:inset-0',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const TaskListHint = ({
  className,
  ref,
  children,
  ...props
}: TaskListHintProps) => (
  <div
    ref={ref}
    className={cn('mt-govuk-1 text-govuk-dark-grey', className)}
    {...props}
  >
    {children}
  </div>
);

const TaskListStatus = ({
  className,
  cannotStartYet,
  ref,
  children,
  ...props
}: TaskListStatusProps) => (
  <div
    ref={ref}
    className={cn(
      'table-cell pl-govuk-2 text-right align-top',
      cannotStartYet ? 'text-govuk-dark-grey' : 'text-govuk-black',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export {
  TaskList,
  TaskListItem,
  TaskListNameAndHint,
  TaskListLink,
  TaskListHint,
  TaskListStatus,
  type TaskListProps,
  type TaskListItemProps,
  type TaskListNameAndHintProps,
  type TaskListLinkProps,
  type TaskListHintProps,
  type TaskListStatusProps,
};
