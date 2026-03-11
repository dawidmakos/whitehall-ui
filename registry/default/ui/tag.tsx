import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva(
  [
    'inline-block',
    'px-govuk-tag-x pt-govuk-tag-pt pb-govuk-tag-pb',
    'mt-govuk-tag-mt mb-govuk-tag-mb',
    'rounded-govuk-tag',
    'text-govuk-tag font-normal font-govuk',
    'no-underline break-words',
    'max-w-govuk-tag-max-width',
    'forced-colors:font-bold',
  ],
  {
    variants: {
      colour: {
        blue: 'text-govuk-tag-blue bg-govuk-tag-blue-bg',
        green: 'text-govuk-tag-green bg-govuk-tag-green-bg',
        teal: 'text-govuk-tag-teal bg-govuk-tag-teal-bg',
        purple: 'text-govuk-tag-purple bg-govuk-tag-purple-bg',
        magenta: 'text-govuk-tag-magenta bg-govuk-tag-magenta-bg',
        red: 'text-govuk-tag-red bg-govuk-tag-red-bg',
        orange: 'text-govuk-tag-orange bg-govuk-tag-orange-bg',
        yellow: 'text-govuk-tag-yellow bg-govuk-tag-yellow-bg',
        grey: 'text-govuk-black bg-govuk-grey',
      },
    },
    defaultVariants: {
      colour: 'blue',
    },
  },
);

type TagColour = NonNullable<VariantProps<typeof tagVariants>['colour']>;

interface TagProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, 'className' | 'color'>,
    VariantProps<typeof tagVariants> {
  ref?: React.Ref<HTMLElement>;
  className?: string;
}

const Tag = ({ className, colour = 'blue', ref, ...props }: TagProps) => (
  <strong
    ref={ref}
    className={cn(tagVariants({ colour }), className)}
    {...props}
  />
);

export { Tag, tagVariants, type TagProps, type TagColour };
