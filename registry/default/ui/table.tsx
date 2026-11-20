import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tableCaptionVariants = cva('font-bold table-caption text-left', {
  variants: {
    size: {
      m: 'text-govuk-heading-m mb-govuk-3',
      l: 'text-govuk-heading-l mb-govuk-3',
      xl: 'text-govuk-heading-xl mb-govuk-3',
    },
  },
});

type TableCaptionSize = NonNullable<
  VariantProps<typeof tableCaptionVariants>['size']
>;

interface TableProps extends React.ComponentProps<'table'> {
  smallTextUntilTablet?: boolean;
}

interface TableContainerProps extends React.ComponentProps<'div'> {
  label?: string;
}

type TableCaptionProps = React.ComponentProps<'caption'> &
  VariantProps<typeof tableCaptionVariants>;

type TableHeadProps = React.ComponentProps<'thead'>;

type TableBodyProps = React.ComponentProps<'tbody'>;

type TableRowProps = React.ComponentProps<'tr'>;

interface TableHeaderProps extends React.ComponentProps<'th'> {
  numeric?: boolean;
}

interface TableCellProps extends React.ComponentProps<'td'> {
  numeric?: boolean;
}

const Table = ({ className, smallTextUntilTablet, ...props }: TableProps) => (
  <table
    className={cn(
      'w-full mb-govuk-r6 border-spacing-0 border-collapse',
      'font-govuk text-govuk-body text-govuk-black',
      smallTextUntilTablet && 'max-sm:text-govuk-body-small',
      className,
    )}
    {...props}
  />
);

const TableContainer = ({
  className,
  label = 'Table',
  ...props
}: TableContainerProps) => (
  <div
    role='region'
    aria-label={label}
    tabIndex={0}
    className={cn(
      'overflow-x-auto',
      'focus-visible:outline-3 focus-visible:outline-govuk-yellow focus-visible:outline-offset-0',
      className,
    )}
    {...props}
  />
);

const TableCaption = ({ className, size, ...props }: TableCaptionProps) => (
  <caption
    className={cn('font-govuk', tableCaptionVariants({ size }), className)}
    {...props}
  />
);

const TableHead = (props: TableHeadProps) => <thead {...props} />;

const TableBody = (props: TableBodyProps) => <tbody {...props} />;

const TableRow = (props: TableRowProps) => <tr {...props} />;

const TableHeader = ({ className, numeric, ...props }: TableHeaderProps) => (
  <th
    className={cn(
      'govuk-table-cell font-bold',
      numeric && 'text-right tabular-nums',
      className,
    )}
    {...props}
  />
);

const TableCell = ({ className, numeric, ...props }: TableCellProps) => (
  <td
    className={cn(
      'govuk-table-cell',
      numeric && 'text-right tabular-nums',
      className,
    )}
    {...props}
  />
);

export {
  Table as Root,
  TableContainer as Container,
  TableCaption as Caption,
  tableCaptionVariants as captionVariants,
  TableHead as Head,
  TableBody as Body,
  TableRow as Row,
  TableHeader as Header,
  TableCell as Cell,
  type TableProps as RootProps,
  type TableContainerProps as ContainerProps,
  type TableCaptionProps as CaptionProps,
  type TableCaptionSize as CaptionSize,
  type TableHeadProps as HeadProps,
  type TableBodyProps as BodyProps,
  type TableRowProps as RowProps,
  type TableHeaderProps as HeaderProps,
  type TableCellProps as CellProps,
};
