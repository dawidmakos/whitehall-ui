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
  defaultVariants: {
    size: undefined,
  },
});

interface LabelProps
  extends
    React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  ref?: React.Ref<HTMLLabelElement>;
}

const Label = ({ className, size, htmlFor, ref, ...props }: LabelProps) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn(
      labelVariants({ size }),
      !size && 'text-govuk-body mb-govuk-1',
      className,
    )}
    {...props}
  />
);

interface LabelWrapperProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  ref?: React.Ref<HTMLHeadingElement>;
}

const LabelWrapper = ({
  as: Tag = 'h1',
  className,
  ref,
  ...props
}: LabelWrapperProps) => (
  <Tag ref={ref} className={cn('m-0', className)} {...props} />
);

export {
  Label,
  LabelWrapper,
  labelVariants,
  type LabelProps,
  type LabelWrapperProps,
};
