import type { Meta, StoryObj } from '@storybook/react-vite';
import * as ServiceNavigation from '@/ui/service-navigation';
import * as LanguageNavigation from '@/ui/language-navigation';

const meta = {
  title: 'Whitehall-UI/ServiceNavigation',
  component: ServiceNavigation.Root,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI service navigation component. Helps users understand that they are using your service and lets them navigate around it. Based on the [GOV.UK Design System Service navigation](https://design-system.service.gov.uk/components/service-navigation/). Pass `inverse` for the blue variant, and put a `LanguageNavigation` in `ServiceNavigation.End` (stacked below the menu by default, or `inline` to sit on the same row).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceNavigation.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithServiceName: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const WithServiceNameAndNavigation: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          <ServiceNavigation.Item active>
            <ServiceNavigation.Link href='#' aria-current='true'>
              <strong className='font-normal'>Navigation item 1</strong>
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href='#'>
              Navigation item 2
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href='#'>
              Navigation item 3
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const NavigationOnly: Story = {
  render: () => (
    <ServiceNavigation.Root aria-label='Menu'>
      <ServiceNavigation.Container>
        <ServiceNavigation.Nav>
          <ServiceNavigation.Item active>
            <ServiceNavigation.Link href='#' aria-current='true'>
              <strong className='font-normal'>Navigation item 1</strong>
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href='#'>
              Navigation item 2
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
          <ServiceNavigation.Item>
            <ServiceNavigation.Link href='#'>
              Navigation item 3
            </ServiceNavigation.Link>
          </ServiceNavigation.Item>
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

const navigationItems = (labels: string[]) =>
  labels.map((label, index) => (
    <ServiceNavigation.Item key={label} active={index === 0}>
      <ServiceNavigation.Link
        href='#'
        aria-current={index === 0 ? 'true' : undefined}
      >
        {index === 0 ? <strong className='font-normal'>{label}</strong> : label}
      </ServiceNavigation.Link>
    </ServiceNavigation.Item>
  ));

const threeItems = [
  'Navigation item 1',
  'Navigation item 2',
  'Navigation item 3',
];

const Languages = ({ inverse }: { inverse?: boolean }) => (
  <LanguageNavigation.Root inverse={inverse}>
    <LanguageNavigation.Item>
      <LanguageNavigation.Current lang='en'>English</LanguageNavigation.Current>
    </LanguageNavigation.Item>
    <LanguageNavigation.Item>
      <LanguageNavigation.Link href='#' lang='cy'>
        Cymraeg
      </LanguageNavigation.Link>
    </LanguageNavigation.Item>
  </LanguageNavigation.Root>
);

export const SingleItem: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'With one item the menu does not collapse on mobile. Pass `collapseOnMobile` to override this.',
      },
    },
  },
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems(['Navigation item 1'])}
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const LargeNavigation: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems([
            'Home',
            'Your applications',
            'Licences',
            'Payments',
            'Messages',
            'Guidance',
            'Contact us',
            'Sign out',
          ])}
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const NoCollapseOnMobile: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav collapseOnMobile={false}>
          {navigationItems(threeItems)}
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const Inverse: Story = {
  render: () => (
    <ServiceNavigation.Root inverse>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems(threeItems)}
        </ServiceNavigation.Nav>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const WithLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems(threeItems)}
        </ServiceNavigation.Nav>
        <ServiceNavigation.End>
          <Languages />
        </ServiceNavigation.End>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const WithInlineLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation.Root>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Service name
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems(threeItems)}
        </ServiceNavigation.Nav>
        <ServiceNavigation.End inline>
          <Languages />
        </ServiceNavigation.End>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};

export const InverseWithLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation.Root inverse>
      <ServiceNavigation.Container>
        <ServiceNavigation.ServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigation.ServiceName>
        <ServiceNavigation.Nav>
          {navigationItems(threeItems)}
        </ServiceNavigation.Nav>
        <ServiceNavigation.End inline>
          <Languages inverse />
        </ServiceNavigation.End>
      </ServiceNavigation.Container>
    </ServiceNavigation.Root>
  ),
};
