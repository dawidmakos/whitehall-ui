import { cn } from '@/lib/utils';

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  collapseOnMobile?: boolean;
  inverse?: boolean;
}

interface BreadcrumbsListProps extends React.HTMLAttributes<HTMLOListElement> {
  ref?: React.Ref<HTMLOListElement>;
}

interface BreadcrumbsListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
}

interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const Breadcrumbs = ({
  className,
  collapseOnMobile,
  inverse,
  ref,
  children,
  ...props
}: BreadcrumbsProps) => (
  <nav
    ref={ref}
    aria-label='Breadcrumb'
    className={cn(
      'font-govuk text-govuk-header',
      'mt-govuk-3 mb-govuk-2',
      inverse ? 'text-white' : 'text-govuk-black',
      collapseOnMobile &&
        '[&_ol]:max-sm:flex [&_li]:max-sm:hidden [&_li:first-child]:max-sm:inline-block [&_li:last-child]:max-sm:inline-block',
      className,
    )}
    {...props}
  >
    {children}
  </nav>
);

const BreadcrumbsList = ({
  className,
  ref,
  children,
  ...props
}: BreadcrumbsListProps) => (
  <ol ref={ref} className={cn('m-0 p-0 list-none', className)} {...props}>
    {children}
  </ol>
);

const BreadcrumbsListItem = ({
  className,
  ref,
  children,
  ...props
}: BreadcrumbsListItemProps) => (
  <li
    ref={ref}
    className={cn(
      'inline-block mb-govuk-1',
      'first:ml-0 first:pl-0 first:[&>svg]:hidden',
      className,
    )}
    {...props}
  >
    <svg
      className='inline-block align-middle mx-govuk-2 -mt-px'
      xmlns='http://www.w3.org/2000/svg'
      width='7'
      height='11'
      viewBox='0 0 7 11'
      fill='none'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M1 1L5.5 5.5L1 10'
        stroke='currentColor'
        strokeWidth='1'
        strokeOpacity='0.65'
      />
    </svg>
    {children}
  </li>
);

const BreadcrumbsLink = ({
  className,
  ref,
  children,
  ...props
}: BreadcrumbsLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'text-govuk-black underline govuk-link-underline',
      'hover:text-govuk-black hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsListItem,
  BreadcrumbsLink,
  type BreadcrumbsProps,
  type BreadcrumbsListProps,
  type BreadcrumbsListItemProps,
  type BreadcrumbsLinkProps,
};
