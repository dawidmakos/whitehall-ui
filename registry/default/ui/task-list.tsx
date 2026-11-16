'use client';

import { createContext, use, useId } from 'react';
import { cn } from '@/lib/utils';

type TaskListProps = React.ComponentProps<'ul'>;

interface TaskListItemProps extends React.ComponentProps<'li'> {
  hasLink?: boolean;
}

type TaskListNameAndHintProps = React.ComponentProps<'div'>;

type TaskListLinkProps = React.ComponentProps<'a'>;

type TaskListHintProps = React.ComponentProps<'div'>;

interface TaskListStatusProps extends React.ComponentProps<'div'> {
  cannotStartYet?: boolean;
}

const TaskListItemContext = createContext({ hintId: '', statusId: '' });

const TaskList = ({ className, ...props }: TaskListProps) => (
  <ul
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'mt-0 mb-govuk-r6 p-0 list-none',
      className,
    )}
    {...props}
  />
);

const TaskListItem = ({ className, hasLink, ...props }: TaskListItemProps) => {
  const id = useId();

  return (
    <TaskListItemContext
      value={{ hintId: `${id}-hint`, statusId: `${id}-status` }}
    >
      <li
        className={cn(
          'table relative w-full mb-0',
          'py-govuk-2',
          'border-b border-govuk-mid-grey',
          'first:border-t first:border-t-govuk-mid-grey',
          hasLink && 'hover:bg-govuk-light-grey',
          className,
        )}
        {...props}
      />
    </TaskListItemContext>
  );
};

const TaskListNameAndHint = ({
  className,
  ...props
}: TaskListNameAndHintProps) => (
  <div
    className={cn('table-cell align-top text-govuk-black', className)}
    {...props}
  />
);

const TaskListLink = ({ className, children, ...props }: TaskListLinkProps) => {
  const { hintId, statusId } = use(TaskListItemContext);

  return (
    <a
      aria-describedby={`${hintId} ${statusId}`.trim() || undefined}
      className={cn(
        'text-govuk-link underline govuk-link-underline',
        'visited:text-govuk-visited active:text-govuk-black',
        'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
        'focus:govuk-link-focus',
        'after:block after:absolute after:inset-0',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

const TaskListHint = ({ className, ...props }: TaskListHintProps) => {
  const { hintId } = use(TaskListItemContext);

  return (
    <div
      className={cn('mt-govuk-1 text-govuk-dark-grey', className)}
      {...props}
      id={hintId || props.id}
    />
  );
};

const TaskListStatus = ({
  className,
  cannotStartYet,
  ...props
}: TaskListStatusProps) => {
  const { statusId } = use(TaskListItemContext);

  return (
    <div
      className={cn(
        'table-cell pl-govuk-2 text-right align-top',
        cannotStartYet ? 'text-govuk-dark-grey' : 'text-govuk-black',
        className,
      )}
      {...props}
      id={statusId || props.id}
    />
  );
};

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
