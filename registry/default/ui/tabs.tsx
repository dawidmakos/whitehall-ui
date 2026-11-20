'use client';

import { createContext, use, useId, useSyncExternalStore } from 'react';
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

const TabsContext = createContext({ stacked: false, idPrefix: '' });

const usePanelId = (value: unknown) => {
  const { idPrefix } = use(TabsContext);
  return `${idPrefix}-${String(value)}`;
};

const domStyle = <T,>(
  style:
    | React.CSSProperties
    | ((state: T) => React.CSSProperties | undefined)
    | undefined,
) => (typeof style === 'function' ? undefined : style);

const rootStyles =
  'mt-govuk-1 mb-govuk-r6 font-govuk text-govuk-body text-govuk-black';

interface TabsProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Root>,
  'className'
> {
  className?: string;
}

interface TabsListProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.List>,
  'className'
> {
  className?: string;
  contentsLabel?: string;
}

interface TabsTabProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Tab>,
  'className'
> {
  className?: string;
}

interface TabsPanelProps extends Omit<
  React.ComponentProps<typeof BaseUITabs.Panel>,
  'className'
> {
  className?: string;
}

const Tabs = ({
  className,
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
      <TabsContext value={{ stacked: true, idPrefix }}>
        <div
          className={cn(rootStyles, className)}
          style={domStyle(style)}
          {...props}
        />
      </TabsContext>
    );
  }

  return (
    <TabsContext value={{ stacked: false, idPrefix }}>
      <BaseUITabs.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        orientation={orientation}
        render={render}
        style={style}
        className={cn(rootStyles, className)}
        {...props}
      />
    </TabsContext>
  );
};

const TabsList = ({
  className,
  children,
  contentsLabel = 'Contents',
  activateOnFocus = true,
  loopFocus = false,
  render,
  style,
  ...props
}: TabsListProps) => {
  const { stacked } = use(TabsContext);

  if (stacked) {
    return (
      <div
        className={cn('mb-govuk-4', className)}
        style={domStyle(style)}
        {...props}
      >
        <h2 className='mt-0 mb-govuk-2 text-govuk-body font-normal'>
          {contentsLabel}
        </h2>
        <ul className='m-0 p-0 list-none'>{children}</ul>
      </div>
    );
  }

  return (
    <BaseUITabs.List
      activateOnFocus={activateOnFocus}
      loopFocus={loopFocus}
      render={render}
      style={style}
      className={cn('flex flex-wrap m-0 p-0 border-b border-govuk-mid-grey', className)}
      {...props}
    >
      {children}
    </BaseUITabs.List>
  );
};

const TabsTab = ({ className, children, value, ...props }: TabsTabProps) => {
  const { stacked } = use(TabsContext);
  const panelId = usePanelId(value);

  if (stacked) {
    return (
      <li className="ml-govuk-5 before:-ml-govuk-5 before:pr-govuk-1 before:content-['—_']">
        <a
          href={`#${panelId}`}
          className={cn(
            'inline-block mb-govuk-2',
            'text-govuk-link underline govuk-link-underline',
            'visited:text-govuk-visited active:text-govuk-black',
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
  value,
  keepMounted,
  render,
  style,
  ...props
}: TabsPanelProps) => {
  const { stacked } = use(TabsContext);
  const panelId = usePanelId(value);

  if (stacked) {
    return (
      <div
        id={panelId}
        className={cn('mb-govuk-6 *:last:mb-0', className)}
        style={domStyle(style)}
        {...props}
      />
    );
  }

  return (
    <BaseUITabs.Panel
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
    />
  );
};

export {
  Tabs as Root,
  TabsList as List,
  TabsTab as Tab,
  TabsPanel as Panel,
  type TabsProps as RootProps,
  type TabsListProps as ListProps,
  type TabsTabProps as TabProps,
  type TabsPanelProps as PanelProps,
};
