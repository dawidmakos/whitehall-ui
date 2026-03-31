import { Tabs as BaseUITabs } from '@base-ui/react/tabs';
import { cn } from '@/lib/utils';

interface TabsProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Root>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

interface TabsListProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.List>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

interface TabsTabProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Tab>,
  'className'
> {
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
}

interface TabsPanelProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Panel>,
  'className'
> {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
}

const Tabs = ({ className, ref, children, ...props }: TabsProps) => (
  <BaseUITabs.Root
    ref={ref}
    className={cn(
      'mt-govuk-1 mb-govuk-6 font-govuk text-govuk-body text-govuk-black',
      className,
    )}
    {...props}
  >
    {children}
  </BaseUITabs.Root>
);

const TabsList = ({ className, ref, children, ...props }: TabsListProps) => (
  <BaseUITabs.List
    ref={ref}
    activateOnFocus
    className={cn('flex m-0 p-0 border-b border-govuk-mid-grey', className)}
    {...props}
  >
    {children}
  </BaseUITabs.List>
);

const TabsTab = ({ className, ref, children, ...props }: TabsTabProps) => (
  <BaseUITabs.Tab
    ref={ref}
    className={cn(
      'group relative cursor-pointer border-0 outline-none',
      'mr-govuk-1 py-govuk-2 px-govuk-4',
      'bg-govuk-light-grey text-center',
      'govuk-tab',
      className,
    )}
    {...props}
  >
    <span
      className={cn(
        'text-govuk-black underline govuk-link-underline',
        'group-hover:govuk-link-underline-hover',
        'group-focus-visible:govuk-link-focus group-focus-visible:no-underline',
        'group-data-active:no-underline',
      )}
    >
      {children}
    </span>
  </BaseUITabs.Tab>
);

const TabsPanel = ({ className, ref, children, ...props }: TabsPanelProps) => (
  <BaseUITabs.Panel
    ref={ref}
    tabIndex={-1}
    className={cn(
      'py-govuk-6 px-govuk-4',
      'govuk-tab-panel-border',
      '*:last:mb-0',
      className,
    )}
    {...props}
  >
    {children}
  </BaseUITabs.Panel>
);

export { Tabs, TabsList, TabsTab, TabsPanel };
export type { TabsProps, TabsListProps, TabsTabProps, TabsPanelProps };
