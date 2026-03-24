import { cn } from '@/lib/utils';

interface PhaseBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface PhaseBannerContentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLParagraphElement>;
}

interface PhaseBannerTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  ref?: React.Ref<HTMLSpanElement>;
}

interface PhaseBannerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  ref?: React.Ref<HTMLSpanElement>;
}

const PhaseBanner = ({ className, ref, ...props }: PhaseBannerProps) => (
  <div
    ref={ref}
    className={cn('py-govuk-2 border-b border-govuk-mid-grey', className)}
    {...props}
  />
);

const PhaseBannerContent = ({
  className,
  ref,
  ...props
}: PhaseBannerContentProps) => (
  <p
    ref={ref}
    className={cn(
      'table m-0 font-govuk text-govuk-phase-banner text-govuk-black',
      className,
    )}
    {...props}
  />
);

const PhaseBannerTag = ({ className, ref, ...props }: PhaseBannerTagProps) => (
  <span
    ref={ref}
    className={cn('mr-govuk-3 sm:mr-govuk-2', className)}
    {...props}
  />
);

const PhaseBannerText = ({
  className,
  ref,
  ...props
}: PhaseBannerTextProps) => (
  <span
    ref={ref}
    className={cn('table-cell align-middle', className)}
    {...props}
  />
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
