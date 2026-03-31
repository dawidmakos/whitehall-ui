import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Table,
  TableCaption,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from '@/ui/table';

const meta = {
  title: 'Whitehall-UI/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI table component. Based on the [GOV.UK Design System Table](https://design-system.service.gov.uk/components/table/). Used to make information easier to compare and scan for users.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Date</TableHeader>
          <TableHeader>Amount</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>First 6 weeks</TableCell>
          <TableCell>£109.80 per week</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Next 33 weeks</TableCell>
          <TableCell>£109.80 per week</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total estimated pay</TableCell>
          <TableCell>£4,282.20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption size='m'>Dates and amounts</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Date</TableHeader>
          <TableHeader>Amount</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>First 6 weeks</TableCell>
          <TableCell>£109.80 per week</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Next 33 weeks</TableCell>
          <TableCell>£109.80 per week</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total estimated pay</TableCell>
          <TableCell>£4,282.20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithNumericValues: Story = {
  render: () => (
    <Table>
      <TableCaption size='m'>Months and rates</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Month</TableHeader>
          <TableHeader numeric>Rate for vehicles</TableHeader>
          <TableHeader numeric>Rate for bicycles</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>January</TableCell>
          <TableCell numeric>£165.00</TableCell>
          <TableCell numeric>£85.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>February</TableCell>
          <TableCell numeric>£165.00</TableCell>
          <TableCell numeric>£85.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>March</TableCell>
          <TableCell numeric>£151.00</TableCell>
          <TableCell numeric>£77.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithRowHeaders: Story = {
  render: () => (
    <Table>
      <TableCaption size='m'>Cases opened and closed per month</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Case manager</TableHeader>
          <TableHeader numeric>Cases opened</TableHeader>
          <TableHeader numeric>Cases closed</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableHeader scope='row'>David Francis</TableHeader>
          <TableCell numeric>98</TableCell>
          <TableCell numeric>95</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope='row'>Paul Farmer</TableHeader>
          <TableCell numeric>122</TableCell>
          <TableCell numeric>131</TableCell>
        </TableRow>
        <TableRow>
          <TableHeader scope='row'>Rita Patel</TableHeader>
          <TableCell numeric>126</TableCell>
          <TableCell numeric>142</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
