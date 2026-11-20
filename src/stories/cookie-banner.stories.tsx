import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as CookieBanner from '@/ui/cookie-banner';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/CookieBanner',
  component: CookieBanner.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI cookie banner component. Allows users to accept or reject cookies which are not essential to making the service work. Based on the [GOV.UK Design System Cookie banner](https://design-system.service.gov.uk/components/cookie-banner/). The component is presentational and composable — wire the accept, reject and hide actions to your own cookie-handling logic.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CookieBanner.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CookieBanner.Root aria-label='Cookies on [name of service]'>
      <CookieBanner.Message>
        <CookieBanner.Content>
          <CookieBanner.Heading>
            Cookies on [name of service]
          </CookieBanner.Heading>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We use some essential cookies to make this service work.
          </p>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We&rsquo;d also like to use analytics cookies so we can understand
            how you use the service and make improvements.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button>Accept analytics cookies</Button>
          <Button>Reject analytics cookies</Button>
          <Link href='#'>View cookies</Link>
        </CookieBanner.Actions>
      </CookieBanner.Message>
    </CookieBanner.Root>
  ),
};

type Choice = 'question' | 'accepted' | 'rejected';

const InteractiveCookieBanner = () => {
  const [choice, setChoice] = useState<Choice>('question');
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  }

  return (
    <CookieBanner.Root aria-label='Cookies on [name of service]'>
      <CookieBanner.Message hidden={choice !== 'question'}>
        <CookieBanner.Content>
          <CookieBanner.Heading>
            Cookies on [name of service]
          </CookieBanner.Heading>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We use some essential cookies to make this service work.
          </p>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We&rsquo;d also like to use analytics cookies so we can understand
            how you use the service and make improvements.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button onClick={() => setChoice('accepted')}>
            Accept analytics cookies
          </Button>
          <Button onClick={() => setChoice('rejected')}>
            Reject analytics cookies
          </Button>
          <Link href='#'>View cookies</Link>
        </CookieBanner.Actions>
      </CookieBanner.Message>

      <CookieBanner.Message role='alert' hidden={choice !== 'accepted'}>
        <CookieBanner.Content>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve accepted analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button onClick={() => setHidden(true)}>Hide cookie message</Button>
        </CookieBanner.Actions>
      </CookieBanner.Message>

      <CookieBanner.Message role='alert' hidden={choice !== 'rejected'}>
        <CookieBanner.Content>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve rejected analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button onClick={() => setHidden(true)}>Hide cookie message</Button>
        </CookieBanner.Actions>
      </CookieBanner.Message>
    </CookieBanner.Root>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveCookieBanner />,
};

export const Accepted: Story = {
  render: () => (
    <CookieBanner.Root aria-label='Cookies on [name of service]'>
      <CookieBanner.Message role='alert'>
        <CookieBanner.Content>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve accepted analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button>Hide cookie message</Button>
        </CookieBanner.Actions>
      </CookieBanner.Message>
    </CookieBanner.Root>
  ),
};

export const Rejected: Story = {
  render: () => (
    <CookieBanner.Root aria-label='Cookies on [name of service]'>
      <CookieBanner.Message role='alert'>
        <CookieBanner.Content>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve rejected analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBanner.Content>
        <CookieBanner.Actions>
          <Button>Hide cookie message</Button>
        </CookieBanner.Actions>
      </CookieBanner.Message>
    </CookieBanner.Root>
  ),
};
