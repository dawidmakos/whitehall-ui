import { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

const PaginationBlockContext = createContext(false);

interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
  ref?: React.Ref<HTMLElement>;
  block?: boolean;
}

interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: React.Ref<HTMLDivElement>;
}

interface PaginationNextProps extends React.ComponentPropsWithoutRef<'div'> {
  ref?: React.Ref<HTMLDivElement>;
}

interface PaginationListProps extends React.ComponentPropsWithoutRef<'ul'> {
  ref?: React.Ref<HTMLUListElement>;
}

interface PaginationItemProps extends React.ComponentPropsWithoutRef<'li'> {
  ref?: React.Ref<HTMLLIElement>;
  current?: boolean;
}

interface PaginationEllipsisProps extends React.ComponentPropsWithoutRef<'li'> {
  ref?: React.Ref<HTMLLIElement>;
}

interface PaginationLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface PaginationLinkTitleProps extends React.ComponentPropsWithoutRef<'span'> {
  ref?: React.Ref<HTMLSpanElement>;
  decorated?: boolean;
}

interface PaginationLinkLabelProps extends React.ComponentPropsWithoutRef<'span'> {
  ref?: React.Ref<HTMLSpanElement>;
}

const PrevArrow = () => {
  const isBlock = useContext(PaginationBlockContext);
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
  const isBlock = useContext(PaginationBlockContext);
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

const Pagination = ({
  className,
  block,
  children,
  ref,
  ...props
}: PaginationProps) => {
  const blockValue = block ?? false;
  return (
    <PaginationBlockContext.Provider value={blockValue}>
      <nav
        ref={ref}
        className={cn(
          'font-govuk mb-govuk-6',
          block
            ? 'govuk-pagination-block'
            : 'flex flex-col flex-wrap items-center md:flex-row md:items-start',
          className,
        )}
        aria-label={props['aria-label'] ?? 'Pagination'}
        {...props}
      >
        {children}
      </nav>
    </PaginationBlockContext.Provider>
  );
};

const PaginationPrevious = ({
  className,
  children,
  ref,
  ...props
}: PaginationPreviousProps) => {
  const isBlock = useContext(PaginationBlockContext);
  return (
    <div
      ref={ref}
      className={cn(
        'govuk-pagination-nav-item box-border relative',
        'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
        'py-govuk-2 pr-govuk-3 pl-0 font-bold text-govuk-body',
        !isBlock && 'govuk-pagination-nav-link float-left',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const PaginationNext = ({
  className,
  children,
  ref,
  ...props
}: PaginationNextProps) => {
  const isBlock = useContext(PaginationBlockContext);
  return (
    <div
      ref={ref}
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
    >
      {children}
    </div>
  );
};

const PaginationList = ({
  className,
  children,
  ref,
  ...props
}: PaginationListProps) => (
  <ul ref={ref} className={cn('m-0 p-0 list-none', className)} {...props}>
    {children}
  </ul>
);

const PaginationItem = ({
  className,
  current,
  children,
  ref,
  ...props
}: PaginationItemProps) => (
  <li
    ref={ref}
    className={cn(
      'box-border relative',
      'min-w-govuk-pagination-touch min-h-govuk-pagination-touch',
      'py-govuk-2 px-govuk-3 float-left text-center text-govuk-body',
      'hidden first:block last:block md:block',
      current
        ? 'block font-bold govuk-pagination-item-current'
        : 'hover:bg-govuk-light-grey',
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

const PaginationEllipsis = ({
  className,
  ref,
  ...props
}: PaginationEllipsisProps) => (
  <li
    ref={ref}
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
    {'\u22EF'}
  </li>
);

const PaginationLink = ({
  className,
  children,
  ref,
  ...props
}: PaginationLinkProps) => {
  const isBlock = useContext(PaginationBlockContext);
  return (
    <a
      ref={ref}
      className={cn(
        'govuk-pagination-link min-w-govuk-3',
        'text-govuk-brand underline govuk-link-underline',
        'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
        'visited:text-govuk-visited',
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
  children,
  ref,
  ...props
}: PaginationLinkTitleProps) => {
  const isBlock = useContext(PaginationBlockContext);
  return (
    <span
      ref={ref}
      className={cn(
        'decoration-inherit',
        decorated && 'underline govuk-link-underline',
        isBlock && 'govuk-pagination-block-title',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

const PaginationLinkLabel = ({
  className,
  children,
  ref,
  ...props
}: PaginationLinkLabelProps) => (
  <span
    ref={ref}
    className={cn(
      'font-normal underline govuk-link-underline inline-block',
      className,
    )}
    {...props}
  >
    {children}
  </span>
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
};

export type {
  PaginationProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationListProps,
  PaginationItemProps,
  PaginationEllipsisProps,
  PaginationLinkProps,
  PaginationLinkTitleProps,
  PaginationLinkLabelProps,
};
