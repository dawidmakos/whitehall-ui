import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  CookieBanner,
  CookieBannerMessage,
  CookieBannerContent,
  CookieBannerHeading,
  CookieBannerActions,
} from '@/ui/cookie-banner';
import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

const meta = {
  title: 'Whitehall-UI/CookieBanner',
  component: CookieBanner,
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
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CookieBanner aria-label='Cookies on [name of service]'>
      <CookieBannerMessage>
        <CookieBannerContent>
          <CookieBannerHeading>
            Cookies on [name of service]
          </CookieBannerHeading>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We use some essential cookies to make this service work.
          </p>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We&rsquo;d also like to use analytics cookies so we can understand
            how you use the service and make improvements.
          </p>
        </CookieBannerContent>
        <CookieBannerActions>
          <Button>Accept analytics cookies</Button>
          <Button>Reject analytics cookies</Button>
          <Link href='#'>View cookies</Link>
        </CookieBannerActions>
      </CookieBannerMessage>
    </CookieBanner>
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
    <CookieBanner aria-label='Cookies on [name of service]'>
      <CookieBannerMessage hidden={choice !== 'question'}>
        <CookieBannerContent>
          <CookieBannerHeading>
            Cookies on [name of service]
          </CookieBannerHeading>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We use some essential cookies to make this service work.
          </p>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            We&rsquo;d also like to use analytics cookies so we can understand
            how you use the service and make improvements.
          </p>
        </CookieBannerContent>
        <CookieBannerActions>
          <Button onClick={() => setChoice('accepted')}>
            Accept analytics cookies
          </Button>
          <Button onClick={() => setChoice('rejected')}>
            Reject analytics cookies
          </Button>
          <Link href='#'>View cookies</Link>
        </CookieBannerActions>
      </CookieBannerMessage>

      <CookieBannerMessage role='alert' hidden={choice !== 'accepted'}>
        <CookieBannerContent>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve accepted analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBannerContent>
        <CookieBannerActions>
          <Button onClick={() => setHidden(true)}>Hide cookie message</Button>
        </CookieBannerActions>
      </CookieBannerMessage>

      <CookieBannerMessage role='alert' hidden={choice !== 'rejected'}>
        <CookieBannerContent>
          <p className='font-govuk text-govuk-body mb-govuk-4'>
            You&rsquo;ve rejected analytics cookies. You can{' '}
            <Link href='#'>change your cookie settings</Link> at any time.
          </p>
        </CookieBannerContent>
        <CookieBannerActions>
          <Button onClick={() => setHidden(true)}>Hide cookie message</Button>
        </CookieBannerActions>
      </CookieBannerMessage>
    </CookieBanner>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveCookieBanner />,
};
