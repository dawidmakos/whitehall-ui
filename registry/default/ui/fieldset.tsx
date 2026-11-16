import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const fieldsetLegendVariants = cva(
  [
    'box-border',
    'table',
    'max-w-full',
    'p-0',
    'font-govuk text-govuk-black',
    'whitespace-normal',
  ],
  {
    variants: {
      size: {
        xl: 'text-govuk-heading-xl font-bold mb-govuk-3',
        l: 'text-govuk-heading-l font-bold mb-govuk-3',
        m: 'text-govuk-heading-m font-bold mb-govuk-3',
        s: 'text-govuk-body font-bold mb-govuk-2',
      },
    },
  },
);

type FieldsetProps = React.ComponentProps<'fieldset'>;

const Fieldset = ({ className, ...props }: FieldsetProps) => (
  <fieldset
    className={cn('min-w-0 m-0 p-0 border-0', className)}
    {...props}
  />
);

type FieldsetLegendProps = React.ComponentProps<'legend'> &
  VariantProps<typeof fieldsetLegendVariants>;

const FieldsetLegend = ({ className, size, ...props }: FieldsetLegendProps) => (
  <legend
    className={cn(
      fieldsetLegendVariants({ size }),
      !size && 'text-govuk-body mb-govuk-2',
      className,
    )}
    {...props}
  />
);

interface FieldsetHeadingProps extends React.ComponentProps<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const FieldsetHeading = ({
  as: Tag = 'h1',
  className,
  children,
  ...props
}: FieldsetHeadingProps) => (
  <Tag
    className={cn('m-0 text-[length:inherit] font-[weight:inherit]', className)}
    {...props}
  >
    {children}
  </Tag>
);

export {
  Fieldset,
  FieldsetLegend,
  FieldsetHeading,
  fieldsetLegendVariants,
  type FieldsetProps,
  type FieldsetLegendProps,
  type FieldsetHeadingProps,
};
