import { cn } from '@/lib/utils';

interface WarningTextProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  assistiveText?: string;
}

const WarningText = ({
  className,
  ref,
  assistiveText = 'Warning',
  children,
  ...props
}: WarningTextProps) => (
  <div
    ref={ref}
    className={cn(
      'font-govuk text-govuk-body font-bold',
      'relative py-govuk-2 mb-govuk-6',
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        'box-border absolute left-0',
        'flex items-center justify-center',
        'min-w-govuk-warning-icon-size min-h-govuk-warning-icon-size',
        'mt-govuk-warning-icon-mt',
        'border-govuk-warning-icon-border border-solid border-govuk-black rounded-full',
        'bg-govuk-black text-white',
        'text-3xl',
        'select-none',
      )}
      aria-hidden='true'
    >
      !
    </span>
    <strong className={cn('block pl-govuk-warning-text-pl font-inherit')}>
      <span className='sr-only'>{assistiveText}</span>
      {children}
    </strong>
  </div>
);

export { WarningText, type WarningTextProps };
