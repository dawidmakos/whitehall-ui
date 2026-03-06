import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const fieldsetLegendVariants = cva(
  [
    'box-border',
    'table',
    'max-w-full',
    'p-0',
    'font-govuk text-govuk-text',
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
    defaultVariants: {
      size: undefined,
    },
  },
);

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  ref?: React.Ref<HTMLFieldSetElement>;
}

const Fieldset = ({ className, ref, ...props }: FieldsetProps) => (
  <fieldset
    ref={ref}
    className={cn('min-w-0 m-0 p-0 border-0', className)}
    {...props}
  />
);

interface FieldsetLegendProps
  extends
    React.HTMLAttributes<HTMLLegendElement>,
    VariantProps<typeof fieldsetLegendVariants> {
  ref?: React.Ref<HTMLLegendElement>;
}

const FieldsetLegend = ({
  className,
  size,
  ref,
  ...props
}: FieldsetLegendProps) => (
  <legend
    ref={ref}
    className={cn(
      fieldsetLegendVariants({ size }),
      !size && 'text-govuk-body mb-govuk-2',
      className,
    )}
    {...props}
  />
);

interface FieldsetHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  ref?: React.Ref<HTMLHeadingElement>;
}

const FieldsetHeading = ({
  as: Tag = 'h1',
  className,
  ref,
  ...props
}: FieldsetHeadingProps) => (
  <Tag
    ref={ref}
    className={cn('m-0 text-[length:inherit] font-[weight:inherit]', className)}
    {...props}
  />
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
