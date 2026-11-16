import { cn } from '@/lib/utils';

const footerSectionWidths = {
  full: 'w-full',
  'one-half': 'sm:inline-block sm:w-1/2 sm:align-top',
  'one-third': 'sm:inline-block sm:w-1/3 sm:align-top',
  'two-thirds': 'sm:inline-block sm:w-2/3 sm:align-top',
};

type FooterProps = React.ComponentProps<'footer'>;

interface FooterContainerProps extends React.ComponentProps<'div'> {
  fullWidth?: boolean;
}

type FooterCrownProps = React.ComponentProps<'svg'>;

type FooterNavigationProps = React.ComponentProps<'div'>;

interface FooterSectionProps extends React.ComponentProps<'div'> {
  width?: keyof typeof footerSectionWidths;
}

type FooterHeadingProps = React.ComponentProps<'h2'>;

interface FooterListProps extends React.ComponentProps<'ul'> {
  columns?: 1 | 2 | 3;
}

type FooterListItemProps = React.ComponentProps<'li'>;

type FooterLinkProps = React.ComponentProps<'a'>;

type FooterMetaProps = React.ComponentProps<'div'>;

interface FooterMetaItemProps extends React.ComponentProps<'div'> {
  grow?: boolean;
}

type FooterInlineListProps = React.ComponentProps<'ul'>;

type FooterInlineListItemProps = React.ComponentProps<'li'>;

type FooterLicenceLogoProps = React.ComponentProps<'svg'>;

type FooterContentLicenceProps = React.ComponentProps<'span'>;

const footerLinkStyles = [
  'underline govuk-link-underline',
  'text-govuk-link visited:text-govuk-visited',
  'hover:text-govuk-brand-hover hover:govuk-link-underline-hover',
  'active:text-govuk-black',
  'focus:govuk-link-focus',
];

const Footer = ({ className, ...props }: FooterProps) => (
  <footer
    className={cn(
      'font-govuk text-govuk-body text-govuk-black',
      'border-t-govuk-wide border-t-govuk-brand',
      'pt-govuk-5 sm:pt-govuk-7 pb-govuk-3 sm:pb-govuk-5',
      'bg-govuk-surface',
      'print:border-t-current print:bg-transparent',
      className,
    )}
    {...props}
  />
);

const FooterContainer = ({
  className,
  fullWidth,
  ...props
}: FooterContainerProps) => (
  <div
    className={cn(
      fullWidth ? 'px-govuk-3' : 'govuk-width-container',
      className,
    )}
    {...props}
  />
);

const FooterCrown = ({ className, ...props }: FooterCrownProps) => (
  <svg
    focusable='false'
    role='presentation'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 64 60'
    height='30'
    width='32'
    fill='currentcolor'
    className={cn('block mb-govuk-5', className)}
    {...props}
  >
    <g>
      <circle cx='20' cy='17.6' r='3.7' />
      <circle cx='10.2' cy='23.5' r='3.7' />
      <circle cx='3.7' cy='33.2' r='3.7' />
      <circle cx='31.7' cy='30.6' r='3.7' />
      <circle cx='43.3' cy='17.6' r='3.7' />
      <circle cx='53.2' cy='23.5' r='3.7' />
      <circle cx='59.7' cy='33.2' r='3.7' />
      <circle cx='31.7' cy='30.6' r='3.7' />
      <path d='M33.1,9.8c.2-.1.3-.3.5-.5l4.6,2.4v-6.8l-4.6,1.5c-.1-.2-.3-.3-.5-.5l1.9-5.9h-6.7l1.9,5.9c-.2.1-.3.3-.5.5l-4.6-1.5v6.8l4.6-2.4c.1.2.3.3.5.5l-2.6,8c-.9,2.8,1.2,5.7,4.1,5.7h0c3,0,5.1-2.9,4.1-5.7l-2.6-8ZM37,37.9s-3.4,3.8-4.1,6.1c2.2,0,4.2-.5,6.4-2.8l-.7,8.5c-2-2.8-4.4-4.1-5.7-3.8.1,3.1.5,6.7,5.8,7.2,3.7.3,6.7-1.5,7-3.8.4-2.6-2-4.3-3.7-1.6-1.4-4.5,2.4-6.1,4.9-3.2-1.9-4.5-1.8-7.7,2.4-10.9,3,4,2.6,7.3-1.2,11.1,2.4-1.3,6.2,0,4,4.6-1.2-2.8-3.7-2.2-4.2.2-.3,1.7.7,3.7,3,4.2,1.9.3,4.7-.9,7-5.9-1.3,0-2.4.7-3.9,1.7l2.4-8c.6,2.3,1.4,3.7,2.2,4.5.6-1.6.5-2.8,0-5.3l5,1.8c-2.6,3.6-5.2,8.7-7.3,17.5-7.4-1.1-15.7-1.7-24.5-1.7h0c-8.8,0-17.1.6-24.5,1.7-2.1-8.9-4.7-13.9-7.3-17.5l5-1.8c-.5,2.5-.6,3.7,0,5.3.8-.8,1.6-2.3,2.2-4.5l2.4,8c-1.5-1-2.6-1.7-3.9-1.7,2.3,5,5.2,6.2,7,5.9,2.3-.4,3.3-2.4,3-4.2-.5-2.4-3-3.1-4.2-.2-2.2-4.6,1.6-6,4-4.6-3.7-3.7-4.2-7.1-1.2-11.1,4.2,3.2,4.3,6.4,2.4,10.9,2.5-2.8,6.3-1.3,4.9,3.2-1.8-2.7-4.1-1-3.7,1.6.3,2.3,3.3,4.1,7,3.8,5.4-.5,5.7-4.2,5.8-7.2-1.3-.2-3.7,1-5.7,3.8l-.7-8.5c2.2,2.3,4.2,2.7,6.4,2.8-.7-2.3-4.1-6.1-4.1-6.1h10.6,0Z' />
    </g>
  </svg>
);

const FooterNavigation = ({ className, ...props }: FooterNavigationProps) => (
  <div className={cn('-mx-govuk-3', className)} {...props} />
);

const FooterSection = ({
  className,
  width = 'full',
  ...props
}: FooterSectionProps) => (
  <div
    className={cn(
      footerSectionWidths[width],
      'px-govuk-3 mb-govuk-6',
      className,
    )}
    {...props}
  />
);

const FooterHeading = ({
  className,
  children,
  ...props
}: FooterHeadingProps) => (
  <h2
    className={cn(
      'text-govuk-heading-m font-bold text-govuk-black',
      'mb-govuk-6 pb-govuk-2 sm:pb-govuk-4',
      'border-b border-govuk-surface-border',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

const FooterList = ({ className, columns = 1, ...props }: FooterListProps) => (
  <ul
    className={cn(
      'list-none m-0 p-0',
      'gap-x-govuk-6',
      columns === 2 && 'md:columns-2',
      columns === 3 && 'md:columns-3',
      className,
    )}
    {...props}
  />
);

const FooterListItem = ({ className, ...props }: FooterListItemProps) => (
  <li
    className={cn('mb-govuk-3 sm:mb-govuk-4', 'last:mb-0', className)}
    {...props}
  />
);

const FooterLink = ({ className, children, ...props }: FooterLinkProps) => (
  <a className={cn(footerLinkStyles, className)} {...props}>
    {children}
  </a>
);

const FooterSectionBreak = () => (
  <hr className='m-0 mb-govuk-6 sm:mb-govuk-8 border-0 border-b border-govuk-surface-border' />
);

const FooterMeta = ({ className, ...props }: FooterMetaProps) => (
  <div
    className={cn(
      'flex flex-wrap items-end justify-center -mx-govuk-3',
      className,
    )}
    {...props}
  />
);

const FooterMetaItem = ({ className, grow, ...props }: FooterMetaItemProps) => (
  <div
    className={cn(
      'mx-govuk-3 mb-govuk-5',
      grow && 'flex-1 max-sm:basis-80',
      className,
    )}
    {...props}
  />
);

const FooterInlineList = ({ className, ...props }: FooterInlineListProps) => (
  <ul
    className={cn('list-none m-0 mb-govuk-3 p-0', 'last:mb-0', className)}
    {...props}
  />
);

const FooterInlineListItem = ({
  className,
  ...props
}: FooterInlineListItemProps) => (
  <li
    className={cn('inline-block mr-govuk-3 mb-govuk-1', className)}
    {...props}
  />
);

const FooterLicenceLogo = ({ className, ...props }: FooterLicenceLogoProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 483.2 195.7'
    height='17'
    width='41'
    className={cn('inline-block align-top mr-govuk-2 max-md:mb-govuk-3', className)}
    {...props}
  >
    <path
      fill='currentColor'
      d='M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145'
    />
  </svg>
);

const FooterContentLicence = ({
  className,
  ...props
}: FooterContentLicenceProps) => (
  <span className={cn('inline-block text-balance', className)} {...props} />
);

export {
  Footer,
  FooterContainer,
  FooterCrown,
  FooterNavigation,
  FooterSection,
  FooterHeading,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterSectionBreak,
  FooterMeta,
  FooterMetaItem,
  FooterInlineList,
  FooterInlineListItem,
  FooterLicenceLogo,
  FooterContentLicence,
  type FooterProps,
  type FooterContainerProps,
  type FooterCrownProps,
  type FooterNavigationProps,
  type FooterSectionProps,
  type FooterHeadingProps,
  type FooterListProps,
  type FooterListItemProps,
  type FooterLinkProps,
  type FooterMetaProps,
  type FooterMetaItemProps,
  type FooterInlineListProps,
  type FooterInlineListItemProps,
  type FooterLicenceLogoProps,
  type FooterContentLicenceProps,
};
