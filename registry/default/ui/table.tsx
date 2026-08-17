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

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<HTMLTableElement>;
  smallTextUntilTablet?: boolean;
}

interface TableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  label?: string;
}

interface TableCaptionProps
  extends
    React.HTMLAttributes<HTMLTableCaptionElement>,
    VariantProps<typeof tableCaptionVariants> {
  ref?: React.Ref<HTMLTableCaptionElement>;
}

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLTableSectionElement>;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLTableSectionElement>;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  ref?: React.Ref<HTMLTableRowElement>;
}

interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  ref?: React.Ref<HTMLTableCellElement>;
  numeric?: boolean;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  ref?: React.Ref<HTMLTableCellElement>;
  numeric?: boolean;
}

const Table = ({
  className,
  ref,
  children,
  smallTextUntilTablet,
  ...props
}: TableProps) => (
  <table
    ref={ref}
    className={cn(
      'w-full mb-govuk-6 border-spacing-0 border-collapse',
      'font-govuk text-govuk-body text-govuk-black',
      smallTextUntilTablet && 'max-sm:text-govuk-body-small',
      className,
    )}
    {...props}
  >
    {children}
  </table>
);

const TableContainer = ({
  className,
  ref,
  children,
  label = 'Table',
  ...props
}: TableContainerProps) => (
  <div
    ref={ref}
    role='region'
    aria-label={label}
    tabIndex={0}
    className={cn(
      'overflow-x-auto',
      'focus-visible:outline-3 focus-visible:outline-govuk-yellow focus-visible:outline-offset-0',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const TableCaption = ({
  className,
  ref,
  children,
  size,
  ...props
}: TableCaptionProps) => (
  <caption
    ref={ref}
    className={cn(
      'font-govuk font-bold table-caption text-left',
      tableCaptionVariants({ size }),
      className,
    )}
    {...props}
  >
    {children}
  </caption>
);

const TableHead = ({ className, ref, children, ...props }: TableHeadProps) => (
  <thead ref={ref} className={cn(className)} {...props}>
    {children}
  </thead>
);

const TableBody = ({ className, ref, children, ...props }: TableBodyProps) => (
  <tbody ref={ref} className={cn(className)} {...props}>
    {children}
  </tbody>
);

const TableRow = ({ className, ref, children, ...props }: TableRowProps) => (
  <tr ref={ref} className={cn(className)} {...props}>
    {children}
  </tr>
);

const TableHeader = ({
  className,
  ref,
  children,
  numeric,
  ...props
}: TableHeaderProps) => (
  <th
    ref={ref}
    className={cn(
      'govuk-table-cell font-bold',
      numeric && 'text-right tabular-nums',
      className,
    )}
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({
  className,
  ref,
  children,
  numeric,
  ...props
}: TableCellProps) => (
  <td
    ref={ref}
    className={cn(
      'govuk-table-cell',
      numeric && 'text-right tabular-nums',
      className,
    )}
    {...props}
  >
    {children}
  </td>
);

export {
  Table,
  TableContainer,
  TableCaption,
  tableCaptionVariants,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
};
export type {
  TableProps,
  TableContainerProps,
  TableCaptionProps,
  TableCaptionSize,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableHeaderProps,
  TableCellProps,
};
