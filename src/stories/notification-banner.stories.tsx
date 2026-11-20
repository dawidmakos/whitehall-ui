import type { Meta, StoryObj } from '@storybook/react-vite';
import * as NotificationBanner from '@/ui/notification-banner';

const meta = {
  title: 'Whitehall-UI/NotificationBanner',
  component: NotificationBanner.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI notification banner component. Based on the [GOV.UK Design System Notification banner](https://design-system.service.gov.uk/components/notification-banner/). Use to tell the user about something that is not directly related to the page content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationBanner.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NotificationBanner.Root>
      <NotificationBanner.Header>
        <NotificationBanner.Title>Important</NotificationBanner.Title>
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <p className='font-govuk text-govuk-body'>
          You have 7 days left to send your application.{' '}
          <NotificationBanner.Link href='#'>
            View application
          </NotificationBanner.Link>
          .
        </p>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};

export const Success: Story = {
  render: () => (
    <NotificationBanner.Root variant='success' disableAutoFocus>
      <NotificationBanner.Header>
        <NotificationBanner.Title>Success</NotificationBanner.Title>
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          Training outcome recorded and trainee notified
        </NotificationBanner.Heading>
        <p className='font-govuk text-govuk-body'>
          Contact{' '}
          <NotificationBanner.Link href='#'>
            example@email.com
          </NotificationBanner.Link>{' '}
          if the email has not arrived within 24 hours.
        </p>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};

export const WholeService: Story = {
  render: () => (
    <NotificationBanner.Root>
      <NotificationBanner.Header>
        <NotificationBanner.Title>Important</NotificationBanner.Title>
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <p className='font-govuk text-govuk-body'>
          There may be a delay in processing your application because of the
          coronavirus outbreak.
        </p>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};

export const WithLotsOfContent: Story = {
  render: () => (
    <NotificationBanner.Root>
      <NotificationBanner.Header>
        <NotificationBanner.Title>Important</NotificationBanner.Title>
      </NotificationBanner.Header>
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          Check if you need to apply for a visa to do this type of work
        </NotificationBanner.Heading>
        <p className='font-govuk text-govuk-body mt-0 mb-govuk-4'>
          You may need a visa if you are coming to the UK to work for a short
          time. Check the guidance before you travel.
        </p>
        <ul className='font-govuk text-govuk-body mt-0 mb-govuk-4 pl-govuk-4 list-disc'>
          <li>you have a job offer from a UK employer</li>
          <li>your job is on the list of eligible occupations</li>
          <li>you will be paid at least the minimum salary</li>
        </ul>
        <p className='font-govuk text-govuk-body m-0'>
          <NotificationBanner.Link href='#'>
            Read the visa guidance
          </NotificationBanner.Link>
        </p>
      </NotificationBanner.Content>
    </NotificationBanner.Root>
  ),
};
