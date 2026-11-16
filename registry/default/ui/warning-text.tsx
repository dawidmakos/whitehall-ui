import { cn } from '@/lib/utils';

interface WarningTextProps extends React.ComponentProps<'div'> {
  assistiveText?: string;
}

const WarningText = ({
  className,
  assistiveText = 'Warning',
  children,
  ...props
}: WarningTextProps) => (
  <div
    className={cn(
      'font-govuk text-govuk-body font-bold',
      'relative py-govuk-2 mb-govuk-r6',
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
        'text-govuk-warning-icon',
        'select-none',
        'forced-color-adjust-none forced-colors:border-govuk-canvas-text forced-colors:text-govuk-canvas-text forced-colors:bg-transparent',
      )}
      aria-hidden='true'
    >
      !
    </span>
    <strong className='block pl-govuk-warning-text-pl'>
      <span className='sr-only'>{assistiveText}</span>
      {children}
    </strong>
  </div>
);

export { WarningText, type WarningTextProps };
