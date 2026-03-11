import { cn } from '@/lib/utils';

interface InsetTextProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const InsetText = ({ className, ref, ...props }: InsetTextProps) => (
  <div
    ref={ref}
    className={cn(
      'clear-both',
      'p-govuk-3',
      'my-govuk-4',
      'border-l-govuk-inset',
      'text-govuk-tag font-normal font-govuk text-govuk-black',
      '*:first:mt-0 *:last:mb-0',
      className,
    )}
    {...props}
  />
);

export { InsetText, type InsetTextProps };
