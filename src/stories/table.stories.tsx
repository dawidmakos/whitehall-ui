import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Table from '@/ui/table';

const meta = {
  title: 'Whitehall-UI/Table',
  component: Table.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI table component. Based on the [GOV.UK Design System Table](https://design-system.service.gov.uk/components/table/). Used to make information easier to compare and scan for users.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.Header scope='col'>Date</Table.Header>
          <Table.Header scope='col'>Amount</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>First 6 weeks</Table.Cell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Next 33 weeks</Table.Cell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total estimated pay</Table.Cell>
          <Table.Cell>£4,282.20</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption size='m'>Dates and amounts</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope='col'>Date</Table.Header>
          <Table.Header scope='col'>Amount</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>First 6 weeks</Table.Cell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Next 33 weeks</Table.Cell>
          <Table.Cell>£109.80 per week</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Total estimated pay</Table.Cell>
          <Table.Cell>£4,282.20</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const WithNumericValues: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption size='m'>Months and rates</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope='col'>Month</Table.Header>
          <Table.Header scope='col' numeric>Rate for vehicles</Table.Header>
          <Table.Header scope='col' numeric>Rate for bicycles</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>January</Table.Cell>
          <Table.Cell numeric>£165.00</Table.Cell>
          <Table.Cell numeric>£85.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>February</Table.Cell>
          <Table.Cell numeric>£165.00</Table.Cell>
          <Table.Cell numeric>£85.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>March</Table.Cell>
          <Table.Cell numeric>£151.00</Table.Cell>
          <Table.Cell numeric>£77.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const WithRowHeaders: Story = {
  render: () => (
    <Table.Root>
      <Table.Caption size='m'>Cases opened and closed per month</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope='col'>Case manager</Table.Header>
          <Table.Header scope='col' numeric>Cases opened</Table.Header>
          <Table.Header scope='col' numeric>Cases closed</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Header scope='row'>David Francis</Table.Header>
          <Table.Cell numeric>98</Table.Cell>
          <Table.Cell numeric>95</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header scope='row'>Paul Farmer</Table.Header>
          <Table.Cell numeric>122</Table.Cell>
          <Table.Cell numeric>131</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header scope='row'>Rita Patel</Table.Header>
          <Table.Cell numeric>126</Table.Cell>
          <Table.Cell numeric>142</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
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
    <Table.Root smallTextUntilTablet>
      <Table.Caption size='m'>Cases by manager</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Header scope='col'>Case manager</Table.Header>
          <Table.Header scope='col' numeric>Opened</Table.Header>
          <Table.Header scope='col' numeric>Closed</Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Header scope='row'>David Francis</Table.Header>
          <Table.Cell numeric>98</Table.Cell>
          <Table.Cell numeric>95</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header scope='row'>Paul Farmer</Table.Header>
          <Table.Cell numeric>122</Table.Cell>
          <Table.Cell numeric>131</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Header scope='row'>Rita Patel</Table.Header>
          <Table.Cell numeric>126</Table.Cell>
          <Table.Cell numeric>142</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const ScrollableOnMobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wrapping a wide table in `Table.Container` keeps it inside the page instead of forcing the whole layout sideways. The container is a focusable region, so keyboard users can scroll it without a pointer.',
      },
    },
  },
  globals: {
    viewport: { value: 'govukMobileSmall' },
  },
  render: () => (
    <Table.Container label='Monthly case statistics'>
      <Table.Root smallTextUntilTablet>
        <Table.Caption size='m'>Monthly case statistics</Table.Caption>
        <Table.Head>
          <Table.Row>
            <Table.Header scope='col'>Case manager</Table.Header>
            <Table.Header scope='col' numeric>January</Table.Header>
            <Table.Header scope='col' numeric>February</Table.Header>
            <Table.Header scope='col' numeric>March</Table.Header>
            <Table.Header scope='col' numeric>April</Table.Header>
            <Table.Header scope='col' numeric>May</Table.Header>
            <Table.Header scope='col' numeric>June</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Header scope='row'>David Francis</Table.Header>
            <Table.Cell numeric>98</Table.Cell>
            <Table.Cell numeric>95</Table.Cell>
            <Table.Cell numeric>112</Table.Cell>
            <Table.Cell numeric>104</Table.Cell>
            <Table.Cell numeric>121</Table.Cell>
            <Table.Cell numeric>118</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope='row'>Paul Farmer</Table.Header>
            <Table.Cell numeric>122</Table.Cell>
            <Table.Cell numeric>131</Table.Cell>
            <Table.Cell numeric>127</Table.Cell>
            <Table.Cell numeric>140</Table.Cell>
            <Table.Cell numeric>135</Table.Cell>
            <Table.Cell numeric>129</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Header scope='row'>Rita Patel</Table.Header>
            <Table.Cell numeric>126</Table.Cell>
            <Table.Cell numeric>142</Table.Cell>
            <Table.Cell numeric>138</Table.Cell>
            <Table.Cell numeric>151</Table.Cell>
            <Table.Cell numeric>147</Table.Cell>
            <Table.Cell numeric>144</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  ),
};
