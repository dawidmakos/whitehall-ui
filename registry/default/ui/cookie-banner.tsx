import { cn } from '@/lib/utils';

interface CookieBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface CookieBannerMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface CookieBannerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface CookieBannerHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface CookieBannerActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const CookieBanner = ({
  className,
  ref,
  children,
  role = 'region',
  ...props
}: CookieBannerProps) => (
  <div
    ref={ref}
    role={role}
    data-nosnippet
    className={cn(
      'font-govuk text-govuk-body',
      'pt-govuk-4',
      'border-b-govuk-wide border-b-transparent',
      'bg-govuk-light-grey',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const CookieBannerMessage = ({
  className,
  ref,
  children,
  ...props
}: CookieBannerMessageProps) => (
  <div
    ref={ref}
    className={cn('max-w-240 mx-auto px-govuk-3', '-mb-govuk-2', className)}
    {...props}
  >
    {children}
  </div>
);

const CookieBannerContent = ({
  className,
  ref,
  children,
  ...props
}: CookieBannerContentProps) => (
  <div
    ref={ref}
    className={cn('sm:w-2/3', 'mb-govuk-3', '*:last:mb-0', className)}
    {...props}
  >
    {children}
  </div>
);

const CookieBannerHeading = ({
  className,
  ref,
  children,
  ...props
}: CookieBannerHeadingProps) => (
  <h2
    ref={ref}
    className={cn(
      'text-govuk-heading-m font-bold text-govuk-black',
      'm-0 mb-govuk-3',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const CookieBannerActions = ({
  className,
  ref,
  children,
  ...props
}: CookieBannerActionsProps) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col items-start',
      'sm:flex-row sm:flex-wrap sm:items-baseline',
      'gap-govuk-3',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export {
  CookieBanner,
  CookieBannerMessage,
  CookieBannerContent,
  CookieBannerHeading,
  CookieBannerActions,
  type CookieBannerProps,
  type CookieBannerMessageProps,
  type CookieBannerContentProps,
  type CookieBannerHeadingProps,
  type CookieBannerActionsProps,
};
