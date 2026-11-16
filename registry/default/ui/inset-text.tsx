import { cn } from '@/lib/utils';

type InsetTextProps = React.ComponentProps<'div'>;

const InsetText = ({ className, ...props }: InsetTextProps) => (
  <div
    className={cn(
      'clear-both',
      'p-govuk-3',
      'my-govuk-r6',
      'border-l-govuk-inset',
      'text-govuk-tag font-normal font-govuk text-govuk-black',
      '*:first:mt-0 *:last:mb-0',
      className,
    )}
    {...props}
  />
);

export { InsetText, type InsetTextProps };
