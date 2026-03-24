import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva(
  [
    'font-govuk cursor-pointer',
    'underline govuk-link-underline',
    'hover:govuk-link-underline-hover',
    'focus:govuk-link-focus',
  ],
  {
    variants: {
      variant: {
        default: [
          'text-govuk-brand',
          'hover:text-govuk-brand-hover',
          'visited:text-govuk-visited',
          'active:text-govuk-brand',
        ],
        muted: [
          'text-govuk-dark-grey',
          'hover:text-govuk-dark-grey',
          'visited:text-govuk-dark-grey',
          'active:text-govuk-dark-grey',
        ],
        inverse: [
          'text-white',
          'hover:text-white',
          'visited:text-white',
          'active:text-white',
          'focus:not-focus:bg-transparent',
        ],
      },
      noUnderline: {
        true: 'no-underline hover:underline hover:govuk-link-underline',
      },
      noVisitedState: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        noVisitedState: true,
        className: 'visited:text-govuk-brand',
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

type LinkVariant = NonNullable<VariantProps<typeof linkVariants>['variant']>;

interface LinkProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const Link = ({
  className,
  variant,
  noUnderline,
  noVisitedState,
  ref,
  children,
  ...props
}: LinkProps) => (
  <a
    ref={ref}
    className={cn(
      linkVariants({ variant, noUnderline, noVisitedState }),
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export { Link, linkVariants, type LinkProps, type LinkVariant };
