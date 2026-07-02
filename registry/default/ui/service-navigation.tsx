import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceNavigationProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

interface ServiceNavigationContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

interface ServiceNavigationServiceNameProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

interface ServiceNavigationNavProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
  menuButtonText?: string;
}

interface ServiceNavigationItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<HTMLLIElement>;
  active?: boolean;
}

interface ServiceNavigationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const serviceNavigationLinkStyles = [
  'font-govuk cursor-pointer',
  'no-underline hover:underline',
  'hover:govuk-link-underline hover:govuk-link-underline-hover',
  'focus:govuk-link-focus',
];

const itemStyles = [
  'relative my-govuk-2',
  'sm:my-0 sm:inline-block sm:py-govuk-3',
  'sm:not-last:mr-govuk-6',
];

const ServiceNavigation = ({
  className,
  ref,
  children,
  ...props
}: ServiceNavigationProps) => (
  <section
    ref={ref}
    aria-label={props['aria-label'] ?? 'Service information'}
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'border-b border-b-govuk-mid-grey',
      'bg-govuk-light-grey',
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

const ServiceNavigationContainer = ({
  className,
  ref,
  children,
  ...props
}: ServiceNavigationContainerProps) => (
  <div
    ref={ref}
    className={cn(
      'max-w-240 mx-auto px-govuk-3',
      'flex flex-col items-start',
      'sm:flex-row sm:flex-wrap',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const ServiceNavigationServiceName = ({
  className,
  ref,
  children,
  ...props
}: ServiceNavigationServiceNameProps) => (
  <a
    ref={ref}
    className={cn(
      itemStyles,
      'font-bold',
      'text-govuk-black visited:text-govuk-black hover:text-govuk-black',
      serviceNavigationLinkStyles,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

const ServiceNavigationNav = ({
  className,
  ref,
  children,
  menuButtonText = 'Menu',
  ...props
}: ServiceNavigationNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const listId = useId();

  return (
    <nav
      ref={ref}
      aria-label={props['aria-label'] ?? menuButtonText}
      className={cn('max-sm:w-full sm:grow', className)}
      {...props}
    >
      <button
        type='button'
        className={cn(
          'sm:hidden inline-flex items-center gap-govuk-1',
          'my-govuk-2 p-0',
          'font-govuk text-govuk-body font-bold',
          'bg-transparent border-0 text-govuk-brand cursor-pointer',
          'hover:underline focus:govuk-link-focus',
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
          menuOpen ? 'max-sm:block' : 'max-sm:hidden',
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
  ref,
  children,
  ...props
}: ServiceNavigationItemProps) => (
  <li
    ref={ref}
    className={cn(
      itemStyles,
      'border-govuk-brand',
      active && [
        'max-sm:-ml-govuk-3 max-sm:pl-govuk-2 max-sm:border-l-govuk-standard',
        'sm:border-b-govuk-standard sm:pb-govuk-2',
      ],
      className,
    )}
    {...props}
  >
    {children}
  </li>
);

const ServiceNavigationLink = ({
  className,
  ref,
  children,
  ...props
}: ServiceNavigationLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'text-govuk-brand visited:text-govuk-brand hover:text-govuk-brand-hover',
      serviceNavigationLinkStyles,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export {
  ServiceNavigation,
  ServiceNavigationContainer,
  ServiceNavigationServiceName,
  ServiceNavigationNav,
  ServiceNavigationItem,
  ServiceNavigationLink,
  type ServiceNavigationProps,
  type ServiceNavigationContainerProps,
  type ServiceNavigationServiceNameProps,
  type ServiceNavigationNavProps,
  type ServiceNavigationItemProps,
  type ServiceNavigationLinkProps,
};
