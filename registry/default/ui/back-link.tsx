import { cn } from '@/lib/utils';

interface BackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: React.Ref<HTMLAnchorElement>;
  inverse?: boolean;
}

const BackLink = ({
  className,
  inverse,
  ref,
  children = 'Back',
  ...props
}: BackLinkProps) => (
  <a
    ref={ref}
    className={cn(
      'font-govuk text-govuk-header leading-tight',
      'inline-flex items-center gap-govuk-1',
      'my-govuk-3',
      'underline govuk-link-underline',
      'hover:govuk-link-underline-hover',
      'focus:govuk-link-focus',
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
      className='shrink-0'
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
