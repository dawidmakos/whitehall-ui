import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel, PanelTitle, PanelBody } from '@/ui/panel';

const meta = {
  title: 'Whitehall-UI/Panel',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI panel component. Based on the [GOV.UK Design System Panel](https://design-system.service.gov.uk/components/panel/). Used on confirmation pages to tell the user a transaction has been completed.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel>
      <PanelTitle>Application complete</PanelTitle>
      <PanelBody>
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </PanelBody>
    </Panel>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Panel>
      <PanelTitle>Application complete</PanelTitle>
    </Panel>
  ),
};

export const WithLongReference: Story = {
  render: () => (
    <Panel>
      <PanelTitle>Payment confirmed</PanelTitle>
      <PanelBody>
        Your reference number
        <br />
        <strong>ABCD-1234-EFGH-5678</strong>
      </PanelBody>
    </Panel>
  ),
};

export const Mobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Pinned to a 320px viewport. The heading drops from 48px to 32px via the responsive type scale, and an unbroken reference number wraps inside the panel rather than overflowing it.',
      },
    },
  },
  globals: {
    viewport: { value: 'govukMobileSmall' },
  },
  render: () => (
    <Panel>
      <PanelTitle>Application complete</PanelTitle>
      <PanelBody>
        Your reference number
        <br />
        <strong>HDJ2123F0000111122223333444455556666</strong>
      </PanelBody>
    </Panel>
  ),
};
