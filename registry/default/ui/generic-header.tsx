import { cn } from '@/lib/utils';

interface GenericHeaderProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  fullWidth?: boolean;
}

interface GenericHeaderContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  fullWidth?: boolean;
}

interface GenericHeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface GenericHeaderLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const GenericHeader = ({
  className,
  fullWidth,
  ref,
  children,
  ...props
}: GenericHeaderProps) => (
  <header
    ref={ref}
    className={cn(
      'font-govuk text-govuk-header',
      'border-b border-b-transparent',
      'text-white bg-govuk-black',
      className,
    )}
    {...props}
  >
    {children ?? (
      <GenericHeaderContainer fullWidth={fullWidth}>
        <GenericHeaderLogo />
      </GenericHeaderContainer>
    )}
  </header>
);

const GenericHeaderContainer = ({
  className,
  fullWidth,
  ref,
  children,
  ...props
}: GenericHeaderContainerProps) => (
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

const GenericHeaderLogo = ({
  className,
  ref,
  children,
  ...props
}: GenericHeaderLogoProps) => (
  <div ref={ref} className={cn('flex py-govuk-3', className)} {...props}>
    {children}
  </div>
);

const GenericHeaderLink = ({
  className,
  ref,
  children,
  ...props
}: GenericHeaderLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'inline-flex items-center gap-govuk-1',
      'text-govuk-header-link',
      'text-white no-underline',
      'visited:text-white active:text-white',
      'hover:underline hover:govuk-link-underline hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export {
  GenericHeader,
  GenericHeaderContainer,
  GenericHeaderLogo,
  GenericHeaderLink,
  type GenericHeaderProps,
  type GenericHeaderContainerProps,
  type GenericHeaderLogoProps,
  type GenericHeaderLinkProps,
};
