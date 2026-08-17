import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Table,
  TableContainer,
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

export const SmallTextUntilTablet: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Mirrors GOV.UK\u2019s `govuk-table--small-text-until-tablet`. Reduces cell text to 16px below the tablet breakpoint so dense data has more room to breathe.',
      },
    },
  },
  globals: {
    viewport: { value: 'govukMobileSmall' },
  },
  render: () => (
    <Table smallTextUntilTablet>
      <TableCaption size='m'>Cases by manager</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeader>Case manager</TableHeader>
          <TableHeader numeric>Opened</TableHeader>
          <TableHeader numeric>Closed</TableHeader>
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

export const ScrollableOnMobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wrapping a wide table in `TableContainer` keeps it inside the page instead of forcing the whole layout sideways. The container is a focusable region, so keyboard users can scroll it without a pointer.',
      },
    },
  },
  globals: {
    viewport: { value: 'govukMobileSmall' },
  },
  render: () => (
    <TableContainer label='Monthly case statistics'>
      <Table smallTextUntilTablet>
        <TableCaption size='m'>Monthly case statistics</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Case manager</TableHeader>
            <TableHeader numeric>January</TableHeader>
            <TableHeader numeric>February</TableHeader>
            <TableHeader numeric>March</TableHeader>
            <TableHeader numeric>April</TableHeader>
            <TableHeader numeric>May</TableHeader>
            <TableHeader numeric>June</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader scope='row'>David Francis</TableHeader>
            <TableCell numeric>98</TableCell>
            <TableCell numeric>95</TableCell>
            <TableCell numeric>112</TableCell>
            <TableCell numeric>104</TableCell>
            <TableCell numeric>121</TableCell>
            <TableCell numeric>118</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope='row'>Paul Farmer</TableHeader>
            <TableCell numeric>122</TableCell>
            <TableCell numeric>131</TableCell>
            <TableCell numeric>127</TableCell>
            <TableCell numeric>140</TableCell>
            <TableCell numeric>135</TableCell>
            <TableCell numeric>129</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader scope='row'>Rita Patel</TableHeader>
            <TableCell numeric>126</TableCell>
            <TableCell numeric>142</TableCell>
            <TableCell numeric>138</TableCell>
            <TableCell numeric>151</TableCell>
            <TableCell numeric>147</TableCell>
            <TableCell numeric>144</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
