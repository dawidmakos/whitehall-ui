'use client';

import { createContext, use } from 'react';
import { cn } from '@/lib/utils';

const PaginationBlockContext = createContext(false);

interface PaginationProps extends React.ComponentProps<'nav'> {
  block?: boolean;
}

type PaginationPreviousProps = React.ComponentProps<'div'>;

type PaginationNextProps = React.ComponentProps<'div'>;

type PaginationListProps = React.ComponentProps<'ul'>;

interface PaginationItemProps extends React.ComponentProps<'li'> {
  current?: boolean;
}

type PaginationEllipsisProps = React.ComponentProps<'li'>;

type PaginationLinkProps = React.ComponentProps<'a'>;

interface PaginationLinkTitleProps extends React.ComponentProps<'span'> {
  decorated?: boolean;
}

type PaginationLinkLabelProps = React.ComponentProps<'span'>;

const PrevArrow = () => {
  const isBlock = use(PaginationBlockContext);
  return (
    <svg
      className={cn(
        'govuk-pagination-icon fill-current',
        isBlock ? 'govuk-pagination-block-arrow' : 'mr-govuk-3',
      )}
      xmlns='http://www.w3.org/2000/svg'
      height='13'
      width='15'
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 15 13'
    >
      <path d='m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z' />
    </svg>
  );
};

const NextArrow = () => {
  const isBlock = use(PaginationBlockContext);
  return (
    <svg
      className={cn(
        'govuk-pagination-icon fill-current',
        isBlock ? 'govuk-pagination-block-arrow' : 'ml-govuk-3',
      )}
      xmlns='http://www.w3.org/2000/svg'
      height='13'
      width='15'
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 15 13'
    >
      <path d='m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z' />
    </svg>
  );
};

const Pagination = ({ className, block = false, ...props }: PaginationProps) => (
  <PaginationBlockContext value={block}>
    <nav
      aria-label='Pagination'
      className={cn(
        'font-govuk mb-govuk-r6',
        block
          ? 'govuk-pagination-block'
          : 'flex flex-col flex-wrap items-center sm:flex-row sm:items-start',
        className,
      )}
      {...props}
    />
  </PaginationBlockContext>
);

const PaginationPrevious = ({
  className,
  ...props
}: PaginationPreviousProps) => {
  const isBlock = use(PaginationBlockContext);
  return (
    <div
      className={cn(
        'govuk-pagination-nav-item box-border relative',
        'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
        'py-govuk-2 pr-govuk-3 pl-0 font-bold text-govuk-body',
        !isBlock && 'govuk-pagination-nav-link float-left',
        className,
      )}
      {...props}
    />
  );
};

const PaginationNext = ({ className, ...props }: PaginationNextProps) => {
  const isBlock = use(PaginationBlockContext);
  return (
    <div
      className={cn(
        'govuk-pagination-nav-item box-border relative',
        'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
        'py-govuk-2 font-bold text-govuk-body',
        isBlock
          ? 'pl-0 pr-govuk-3'
          : 'govuk-pagination-nav-link pl-govuk-3 pr-0 float-left',
        className,
      )}
      {...props}
    />
  );
};

const PaginationList = ({ className, ...props }: PaginationListProps) => (
  <ul className={cn('m-0 p-0 list-none', className)} {...props} />
);

const PaginationItem = ({
  className,
  current,
  ...props
}: PaginationItemProps) => (
  <li
    className={cn(
      'box-border relative',
      'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
      'py-govuk-2 px-govuk-3 float-left text-center text-govuk-body',
      'hidden first:block last:block sm:block',
      current
        ? 'block font-bold govuk-pagination-item-current'
        : 'hover:bg-govuk-light-grey',
      className,
    )}
    {...props}
  />
);

const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <li
    className={cn(
      'box-border relative',
      'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
      'py-govuk-2 px-govuk-3 float-left text-center text-govuk-body',
      'block font-bold text-govuk-dark-grey',
      'hover:bg-transparent',
      className,
    )}
    {...props}
  >
    {'⋯'}
  </li>
);

const PaginationLink = ({
  className,
  children,
  ...props
}: PaginationLinkProps) => {
  const isBlock = use(PaginationBlockContext);
  return (
    <a
      className={cn(
        'group govuk-pagination-link min-w-govuk-3',
        'text-govuk-link underline govuk-link-underline',
        'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
        'visited:text-govuk-visited active:text-govuk-black',
        'focus:govuk-link-focus',
        isBlock
          ? 'inline-block pl-govuk-6 text-left govuk-pagination-block-link'
          : 'block',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

const PaginationLinkTitle = ({
  className,
  decorated,
  ...props
}: PaginationLinkTitleProps) => {
  const isBlock = use(PaginationBlockContext);
  return (
    <span
      className={cn(
        '[text-decoration-thickness:inherit]',
        decorated &&
          'govuk-link-underline group-hover:underline group-active:underline group-hover:govuk-link-underline-hover group-focus:no-underline',
        isBlock && 'govuk-pagination-block-title',
        className,
      )}
      {...props}
    />
  );
};

const PaginationLinkLabel = ({
  className,
  ...props
}: PaginationLinkLabelProps) => (
  <span
    className={cn(
      'font-normal underline govuk-link-underline inline-block',
      'group-hover:govuk-link-underline-hover group-focus:no-underline',
      className,
    )}
    {...props}
  />
);

export {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
  PaginationItem,
  PaginationEllipsis,
  PaginationLink,
  PaginationLinkTitle,
  PaginationLinkLabel,
  PrevArrow,
  NextArrow,
  type PaginationProps,
  type PaginationPreviousProps,
  type PaginationNextProps,
  type PaginationListProps,
  type PaginationItemProps,
  type PaginationEllipsisProps,
  type PaginationLinkProps,
  type PaginationLinkTitleProps,
  type PaginationLinkLabelProps,
};
