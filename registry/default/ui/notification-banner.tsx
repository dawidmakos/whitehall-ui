'use client';

import { useEffect, useRef } from 'react';
import { cn, mergeRefs } from '@/lib/utils';

interface NotificationBannerProps extends React.ComponentProps<'section'> {
  variant?: 'default' | 'success';
  disableAutoFocus?: boolean;
}

type NotificationBannerHeaderProps = React.ComponentProps<'div'>;

type NotificationBannerTitleProps = React.ComponentProps<'h2'>;

type NotificationBannerContentProps = React.ComponentProps<'div'>;

type NotificationBannerHeadingProps = React.ComponentProps<'h3'>;

type NotificationBannerLinkProps = React.ComponentProps<'a'>;

const NotificationBanner = ({
  className,
  variant = 'default',
  disableAutoFocus,
  ref,
  ...props
}: NotificationBannerProps) => {
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = innerRef.current;
    if (variant !== 'success' || disableAutoFocus || !node) return;
    node.setAttribute('tabindex', '-1');
    node.addEventListener('blur', () => node.removeAttribute('tabindex'), {
      once: true,
    });
    node.focus();
  }, [variant, disableAutoFocus]);

  return (
    <section
      ref={mergeRefs(innerRef, ref)}
      role={variant === 'success' ? 'alert' : undefined}
      aria-labelledby='govuk-notification-banner-title'
      data-variant={variant}
      className={cn(
        'group/banner font-govuk text-govuk-body',
        'mb-govuk-6 sm:mb-govuk-8',
        variant === 'success'
          ? 'border-govuk-notification-banner-success bg-govuk-green'
          : 'border-govuk-notification-banner bg-govuk-brand',
        'focus:outline-3 focus:outline-govuk-yellow',
        className,
      )}
      {...props}
    />
  );
};

const NotificationBannerHeader = ({
  className,
  ...props
}: NotificationBannerHeaderProps) => (
  <div
    className={cn(
      'py-govuk-1 px-govuk-3 sm:px-govuk-4',
      'border-b border-b-transparent',
      className,
    )}
    {...props}
  />
);

const NotificationBannerTitle = ({
  className,
  children = 'Important',
  ...props
}: NotificationBannerTitleProps) => (
  <h2
    id='govuk-notification-banner-title'
    className={cn('text-govuk-body font-bold m-0 p-0 text-white', className)}
    {...props}
  >
    {children}
  </h2>
);

const NotificationBannerContent = ({
  className,
  ...props
}: NotificationBannerContentProps) => (
  <div
    className={cn(
      'p-govuk-3 sm:p-govuk-4',
      'text-govuk-black bg-white',
      '*:box-border *:max-w-govuk-notification-content *:last:mb-0',
      className,
    )}
    {...props}
  />
);

const NotificationBannerHeading = ({
  className,
  children,
  ...props
}: NotificationBannerHeadingProps) => (
  <h3
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
  children,
  ...props
}: NotificationBannerLinkProps) => (
  <a
    className={cn(
      'font-govuk underline govuk-link-underline',
      'hover:govuk-link-underline-hover focus:govuk-link-focus',
      'text-govuk-link visited:text-govuk-link',
      'hover:text-govuk-brand-hover active:text-govuk-black',
      'group-data-[variant=success]/banner:text-govuk-green',
      'group-data-[variant=success]/banner:visited:text-govuk-green',
      'group-data-[variant=success]/banner:hover:text-govuk-success-hover',
      'group-data-[variant=success]/banner:active:text-govuk-green',
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
