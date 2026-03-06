import { cn } from '@/lib/utils';

interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const Hint = ({ className, ref, ...props }: HintProps) => (
  <div
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body text-govuk-secondary-text',
      'mb-govuk-3',
      className,
    )}
    {...props}
  />
);

export { Hint, type HintProps };
