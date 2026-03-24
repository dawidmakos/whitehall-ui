import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NotificationBanner,
  NotificationBannerHeader,
  NotificationBannerTitle,
  NotificationBannerContent,
  NotificationBannerHeading,
  NotificationBannerLink,
} from '@/ui/notification-banner';

const meta = {
  title: 'Whitehall-UI/NotificationBanner',
  component: NotificationBanner,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI notification banner component. Based on the [GOV.UK Design System Notification banner](https://design-system.service.gov.uk/components/notification-banner/). Use to tell the user about something that is not directly related to the page content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NotificationBanner>
      <NotificationBannerHeader>
        <NotificationBannerTitle>Important</NotificationBannerTitle>
      </NotificationBannerHeader>
      <NotificationBannerContent>
        <p className='font-govuk text-govuk-body'>
          You have 7 days left to send your application.{' '}
          <NotificationBannerLink href='#'>
            View application
          </NotificationBannerLink>
          .
        </p>
      </NotificationBannerContent>
    </NotificationBanner>
  ),
};

export const Success: Story = {
  render: () => (
    <NotificationBanner variant='success'>
      <NotificationBannerHeader>
        <NotificationBannerTitle>Success</NotificationBannerTitle>
      </NotificationBannerHeader>
      <NotificationBannerContent>
        <NotificationBannerHeading>
          Training outcome recorded and trainee notified
        </NotificationBannerHeading>
        <p className='font-govuk text-govuk-body'>
          Contact{' '}
          <NotificationBannerLink href='#'>
            example@email.com
          </NotificationBannerLink>{' '}
          if the email has not arrived within 24 hours.
        </p>
      </NotificationBannerContent>
    </NotificationBanner>
  ),
};

export const WholeService: Story = {
  render: () => (
    <NotificationBanner>
      <NotificationBannerHeader>
        <NotificationBannerTitle>Important</NotificationBannerTitle>
      </NotificationBannerHeader>
      <NotificationBannerContent>
        <p className='font-govuk text-govuk-body'>
          There may be a delay in processing your application because of the
          coronavirus outbreak.
        </p>
      </NotificationBannerContent>
    </NotificationBanner>
  ),
};
