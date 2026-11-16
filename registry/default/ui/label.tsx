import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(['block', 'font-govuk text-govuk-black'], {
  variants: {
    size: {
      xl: 'text-govuk-heading-xl font-bold mb-govuk-3',
      l: 'text-govuk-heading-l font-bold mb-govuk-3',
      m: 'text-govuk-heading-m font-bold mb-govuk-3',
      s: 'text-govuk-body font-bold mb-govuk-1',
    },
  },
});

type LabelProps = React.ComponentProps<'label'> &
  VariantProps<typeof labelVariants>;

const Label = ({ className, size, htmlFor, ...props }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className={cn(
      labelVariants({ size }),
      !size && 'text-govuk-body mb-govuk-1',
      className,
    )}
    {...props}
  />
);

interface LabelWrapperProps extends React.ComponentProps<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const LabelWrapper = ({
  as: Tag = 'h1',
  className,
  children,
  ...props
}: LabelWrapperProps) => (
  <Tag className={cn('m-0', className)} {...props}>
    {children}
  </Tag>
);

export {
  Label,
  LabelWrapper,
  labelVariants,
  type LabelProps,
  type LabelWrapperProps,
};
