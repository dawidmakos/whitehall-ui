import { cn } from '@/lib/utils';

interface InsetTextProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function InsetText({ className, ref, ...props }: InsetTextProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'clear-both',
        'p-govuk-inset-text-padding',
        'my-govuk-inset-text-margin',
        'border-l-govuk-inset',
        'text-govuk-tag font-normal font-govuk text-govuk-text',
        '*:first:mt-0 *:last:mb-0',
        className,
      )}
      {...props}
    />
  );
}

export { InsetText, type InsetTextProps };
