import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel, PanelTitle, PanelBody, PanelActions } from '@/ui/panel';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

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

export const Interruption: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interruption panel (GOV.UK Frontend 6.4). Use it on an interruption page to warn users before they do something unusual or that cannot be undone.',
      },
    },
  },
  render: () => (
    <Panel variant='interruption'>
      <PanelTitle>Are you sure you want to delete this application?</PanelTitle>
      <PanelBody>
        <p className='mt-0 mb-govuk-4'>
          You will not be able to get it back. Any answers you have given will
          be lost.
        </p>
      </PanelBody>
      <PanelActions>
        <Button variant='inverse'>Delete application</Button>
        <Link variant='inverse' href='#'>
          Cancel
        </Link>
      </PanelActions>
    </Panel>
  ),
};
