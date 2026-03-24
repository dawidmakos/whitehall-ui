import { cn } from '@/lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface FooterContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  fullWidth?: boolean;
}

interface FooterNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface FooterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  width?: 'full' | 'one-half' | 'one-third' | 'two-thirds';
}

interface FooterHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface FooterListProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<HTMLUListElement>;
  columns?: 1 | 2 | 3;
}

interface FooterListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
}

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface FooterMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface FooterMetaItemProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  grow?: boolean;
}

interface FooterInlineListProps extends React.HTMLAttributes<HTMLUListElement> {
  ref?: React.Ref<HTMLUListElement>;
}

interface FooterInlineListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
}

interface FooterContentLicenceProps extends React.HTMLAttributes<HTMLSpanElement> {
  ref?: React.Ref<HTMLSpanElement>;
}

const footerLinkStyles = [
  'underline govuk-link-underline',
  'text-govuk-dark-grey visited:text-govuk-dark-grey',
  'hover:govuk-link-underline-hover',
  'focus:govuk-link-focus',
];

const Footer = ({ className, children, ref, ...props }: FooterProps) => (
  <footer
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body text-govuk-dark-grey',
      'border-t-govuk-wide border-t-govuk-brand',
      'pt-govuk-7 sm:pt-govuk-8 pb-govuk-5 sm:pb-govuk-6',
      'bg-govuk-light-grey',
      className,
    )}
    {...props}
  >
    {children}
  </footer>
);

const FooterContainer = ({
  className,
  fullWidth,
  ref,
  children,
  ...props
}: FooterContainerProps) => (
  <div
    ref={ref}
    className={cn(
      fullWidth ? 'px-govuk-3' : 'max-w-240 mx-auto px-govuk-3',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const FooterNavigation = ({
  className,
  ref,
  children,
  ...props
}: FooterNavigationProps) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
);

const FooterSection = ({
  className,
  width = 'full',
  ref,
  children,
  ...props
}: FooterSectionProps) => {
  const widthClasses = {
    full: 'w-full',
    'one-half': 'sm:inline-block sm:w-1/2 sm:align-top',
    'one-third': 'sm:inline-block sm:w-1/3 sm:align-top',
    'two-thirds': 'sm:inline-block sm:w-2/3 sm:align-top',
  };

  return (
    <div
      ref={ref}
      className={cn(widthClasses[width], 'mb-govuk-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const FooterHeading = ({
  className,
  ref,
  children,
  ...props
}: FooterHeadingProps) => (
  <h2
    ref={ref}
    className={cn(
      'text-govuk-heading-m font-bold text-govuk-black',
      'mb-govuk-6 pb-govuk-4 sm:pb-govuk-2',
      'border-b border-govuk-mid-grey',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const FooterList = ({
  className,
  columns = 1,
  ref,
  children,
  ...props
}: FooterListProps) => (
  <ul
    ref={ref}
    className={cn(
      'list-none m-0 p-0',
      'gap-x-govuk-6',
      columns === 2 && 'sm:columns-2',
      columns === 3 && 'sm:columns-3',
      className,
    )}
    {...props}
  >
    {children}
  </ul>
);

const FooterListItem = ({
  className,
  ref,
  children,
  ...props
}: FooterListItemProps) => (
  <li
    ref={ref}
    className={cn('mb-govuk-3 sm:mb-govuk-4', 'last:mb-0', className)}
    {...props}
  >
    {children}
  </li>
);

const FooterLink = ({
  className,
  ref,
  children,
  ...props
}: FooterLinkProps) => (
  <a ref={ref} className={cn(footerLinkStyles, className)} {...props}>
    {children}
  </a>
);

const FooterSectionBreak = () => (
  <hr className='m-0 mb-govuk-6 sm:mb-govuk-8 border-0 border-b border-govuk-mid-grey' />
);

const FooterMeta = ({
  className,
  ref,
  children,
  ...props
}: FooterMetaProps) => (
  <div
    ref={ref}
    className={cn('flex flex-wrap items-end justify-center', className)}
    {...props}
  >
    {children}
  </div>
);

const FooterMetaItem = ({
  className,
  grow,
  ref,
  children,
  ...props
}: FooterMetaItemProps) => (
  <div
    ref={ref}
    className={cn('mb-govuk-5', grow && 'flex-1 max-sm:basis-80', className)}
    {...props}
  >
    {children}
  </div>
);

const FooterInlineList = ({
  className,
  ref,
  children,
  ...props
}: FooterInlineListProps) => (
  <ul
    ref={ref}
    className={cn('list-none m-0 mb-govuk-3 p-0', 'last:mb-0', className)}
    {...props}
  >
    {children}
  </ul>
);

const FooterInlineListItem = ({
  className,
  ref,
  children,
  ...props
}: FooterInlineListItemProps) => (
  <li
    ref={ref}
    className={cn('inline-block mr-govuk-3 mb-govuk-1', className)}
    {...props}
  >
    {children}
  </li>
);

const FooterContentLicence = ({
  className,
  ref,
  children,
  ...props
}: FooterContentLicenceProps) => (
  <span
    ref={ref}
    className={cn('inline-block text-balance', className)}
    {...props}
  >
    {children}
  </span>
);

export {
  Footer,
  FooterContainer,
  FooterNavigation,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterSectionBreak,
  FooterMeta,
  FooterMetaItem,
  FooterInlineList,
  FooterInlineListItem,
  FooterContentLicence,
  type FooterProps,
  type FooterContainerProps,
  type FooterNavigationProps,
  type FooterSectionProps,
  type FooterHeadingProps,
  type FooterListProps,
  type FooterListItemProps,
  type FooterLinkProps,
  type FooterMetaProps,
  type FooterMetaItemProps,
  type FooterInlineListProps,
  type FooterInlineListItemProps,
  type FooterContentLicenceProps,
};
