import { cn } from '@/lib/utils';

type CookieBannerProps = React.ComponentProps<'section'>;

type CookieBannerMessageProps = React.ComponentProps<'div'>;

type CookieBannerContentProps = React.ComponentProps<'div'>;

type CookieBannerHeadingProps = React.ComponentProps<'h2'>;

type CookieBannerActionsProps = React.ComponentProps<'div'>;

const CookieBanner = ({ className, ...props }: CookieBannerProps) => (
  <section
    aria-label='Cookie banner'
    data-nosnippet
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'pt-govuk-4',
      'border-b-govuk-wide border-b-transparent',
      'bg-govuk-surface',
      className,
    )}
    {...props}
  />
);

const CookieBannerMessage = ({
  className,
  ...props
}: CookieBannerMessageProps) => (
  <div
    className={cn(
      'govuk-width-container',
      '-mb-govuk-2',
      'focus:outline-none',
      className,
    )}
    {...props}
  />
);

const CookieBannerContent = ({
  className,
  ...props
}: CookieBannerContentProps) => (
  <div className={cn('sm:w-2/3', className)} {...props} />
);

const CookieBannerHeading = ({
  className,
  children,
  ...props
}: CookieBannerHeadingProps) => (
  <h2
    className={cn(
      'text-govuk-heading-m font-bold text-govuk-black',
      'm-0 mb-govuk-3 sm:mb-govuk-4',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const CookieBannerActions = ({
  className,
  ...props
}: CookieBannerActionsProps) => (
  <div className={cn('govuk-button-group', className)} {...props} />
);

export {
  CookieBanner as Root,
  CookieBannerMessage as Message,
  CookieBannerContent as Content,
  CookieBannerHeading as Heading,
  CookieBannerActions as Actions,
  type CookieBannerProps as RootProps,
  type CookieBannerMessageProps as MessageProps,
  type CookieBannerContentProps as ContentProps,
  type CookieBannerHeadingProps as HeadingProps,
  type CookieBannerActionsProps as ActionsProps,
};
