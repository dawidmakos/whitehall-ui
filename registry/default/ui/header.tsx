import { cn } from '@/lib/utils';

interface HeaderProps extends React.ComponentProps<'div'> {
  fullWidth?: boolean;
}

interface HeaderContainerProps extends React.ComponentProps<'div'> {
  fullWidth?: boolean;
}

type HeaderLogoProps = React.ComponentProps<'div'>;

type HeaderLinkProps = React.ComponentProps<'a'>;

type HeaderLogotypeProps = React.ComponentProps<'svg'>;

type HeaderProductNameProps = React.ComponentProps<'span'>;

const Header = ({ className, children, fullWidth, ...props }: HeaderProps) => (
  <div
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
        <HeaderLogo>
          <HeaderLink href='/'>
            <HeaderLogotype />
          </HeaderLink>
        </HeaderLogo>
      </HeaderContainer>
    )}
  </div>
);

const HeaderContainer = ({
  className,
  fullWidth,
  ...props
}: HeaderContainerProps) => (
  <div
    className={cn(
      'flex items-center flex-wrap',
      fullWidth ? 'px-govuk-3' : 'govuk-width-container',
      className,
    )}
    {...props}
  />
);

const HeaderLogo = ({ className, ...props }: HeaderLogoProps) => (
  <div
    className={cn(
      'box-border pt-govuk-header-pt pb-govuk-header-pb',
      className,
    )}
    {...props}
  />
);

const HeaderLink = ({ className, children, ...props }: HeaderLinkProps) => (
  <a
    className={cn(
      'inline-block text-govuk-header-link',
      'govuk-header-link focus:govuk-link-focus',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const HeaderLogotype = ({ className, ...props }: HeaderLogotypeProps) => (
  <svg
    focusable='false'
    role='img'
    aria-label='Whitehall-UI'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 225 32'
    height='30'
    width='211'
    fill='currentcolor'
    className={cn('govuk-logo font-govuk', className)}
    {...props}
  >
    <title>Whitehall-UI</title>
    <rect
      x='1.5'
      y='1.5'
      width='29'
      height='29'
      rx='7'
      fill='none'
      stroke='currentcolor'
      strokeWidth='3'
    />
    <path
      d='M8 10l3.5 12 4.5-9 4.5 9 3.5-12'
      fill='none'
      stroke='currentcolor'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <text
      x='40'
      y='31'
      fontSize='32'
      fontWeight='700'
      textLength='185'
      lengthAdjust='spacingAndGlyphs'
    >
      Whitehall-UI
    </text>
  </svg>
);

const HeaderProductName = ({ className, ...props }: HeaderProductNameProps) => (
  <span className={cn('govuk-header-product-name', className)} {...props} />
);

export {
  Header as Root,
  HeaderContainer as Container,
  HeaderLogo as Logo,
  HeaderLink as Link,
  HeaderLogotype as Logotype,
  HeaderProductName as ProductName,
  type HeaderProps as RootProps,
  type HeaderContainerProps as ContainerProps,
  type HeaderLogoProps as LogoProps,
  type HeaderLinkProps as LinkProps,
  type HeaderLogotypeProps as LogotypeProps,
  type HeaderProductNameProps as ProductNameProps,
};
