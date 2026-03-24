import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackLink } from '@/ui/back-link';

const meta = {
  title: 'Whitehall-UI/BackLink',
  component: BackLink,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI back link component. Based on the [GOV.UK Design System Back link](https://design-system.service.gov.uk/components/back-link/). Place at the top of a page, before the main element, to help users navigate back in a multi-page transaction.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
  },
};

export const CustomText: Story = {
  args: {
    href: '#',
    children: 'Go back to dashboard',
  },
};

export const Inverse: Story = {
  args: {
    href: '#',
    inverse: true,
  },
  decorators: [
    (Story) => (
      <div className='bg-govuk-brand p-govuk-4'>
        <Story />
      </div>
    ),
  ],
};
