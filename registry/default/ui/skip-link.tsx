import { cn } from '@/lib/utils';

interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
}

const SkipLink = ({
  className,
  ref,
  children = 'Skip to main content',
  href = '#main-content',
  ...props
}: SkipLinkProps) => (
  <a
    ref={ref}
    href={href}
    className={cn(
      'govuk-skip-link',
      'font-govuk text-govuk-header leading-tight',
      'block py-govuk-2 px-govuk-3',
      'text-govuk-black no-underline',
      className,
    )}
    {...props}
  >
    {children}
  </a>
);

export { SkipLink, type SkipLinkProps };
