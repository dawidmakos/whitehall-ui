import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@/ui/skip-link';

const meta = {
  title: 'Whitehall-UI/SkipLink',
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI skip link component. Based on the [GOV.UK Design System Skip link](https://design-system.service.gov.uk/components/skip-link/). Place immediately after the opening body tag (or after a cookie banner). Visually hidden until focused via keyboard tab.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#main-content',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The skip link is visually hidden by default. Tab into the story preview to see it appear.',
      },
    },
  },
};

export const CustomText: Story = {
  args: {
    href: '#main-content',
    children: 'Skip to content',
  },
};

export const Visible: Story = {
  render: () => (
    <div>
      <SkipLink
        href='#main-content'
        className='[&]:position-static [&]:w-auto [&]:h-auto [&]:clip-auto [&]:clip-path-none [&]:overflow-visible [&]:whitespace-normal [&]:m-0'
      />
      <p className='font-govuk text-govuk-body text-govuk-dark-grey mt-govuk-4'>
        Above is the skip link forced visible for demonstration.
      </p>
    </div>
  ),
};
