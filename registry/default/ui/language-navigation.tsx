import { cn } from '@/lib/utils';

interface LanguageNavigationProps extends React.ComponentProps<'nav'> {
  inverse?: boolean;
}

type LanguageNavigationItemProps = React.ComponentProps<'li'>;

interface LanguageNavigationLinkProps extends React.ComponentProps<'a'> {
  lang: string;
  description?: string;
}

interface LanguageNavigationCurrentProps extends React.ComponentProps<'span'> {
  lang: string;
}

const LanguageNavigation = ({
  className,
  inverse,
  children,
  ...props
}: LanguageNavigationProps) => (
  <nav
    aria-label='Language'
    data-inverse={inverse || undefined}
    className={cn(
      'group/language font-govuk text-govuk-body mb-govuk-r6',
      inverse ? 'text-white' : 'text-govuk-black',
      className,
    )}
    {...props}
  >
    <ul className='inline-flex flex-wrap gap-y-govuk-2 m-0 p-0 list-none'>
      {children}
    </ul>
  </nav>
);

const LanguageNavigationItem = ({
  className,
  ...props
}: LanguageNavigationItemProps) => (
  <li
    className={cn(
      'flex items-center',
      'not-last:after:block not-last:after:h-[1em] not-last:after:mx-govuk-2',
      'not-last:after:border-r not-last:after:border-govuk-mid-grey',
      'group-data-[inverse]/language:not-last:after:border-current',
      className,
    )}
    {...props}
  />
);

const LanguageNavigationLink = ({
  className,
  lang,
  hrefLang = lang,
  description,
  children,
  ...props
}: LanguageNavigationLinkProps) => (
  <a
    rel='alternate'
    lang={lang}
    hrefLang={hrefLang}
    className={cn(
      'underline govuk-link-underline',
      'hover:govuk-link-underline-hover focus:govuk-link-focus',
      'text-govuk-link visited:text-govuk-visited',
      'hover:text-govuk-brand-hover active:text-govuk-black',
      'group-data-[inverse]/language:text-white',
      'group-data-[inverse]/language:visited:text-white',
      'group-data-[inverse]/language:hover:text-white',
      className,
    )}
    {...props}
  >
    {children}
    {description && <span className='sr-only'> {description}</span>}
  </a>
);

const LanguageNavigationCurrent = (props: LanguageNavigationCurrentProps) => (
  <span aria-current='true' {...props} />
);

export {
  LanguageNavigation,
  LanguageNavigationItem,
  LanguageNavigationLink,
  LanguageNavigationCurrent,
  type LanguageNavigationProps,
  type LanguageNavigationItemProps,
  type LanguageNavigationLinkProps,
  type LanguageNavigationCurrentProps,
};
