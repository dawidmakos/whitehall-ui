import { createContext, useContext, useId, useSyncExternalStore } from 'react';
import { Tabs as BaseUITabs } from '@base-ui/react/tabs';
import { cn } from '@/lib/utils';

const STACKED_QUERY = '(width < 40rem)';

let stackedQuery: MediaQueryList | undefined;

const getStackedQuery = () => {
  stackedQuery ??= window.matchMedia(STACKED_QUERY);
  return stackedQuery;
};

const subscribeToStacked = (onStoreChange: () => void) => {
  const query = getStackedQuery();
  query.addEventListener('change', onStoreChange);
  return () => query.removeEventListener('change', onStoreChange);
};

const getStackedSnapshot = () => getStackedQuery().matches;

const getStackedServerSnapshot = () => false;

const useIsStacked = () =>
  useSyncExternalStore(
    subscribeToStacked,
    getStackedSnapshot,
    getStackedServerSnapshot,
  );

interface TabsContextValue {
  stacked: boolean;
  idPrefix: string;
}

const TabsContext = createContext<TabsContextValue>({
  stacked: false,
  idPrefix: '',
});

const usePanelId = (value: unknown) => {
  const { idPrefix } = useContext(TabsContext);
  return `${idPrefix}-${String(value)}`;
};

const domStyle = <T,>(
  style: React.CSSProperties | ((state: T) => React.CSSProperties | undefined) | undefined,
) => (typeof style === 'function' ? undefined : style);

const rootStyles = 'mt-govuk-1 mb-govuk-6 font-govuk text-govuk-body text-govuk-black';

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
  contentsLabel?: string;
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

const Tabs = ({
  className,
  ref,
  children,
  defaultValue,
  value,
  onValueChange,
  orientation,
  render,
  style,
  ...props
}: TabsProps) => {
  const stacked = useIsStacked();
  const idPrefix = useId();

  if (stacked) {
    return (
      <TabsContext.Provider value={{ stacked: true, idPrefix }}>
        <div
          ref={ref}
          className={cn(rootStyles, className)}
          style={domStyle(style)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }

  return (
    <TabsContext.Provider value={{ stacked: false, idPrefix }}>
      <BaseUITabs.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        orientation={orientation}
        render={render}
        style={style}
        className={cn(rootStyles, className)}
        {...props}
      >
        {children}
      </BaseUITabs.Root>
    </TabsContext.Provider>
  );
};

const TabsList = ({
  className,
  ref,
  children,
  contentsLabel = 'Contents',
  activateOnFocus = true,
  loopFocus,
  render,
  style,
  ...props
}: TabsListProps) => {
  const { stacked } = useContext(TabsContext);

  if (stacked) {
    return (
      <div
        ref={ref}
        className={cn('mb-govuk-4', className)}
        style={domStyle(style)}
        {...props}
      >
        <h2 className='mt-0 mb-govuk-2 text-govuk-heading-m font-bold'>
          {contentsLabel}
        </h2>
        <ul className='m-0 p-0 list-none'>{children}</ul>
      </div>
    );
  }

  return (
    <BaseUITabs.List
      ref={ref}
      activateOnFocus={activateOnFocus}
      loopFocus={loopFocus}
      render={render}
      style={style}
      className={cn('flex m-0 p-0 border-b border-govuk-mid-grey', className)}
      {...props}
    >
      {children}
    </BaseUITabs.List>
  );
};

const TabsTab = ({ className, ref, children, value, ...props }: TabsTabProps) => {
  const { stacked } = useContext(TabsContext);
  const panelId = usePanelId(value);

  if (stacked) {
    return (
      <li className='mb-govuk-1'>
        <a
          href={`#${panelId}`}
          className={cn(
            'text-govuk-brand underline govuk-link-underline',
            'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
            'focus:govuk-link-focus',
            className,
          )}
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <BaseUITabs.Tab
      ref={ref}
      value={value}
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
};

const TabsPanel = ({
  className,
  ref,
  children,
  value,
  keepMounted,
  render,
  style,
  ...props
}: TabsPanelProps) => {
  const { stacked } = useContext(TabsContext);
  const panelId = usePanelId(value);

  if (stacked) {
    return (
      <div
        ref={ref}
        id={panelId}
        className={cn('mb-govuk-6 *:last:mb-0', className)}
        style={domStyle(style)}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <BaseUITabs.Panel
      ref={ref}
      value={value}
      keepMounted={keepMounted}
      render={render}
      style={style}
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
};

export { Tabs, TabsList, TabsTab, TabsPanel };
export type { TabsProps, TabsListProps, TabsTabProps, TabsPanelProps };
