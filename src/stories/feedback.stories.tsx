import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Feedback from '@/ui/feedback';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/Feedback',
  component: Feedback.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI feedback component. Asks users for feedback about your service. Based on the [GOV.UK Design System Feedback](https://design-system.service.gov.uk/components/feedback/) (trial status in GOV.UK Frontend 6.5). Place it outside padded page containers so it can run full width on mobile.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Feedback.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Feedback.Root>
      <Feedback.Title>Help us improve this service</Feedback.Title>
      <Feedback.Body>
        <p className='mt-0 mb-govuk-4'>
          Tell us about your experience using this service.{' '}
          <Link href='#'>Give us your feedback</Link>
        </p>
      </Feedback.Body>
    </Feedback.Root>
  ),
};
