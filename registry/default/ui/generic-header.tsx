import { cn } from '@/lib/utils';

interface GenericHeaderProps extends React.ComponentProps<'div'> {
  fullWidth?: boolean;
}

interface GenericHeaderContainerProps extends React.ComponentProps<'div'> {
  fullWidth?: boolean;
}

type GenericHeaderLogoProps = React.ComponentProps<'div'>;

type GenericHeaderLinkProps = React.ComponentProps<'a'>;

const GenericHeader = ({
  className,
  fullWidth,
  children,
  ...props
}: GenericHeaderProps) => (
  <div
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
  </div>
);

const GenericHeaderContainer = ({
  className,
  fullWidth,
  ...props
}: GenericHeaderContainerProps) => (
  <div
    className={cn(
      fullWidth ? 'px-govuk-3' : 'govuk-width-container',
      className,
    )}
    {...props}
  />
);

const GenericHeaderLogo = ({ className, ...props }: GenericHeaderLogoProps) => (
  <div
    className={cn(
      'flex pt-govuk-header-pt pb-govuk-header-pb',
      className,
    )}
    {...props}
  />
);

const GenericHeaderLink = ({
  className,
  children,
  ...props
}: GenericHeaderLinkProps) => (
  <a
    className={cn(
      'inline-flex items-center gap-govuk-1',
      'text-govuk-header-link',
      'govuk-header-link focus:govuk-link-focus',
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
