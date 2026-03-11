import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  fullWidth?: boolean;
}

interface HeaderContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  fullWidth?: boolean;
}

interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface HeaderLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface HeaderServiceNameProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface HeaderNavItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
  active?: boolean;
}

interface HeaderNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const headerLinkStyles = [
  'no-underline text-white',
  'visited:text-white active:text-white',
  'hover:underline hover:govuk-link-underline hover:govuk-link-underline-hover',
  'focus:govuk-link-focus',
  'focus:not-focus:bg-govuk-brand',
];

const Header = ({
  className,
  children,
  fullWidth,
  ref,
  ...props
}: HeaderProps) => (
  <header
    ref={ref}
    className={cn(
      'font-govuk text-govuk-header',
      'border-b border-b-transparent',
      'text-white bg-govuk-brand',
      className,
    )}
    {...props}
  >
    {children ?? (
      <HeaderContainer fullWidth={fullWidth}>
        <HeaderLogo />
      </HeaderContainer>
    )}
  </header>
);

const HeaderContainer = ({
  className,
  fullWidth,
  ref,
  children,
  ...props
}: HeaderContainerProps) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center flex-wrap',
      fullWidth ? 'px-govuk-3' : 'max-w-240 mx-auto px-govuk-3',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const HeaderLogo = ({
  className,
  ref,
  children,
  ...props
}: HeaderLogoProps) => (
  <div
    ref={ref}
    className={cn('box-border py-govuk-2 mr-govuk-2', className)}
    {...props}
  >
    {children}
  </div>
);

const HeaderLink = ({
  className,
  ref,
  children,
  ...props
}: HeaderLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'inline-flex items-center text-govuk-header-link',
      headerLinkStyles,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const HeaderServiceName = ({
  className,
  ref,
  children,
  ...props
}: HeaderServiceNameProps) => (
  <a
    ref={ref}
    className={cn(
      'inline-flex items-center text-govuk-body font-bold',
      'py-govuk-2 mr-govuk-2',
      headerLinkStyles,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const HeaderNav = ({ className, ref, children, ...props }: HeaderNavProps) => (
  <nav ref={ref} className={cn('ml-auto', className)} {...props}>
    <ul className='flex items-center gap-govuk-4 list-none m-0 p-0'>
      {children}
    </ul>
  </nav>
);

const HeaderNavItem = ({
  className,
  active,
  ref,
  children,
  ...props
}: HeaderNavItemProps) => (
  <li
    ref={ref}
    className={cn(
      'py-govuk-2',
      active && 'border-b-govuk-standard border-b-white -mb-px',
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

const HeaderNavLink = ({
  className,
  ref,
  children,
  ...props
}: HeaderNavLinkProps) => (
  <a
    ref={ref}
    className={cn('text-govuk-body font-bold', headerLinkStyles, className)}
    {...props}
  >
    {children}
  </a>
);

export {
  Header,
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  HeaderServiceName,
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
  type HeaderProps,
  type HeaderContainerProps,
  type HeaderLogoProps,
  type HeaderLinkProps,
  type HeaderServiceNameProps,
  type HeaderNavProps,
  type HeaderNavItemProps,
  type HeaderNavLinkProps,
};
