import { cn } from '@/lib/utils';

interface BreadcrumbsProps extends React.ComponentProps<'nav'> {
  collapseOnMobile?: boolean;
  inverse?: boolean;
}

type BreadcrumbsListProps = React.ComponentProps<'ol'>;

type BreadcrumbsListItemProps = React.ComponentProps<'li'>;

type BreadcrumbsLinkProps = React.ComponentProps<'a'>;

const Breadcrumbs = ({
  className,
  collapseOnMobile,
  inverse,
  ...props
}: BreadcrumbsProps) => (
  <nav
    aria-label='Breadcrumb'
    data-inverse={inverse || undefined}
    className={cn(
      'group/breadcrumbs font-govuk text-govuk-body-small',
      'mt-govuk-3 mb-govuk-2',
      inverse ? 'text-white' : 'text-govuk-black',
      collapseOnMobile &&
        '[&_ol]:max-sm:flex [&_li]:max-sm:hidden [&_li:first-child]:max-sm:inline-block [&_li:last-child]:max-sm:inline-block',
      className,
    )}
    {...props}
  />
);

const BreadcrumbsList = ({ className, ...props }: BreadcrumbsListProps) => (
  <ol className={cn('m-0 p-0 list-none', className)} {...props} />
);

const BreadcrumbsListItem = ({
  className,
  children,
  ...props
}: BreadcrumbsListItemProps) => (
  <li
    className={cn(
      'inline-block mb-govuk-1',
      'first:ml-0 first:pl-0 first:[&>svg]:hidden',
      className,
    )}
    {...props}
  >
    <svg
      className='inline-block align-middle mx-govuk-2 -mt-px text-govuk-dark-grey group-data-inverse/breadcrumbs:text-current'
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
      />
    </svg>
    {children}
  </li>
);

const BreadcrumbsLink = ({
  className,
  children,
  ...props
}: BreadcrumbsLinkProps) => (
  <a
    className={cn(
      'text-inherit underline govuk-link-underline',
      'hover:govuk-link-underline-hover',
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
