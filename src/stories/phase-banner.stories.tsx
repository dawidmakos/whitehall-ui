import type { Meta, StoryObj } from '@storybook/react-vite';
import * as PhaseBanner from '@/ui/phase-banner';
import { Tag } from '@/ui/tag';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/PhaseBanner',
  component: PhaseBanner.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI phase banner component. Based on the [GOV.UK Design System Phase banner](https://design-system.service.gov.uk/components/phase-banner/). Use to show users your service is still being worked on.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhaseBanner.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alpha: Story = {
  render: () => (
    <PhaseBanner.Root>
      <PhaseBanner.Content>
        <PhaseBanner.Tag>
          <Tag>Alpha</Tag>
        </PhaseBanner.Tag>
        <PhaseBanner.Text>
          This is a new service. Help us improve it and{' '}
          <Link href='#'>give your feedback by email</Link>.
        </PhaseBanner.Text>
      </PhaseBanner.Content>
    </PhaseBanner.Root>
  ),
};

export const Beta: Story = {
  render: () => (
    <PhaseBanner.Root>
      <PhaseBanner.Content>
        <PhaseBanner.Tag>
          <Tag>Beta</Tag>
        </PhaseBanner.Tag>
        <PhaseBanner.Text>
          This is a new service. Help us improve it and{' '}
          <Link href='#'>give your feedback (opens in new tab)</Link>.
        </PhaseBanner.Text>
      </PhaseBanner.Content>
    </PhaseBanner.Root>
  ),
};
