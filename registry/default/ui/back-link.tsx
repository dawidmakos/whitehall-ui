import { cn } from '@/lib/utils';

interface BackLinkProps extends React.ComponentProps<'a'> {
  inverse?: boolean;
}

const BackLink = ({
  className,
  inverse,
  children = 'Back',
  ...props
}: BackLinkProps) => (
  <a
    className={cn(
      'relative font-govuk text-govuk-header leading-tight',
      'inline-flex items-center gap-govuk-1',
      'my-govuk-3',
      'underline govuk-link-underline',
      'hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
      'after:absolute after:inset-x-0 after:-top-govuk-3 after:-bottom-govuk-3',
      inverse
        ? [
            'text-white visited:text-white',
            'hover:text-white active:text-white',
          ]
        : [
            'text-govuk-black visited:text-govuk-black',
            'hover:text-govuk-black active:text-govuk-black',
          ],
      className,
    )}
    {...props}
  >
    <svg
      className={cn(
        'shrink-0',
        inverse
          ? 'text-current'
          : 'text-govuk-dark-grey [a:focus_&]:text-govuk-black',
      )}
      xmlns='http://www.w3.org/2000/svg'
      width='7'
      height='11'
      viewBox='0 0 7 11'
      fill='none'
      aria-hidden='true'
      focusable='false'
    >
      <path d='M6 1L1.5 5.5L6 10' stroke='currentColor' strokeWidth='1.5' />
    </svg>
    {children}
  </a>
);

export { BackLink, type BackLinkProps };
