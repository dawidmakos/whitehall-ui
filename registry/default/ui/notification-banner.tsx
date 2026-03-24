import { cn } from '@/lib/utils';

interface NotificationBannerProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  variant?: 'default' | 'success';
}

interface NotificationBannerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface NotificationBannerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface NotificationBannerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface NotificationBannerHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface NotificationBannerLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const NotificationBanner = ({
  className,
  variant = 'default',
  ref,
  children,
  ...props
}: NotificationBannerProps) => (
  <section
    ref={ref}
    role={variant === 'success' ? 'alert' : undefined}
    aria-labelledby={
      props['aria-labelledby'] ?? 'govuk-notification-banner-title'
    }
    className={cn(
      'font-govuk text-govuk-body',
      'mb-govuk-8',
      variant === 'success'
        ? 'border-govuk-notification-banner-success bg-govuk-green'
        : 'border-govuk-notification-banner bg-govuk-brand',
      'focus:outline-3 focus:outline-govuk-yellow',
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

const NotificationBannerHeader = ({
  className,
  ref,
  children,
  ...props
}: NotificationBannerHeaderProps) => (
  <div
    ref={ref}
    className={cn(
      'py-govuk-1 px-govuk-3 sm:px-govuk-4',
      'border-b border-b-transparent',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const NotificationBannerTitle = ({
  className,
  ref,
  children = 'Important',
  id = 'govuk-notification-banner-title',
  ...props
}: NotificationBannerTitleProps) => (
  <h2
    ref={ref}
    id={id}
    className={cn('text-govuk-body font-bold m-0 p-0 text-white', className)}
    {...props}
  >
    {children}
  </h2>
);

const NotificationBannerContent = ({
  className,
  ref,
  children,
  ...props
}: NotificationBannerContentProps) => (
  <div
    ref={ref}
    className={cn(
      'p-govuk-3 sm:p-govuk-4',
      'text-govuk-black bg-white',
      '*:last:mb-0',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const NotificationBannerHeading = ({
  className,
  ref,
  children,
  ...props
}: NotificationBannerHeadingProps) => (
  <h3
    ref={ref}
    className={cn(
      'text-govuk-heading-m font-bold m-0 mb-govuk-3 p-0',
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

const NotificationBannerLink = ({
  className,
  ref,
  children,
  ...props
}: NotificationBannerLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'font-govuk text-govuk-brand font-bold',
      'underline govuk-link-underline',
      'hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
      'visited:text-govuk-brand',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export {
  NotificationBanner,
  NotificationBannerHeader,
  NotificationBannerTitle,
  NotificationBannerContent,
  NotificationBannerHeading,
  NotificationBannerLink,
  type NotificationBannerProps,
  type NotificationBannerHeaderProps,
  type NotificationBannerTitleProps,
  type NotificationBannerContentProps,
  type NotificationBannerHeadingProps,
  type NotificationBannerLinkProps,
};
