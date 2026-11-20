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

const FooterContentLicence = ({
  className,
  ...props
}: FooterContentLicenceProps) => (
  <span className={cn('inline-block text-balance', className)} {...props} />
);

export {
  Footer as Root,
  FooterContainer as Container,
  FooterNavigation as Navigation,
  FooterSection as Section,
  FooterHeading as Heading,
  FooterList as List,
  FooterListItem as ListItem,
  FooterLink as Link,
  FooterSectionBreak as SectionBreak,
  FooterMeta as Meta,
  FooterMetaItem as MetaItem,
  FooterInlineList as InlineList,
  FooterInlineListItem as InlineListItem,
  FooterContentLicence as ContentLicence,
  type FooterProps as RootProps,
  type FooterContainerProps as ContainerProps,
  type FooterNavigationProps as NavigationProps,
  type FooterSectionProps as SectionProps,
  type FooterHeadingProps as HeadingProps,
  type FooterListProps as ListProps,
  type FooterListItemProps as ListItemProps,
  type FooterLinkProps as LinkProps,
  type FooterMetaProps as MetaProps,
  type FooterMetaItemProps as MetaItemProps,
  type FooterInlineListProps as InlineListProps,
  type FooterInlineListItemProps as InlineListItemProps,
  type FooterContentLicenceProps as ContentLicenceProps,
};
