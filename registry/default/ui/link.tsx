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
          'text-govuk-link',
          'hover:text-govuk-brand-hover',
          'visited:text-govuk-visited',
          'active:text-govuk-black',
        ],
        muted: [
          'text-govuk-dark-grey',
          'hover:text-govuk-black',
          'visited:text-govuk-dark-grey',
          'active:text-govuk-black',
        ],
        inverse: [
          'text-white',
          'hover:text-white',
          'visited:text-white',
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
        className: 'visited:text-govuk-link',
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  },
);

type LinkVariant = NonNullable<VariantProps<typeof linkVariants>['variant']>;

type LinkProps = React.ComponentProps<'a'> & VariantProps<typeof linkVariants>;

const Link = ({
  className,
  variant,
  noUnderline,
  noVisitedState,
  children,
  ...props
}: LinkProps) => (
  <a
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
