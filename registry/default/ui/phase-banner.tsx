import { cn } from '@/lib/utils';

type PhaseBannerProps = React.ComponentProps<'div'>;

type PhaseBannerContentProps = React.ComponentProps<'p'>;

type PhaseBannerTagProps = React.ComponentProps<'span'>;

type PhaseBannerTextProps = React.ComponentProps<'span'>;

const PhaseBanner = ({ className, ...props }: PhaseBannerProps) => (
  <div
    className={cn(
      'govuk-width-container [.govuk-width-container_&]:mx-0',
      'py-govuk-2 border-b border-govuk-mid-grey',
      className,
    )}
    {...props}
  />
);

const PhaseBannerContent = ({
  className,
  ...props
}: PhaseBannerContentProps) => (
  <p
    className={cn(
      'table m-0 font-govuk text-govuk-phase-banner text-govuk-black',
      className,
    )}
    {...props}
  />
);

const PhaseBannerTag = ({ className, ...props }: PhaseBannerTagProps) => (
  <span
    className={cn(
      'mr-govuk-3 sm:mr-govuk-2 *:text-govuk-body-small',
      className,
    )}
    {...props}
  />
);

const PhaseBannerText = ({ className, ...props }: PhaseBannerTextProps) => (
  <span className={cn('table-cell align-middle', className)} {...props} />
);

export {
  PhaseBanner,
  PhaseBannerContent,
  PhaseBannerTag,
  PhaseBannerText,
  type PhaseBannerProps,
  type PhaseBannerContentProps,
  type PhaseBannerTagProps,
  type PhaseBannerTextProps,
};
