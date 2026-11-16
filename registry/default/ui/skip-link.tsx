'use client';

import { cn } from '@/lib/utils';

type SkipLinkProps = React.ComponentProps<'a'>;

const SkipLink = ({
  className,
  children = 'Skip to main content',
  onClick,
  ...props
}: SkipLinkProps) => (
  <a
    href='#main-content'
    className={cn(
      'govuk-skip-link',
      'font-govuk text-govuk-header leading-tight',
      'block py-govuk-2 px-govuk-3',
      'text-govuk-black underline govuk-link-underline',
      className,
    )}
    onClick={(event) => {
      onClick?.(event);
      const { hash, pathname } = event.currentTarget;
      const target =
        hash && pathname === globalThis.location.pathname
          ? document.getElementById(decodeURIComponent(hash.slice(1)))
          : null;
      if (!target) return;
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
        target.style.outline = 'none';
        target.addEventListener(
          'blur',
          () => {
            target.removeAttribute('tabindex');
            target.style.removeProperty('outline');
          },
          { once: true },
        );
      }
      target.focus();
    }}
    {...props}
  >
    {children}
  </a>
);

export { SkipLink, type SkipLinkProps };
