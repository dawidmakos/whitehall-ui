'use client';

import { Children, useId, useState, useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

interface ServiceNavigationProps extends React.ComponentProps<'section'> {
  inverse?: boolean;
}

type ServiceNavigationContainerProps = React.ComponentProps<'div'>;

type ServiceNavigationServiceNameProps = React.ComponentProps<'a'>;

interface ServiceNavigationNavProps extends React.ComponentProps<'nav'> {
  menuButtonText?: string;
  collapseOnMobile?: boolean;
}

interface ServiceNavigationItemProps extends React.ComponentProps<'li'> {
  active?: boolean;
}

type ServiceNavigationLinkProps = React.ComponentProps<'a'>;

interface ServiceNavigationEndProps extends React.ComponentProps<'div'> {
  inline?: boolean;
}

const subscribeToNothing = () => () => {};

const useHydrated = () =>
  useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

const inverseLinkStyles = [
  'group-data-inverse/service-nav:text-white',
  'group-data-inverse/service-nav:visited:text-white',
  'group-data-inverse/service-nav:hover:text-white',
  'group-data-inverse/service-nav:active:text-white',
];

const linkStyles = [
  'font-govuk cursor-pointer',
  'no-underline hover:underline active:underline',
  'govuk-link-underline hover:govuk-link-underline-hover',
  'focus:govuk-link-focus',
];

const itemStyles = [
  'relative my-govuk-2',
  'sm:my-0 sm:inline-block sm:py-govuk-3 sm:leading-govuk-service-nav',
  'sm:not-last:mr-govuk-6',
];

const ServiceNavigation = ({
  className,
  inverse,
  ...props
}: ServiceNavigationProps) => (
  <section
    aria-label='Service information'
    data-inverse={inverse || undefined}
    className={cn(
      'group/service-nav font-govuk text-govuk-body',
      inverse
        ? 'text-white bg-govuk-brand'
        : [
            'text-govuk-black bg-govuk-surface',
            'border-b border-b-govuk-surface-border',
          ],
      className,
    )}
    {...props}
  />
);

const ServiceNavigationContainer = ({
  className,
  ...props
}: ServiceNavigationContainerProps) => (
  <div
    className={cn(
      'govuk-width-container',
      'flex flex-col items-start',
      'sm:flex-row sm:flex-wrap',
      'group-data-inverse/service-nav:border-y',
      'group-data-inverse/service-nav:border-govuk-surface-border',
      className,
    )}
    {...props}
  />
);

const ServiceNavigationServiceName = ({
  className,
  children,
  href,
  ...props
}: ServiceNavigationServiceNameProps) => (
  <span
    className={cn(itemStyles, 'font-bold max-sm:not-last:mb-0', className)}
  >
    {href ? (
      <a
        href={href}
        className={cn(
          'text-govuk-black visited:text-govuk-black',
          'hover:text-govuk-black active:text-govuk-black',
          linkStyles,
          inverseLinkStyles,
        )}
        {...props}
      >
        {children}
      </a>
    ) : (
      children
    )}
  </span>
);

const ServiceNavigationNav = ({
  className,
  children,
  menuButtonText = 'Menu',
  collapseOnMobile = Children.count(children) > 1,
  ...props
}: ServiceNavigationNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const listId = useId();
  const collapsible = useHydrated() && collapseOnMobile;

  return (
    <nav
      aria-label={menuButtonText}
      className={cn('max-sm:w-full sm:grow', className)}
      {...props}
    >
      <button
        type='button'
        hidden={!collapsible}
        className={cn(
          'sm:hidden inline-flex items-center gap-govuk-1',
          'my-govuk-2 p-0',
          'font-govuk text-govuk-body font-bold',
          'bg-transparent border-0 text-govuk-link cursor-pointer',
          'group-data-inverse/service-nav:text-white',
          'focus:govuk-link-focus',
        )}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-controls={listId}
      >
        {menuButtonText}
        <svg
          viewBox='0 0 10 6'
          width='10'
          height='6'
          fill='currentColor'
          aria-hidden='true'
          className={cn('transition-transform', menuOpen && 'rotate-180')}
        >
          <path d='M0 0l5 6 5-6z' />
        </svg>
      </button>
      <ul
        id={listId}
        className={cn(
          'list-none m-0 mb-govuk-3 p-0',
          'sm:flex sm:flex-wrap sm:mb-0',
          collapsible && !menuOpen && 'max-sm:hidden',
        )}
      >
        {children}
      </ul>
    </nav>
  );
};

const ServiceNavigationItem = ({
  className,
  active,
  ...props
}: ServiceNavigationItemProps) => (
  <li
    className={cn(
      itemStyles,
      'border-govuk-link group-data-inverse/service-nav:border-current',
      active && [
        'max-sm:-ml-govuk-3 max-sm:pl-govuk-2 max-sm:border-l-govuk-standard',
        'sm:border-b-govuk-standard sm:pb-govuk-2',
      ],
      className,
    )}
    {...props}
  />
);

const ServiceNavigationLink = ({
  className,
  children,
  ...props
}: ServiceNavigationLinkProps) => (
  <a
    className={cn(
      'text-govuk-link visited:text-govuk-link',
      'hover:text-govuk-brand-hover active:text-govuk-black',
      linkStyles,
      inverseLinkStyles,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const ServiceNavigationEnd = ({
  className,
  inline,
  ...props
}: ServiceNavigationEndProps) => (
  <div
    className={cn(
      inline ? 'sm:ml-auto sm:pl-govuk-6' : 'w-full',
      '*:mt-govuk-1 *:mb-govuk-3 sm:*:mt-govuk-3',
      className,
    )}
    {...props}
  />
);

export {
  ServiceNavigation as Root,
  ServiceNavigationContainer as Container,
  ServiceNavigationServiceName as ServiceName,
  ServiceNavigationNav as Nav,
  ServiceNavigationItem as Item,
  ServiceNavigationLink as Link,
  ServiceNavigationEnd as End,
  type ServiceNavigationProps as RootProps,
  type ServiceNavigationContainerProps as ContainerProps,
  type ServiceNavigationServiceNameProps as ServiceNameProps,
  type ServiceNavigationNavProps as NavProps,
  type ServiceNavigationItemProps as ItemProps,
  type ServiceNavigationLinkProps as LinkProps,
  type ServiceNavigationEndProps as EndProps,
};
