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
    <NotificationBanner variant='success' disableAutoFocus>
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

export const WithLotsOfContent: Story = {
  render: () => (
    <NotificationBanner>
      <NotificationBannerHeader>
        <NotificationBannerTitle>Important</NotificationBannerTitle>
      </NotificationBannerHeader>
      <NotificationBannerContent>
        <NotificationBannerHeading>
          Check if you need to apply for a visa to do this type of work
        </NotificationBannerHeading>
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
          <NotificationBannerLink href='#'>
            Read the visa guidance
          </NotificationBannerLink>
        </p>
      </NotificationBannerContent>
    </NotificationBanner>
  ),
};
