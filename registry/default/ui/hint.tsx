import { cn } from '@/lib/utils';

type HintProps = React.ComponentProps<'div'>;

const Hint = ({ className, ...props }: HintProps) => (
  <div
    className={cn(
      'font-govuk text-govuk-body text-govuk-dark-grey',
      'mb-govuk-3',
      '[legend+&]:-mt-govuk-1',
      '[label:not([class*=heading])+&]:mb-govuk-2 [legend:not([class*=heading])+&]:mb-govuk-2',
      className,
    )}
    {...props}
  />
);

export { Hint, type HintProps };
