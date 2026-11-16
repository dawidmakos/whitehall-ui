import { cn } from '@/lib/utils';

interface PanelProps extends React.ComponentProps<'div'> {
  variant?: 'confirmation' | 'interruption';
}

type PanelTitleProps = React.ComponentProps<'h1'>;

type PanelBodyProps = React.ComponentProps<'div'>;

type PanelActionsProps = React.ComponentProps<'div'>;

const Panel = ({
  className,
  variant = 'confirmation',
  ...props
}: PanelProps) => (
  <div
    data-variant={variant}
    className={cn(
      'group/panel font-govuk text-govuk-heading-l',
      'box-border',
      'mb-govuk-3 p-govuk-panel max-sm:p-govuk-3',
      'border-govuk-standard border-transparent',
      'text-white wrap-break-word',
      variant === 'interruption'
        ? 'bg-govuk-brand text-left'
        : 'bg-govuk-green text-center',
      '[&_.govuk-button-group]:mb-0 sm:[&_.govuk-button-group]:-mb-govuk-2',
      className,
    )}
    {...props}
  />
);

const PanelTitle = ({ className, children, ...props }: PanelTitleProps) => (
  <h1
    className={cn(
      'text-govuk-heading-xl font-bold',
      'mt-0 mb-govuk-6 last:mb-0',
      'group-data-[variant=interruption]/panel:text-govuk-heading-l',
      'group-data-[variant=interruption]/panel:mb-govuk-3',
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

const PanelBody = ({ className, ...props }: PanelBodyProps) => (
  <div
    className={cn(
      'text-govuk-heading-l *:last:mb-0 not-last:mb-govuk-7',
      'group-data-[variant=interruption]/panel:text-govuk-body',
      className,
    )}
    {...props}
  />
);

const PanelActions = ({ className, ...props }: PanelActionsProps) => (
  <div className={cn('govuk-button-group', className)} {...props} />
);

export {
  Panel,
  PanelTitle,
  PanelBody,
  PanelActions,
  type PanelProps,
  type PanelTitleProps,
  type PanelBodyProps,
  type PanelActionsProps,
};
