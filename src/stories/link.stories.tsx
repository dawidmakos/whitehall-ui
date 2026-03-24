import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI link component. Based on the [GOV.UK Design System Links](https://design-system.service.gov.uk/styles/links/). Supports default, muted, inverse, no-underline and no-visited-state variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'inverse'],
    },
    noUnderline: { control: 'boolean' },
    noVisitedState: { control: 'boolean' },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'This is a link',
  },
};

export const Muted: Story = {
  args: {
    href: '#',
    variant: 'muted',
    children: 'This is a muted link',
  },
};

export const Inverse: Story = {
  args: {
    href: '#',
    variant: 'inverse',
    children: 'This is a link on a dark background',
  },
  decorators: [
    (Story) => (
      <div className='bg-govuk-brand p-govuk-4'>
        <Story />
      </div>
    ),
  ],
};

export const NoUnderline: Story = {
  args: {
    href: '#',
    noUnderline: true,
    children: 'This link has no underline until hovered',
  },
};

export const NoVisitedState: Story = {
  args: {
    href: '#',
    noVisitedState: true,
    children: 'This link stays blue after visiting',
  },
};

export const InParagraph: Story = {
  render: () => (
    <p className='font-govuk text-govuk-body text-govuk-black'>
      You can <Link href='#'>find out more about your rights</Link> on the
      official website. There is also a{' '}
      <Link href='#'>guide for new applicants</Link> available.
    </p>
  ),
};
