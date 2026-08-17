import { cn } from '@/lib/utils';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface PanelTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  ref?: React.Ref<HTMLHeadingElement>;
}

interface PanelBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const Panel = ({ className, ref, children, ...props }: PanelProps) => (
  <div
    ref={ref}
    className={cn(
      'font-govuk text-govuk-heading-l',
      'box-border text-center',
      'mb-govuk-3 p-govuk-7 max-sm:p-govuk-4',
      'border-govuk-standard border-transparent',
      'text-white bg-govuk-green',
      'wrap-break-word',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const PanelTitle = ({
  className,
  ref,
  children,
  ...props
}: PanelTitleProps) => (
  <h1
    ref={ref}
    className={cn(
      'text-govuk-heading-xl font-bold',
      'mt-0 mb-govuk-6 last:mb-0',
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

const PanelBody = ({ className, ref, children, ...props }: PanelBodyProps) => (
  <div ref={ref} className={cn('text-govuk-heading-l', className)} {...props}>
    {children}
  </div>
);

export {
  Panel,
  PanelTitle,
  PanelBody,
  type PanelProps,
  type PanelTitleProps,
  type PanelBodyProps,
};
