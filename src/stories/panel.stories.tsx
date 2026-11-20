import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Panel from '@/ui/panel';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/Panel',
  component: Panel.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI panel component. Based on the [GOV.UK Design System Panel](https://design-system.service.gov.uk/components/panel/). Used on confirmation pages to tell the user a transaction has been completed.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Panel.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel.Root>
      <Panel.Title>Application complete</Panel.Title>
      <Panel.Body>
        Your reference number
        <br />
        <strong>HDJ2123F</strong>
      </Panel.Body>
    </Panel.Root>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Panel.Root>
      <Panel.Title>Application complete</Panel.Title>
    </Panel.Root>
  ),
};

export const WithLongReference: Story = {
  render: () => (
    <Panel.Root>
      <Panel.Title>Payment confirmed</Panel.Title>
      <Panel.Body>
        Your reference number
        <br />
        <strong>ABCD-1234-EFGH-5678</strong>
      </Panel.Body>
    </Panel.Root>
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
    <Panel.Root>
      <Panel.Title>Application complete</Panel.Title>
      <Panel.Body>
        Your reference number
        <br />
        <strong>HDJ2123F0000111122223333444455556666</strong>
      </Panel.Body>
    </Panel.Root>
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
    <Panel.Root variant='interruption'>
      <Panel.Title>Are you sure you want to delete this application?</Panel.Title>
      <Panel.Body>
        <p className='mt-0 mb-govuk-4'>
          You will not be able to get it back. Any answers you have given will
          be lost.
        </p>
      </Panel.Body>
      <Panel.Actions>
        <Button variant='inverse'>Delete application</Button>
        <Link variant='inverse' href='#'>
          Cancel
        </Link>
      </Panel.Actions>
    </Panel.Root>
  ),
};

export const InterruptionWithContent: Story = {
  render: () => (
    <Panel.Root variant='interruption'>
      <Panel.Title>
        Your new answer affects other sections of this application
      </Panel.Title>
      <Panel.Body>
        <h2 className='text-govuk-heading-m font-bold mt-0 mb-govuk-4'>
          Question: Where is Andy Cooke located?
        </h2>
        <p className='mt-0 mb-govuk-4'>
          Previous answer: Custody
          <br />
          New answer: Released
        </p>
        <p className='mt-0 mb-govuk-2'>You need to:</p>
        <ul className='mt-0 mb-govuk-4 pl-govuk-4 list-disc'>
          <li className='mb-govuk-1'>enter their custody information</li>
          <li className='mb-govuk-1'>update the licence conditions section</li>
        </ul>
      </Panel.Body>
      <Panel.Actions>
        <Button variant='inverse'>Continue to other sections</Button>
        <Link variant='inverse' href='#'>
          Go back to application
        </Link>
      </Panel.Actions>
    </Panel.Root>
  ),
};
