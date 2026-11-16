import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ServiceNavigation,
  ServiceNavigationContainer,
  ServiceNavigationServiceName,
  ServiceNavigationNav,
  ServiceNavigationItem,
  ServiceNavigationLink,
  ServiceNavigationEnd,
} from '@/ui/service-navigation';
import {
  LanguageNavigation,
  LanguageNavigationItem,
  LanguageNavigationLink,
  LanguageNavigationCurrent,
} from '@/ui/language-navigation';

const meta = {
  title: 'Whitehall-UI/ServiceNavigation',
  component: ServiceNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI service navigation component. Helps users understand that they are using your service and lets them navigate around it. Based on the [GOV.UK Design System Service navigation](https://design-system.service.gov.uk/components/service-navigation/). Pass `inverse` for the blue variant, and put a `LanguageNavigation` in `ServiceNavigationEnd` (stacked below the menu by default, or `inline` to sit on the same row).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithServiceName: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const WithServiceNameAndNavigation: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          <ServiceNavigationItem active>
            <ServiceNavigationLink href='#' aria-current='true'>
              <strong className='font-normal'>Navigation item 1</strong>
            </ServiceNavigationLink>
          </ServiceNavigationItem>
          <ServiceNavigationItem>
            <ServiceNavigationLink href='#'>
              Navigation item 2
            </ServiceNavigationLink>
          </ServiceNavigationItem>
          <ServiceNavigationItem>
            <ServiceNavigationLink href='#'>
              Navigation item 3
            </ServiceNavigationLink>
          </ServiceNavigationItem>
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const NavigationOnly: Story = {
  render: () => (
    <ServiceNavigation aria-label='Menu'>
      <ServiceNavigationContainer>
        <ServiceNavigationNav>
          <ServiceNavigationItem active>
            <ServiceNavigationLink href='#' aria-current='true'>
              <strong className='font-normal'>Navigation item 1</strong>
            </ServiceNavigationLink>
          </ServiceNavigationItem>
          <ServiceNavigationItem>
            <ServiceNavigationLink href='#'>
              Navigation item 2
            </ServiceNavigationLink>
          </ServiceNavigationItem>
          <ServiceNavigationItem>
            <ServiceNavigationLink href='#'>
              Navigation item 3
            </ServiceNavigationLink>
          </ServiceNavigationItem>
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

const navigationItems = (labels: string[]) =>
  labels.map((label, index) => (
    <ServiceNavigationItem key={label} active={index === 0}>
      <ServiceNavigationLink
        href='#'
        aria-current={index === 0 ? 'true' : undefined}
      >
        {index === 0 ? <strong className='font-normal'>{label}</strong> : label}
      </ServiceNavigationLink>
    </ServiceNavigationItem>
  ));

const threeItems = [
  'Navigation item 1',
  'Navigation item 2',
  'Navigation item 3',
];

const Languages = ({ inverse }: { inverse?: boolean }) => (
  <LanguageNavigation inverse={inverse}>
    <LanguageNavigationItem>
      <LanguageNavigationCurrent lang='en'>English</LanguageNavigationCurrent>
    </LanguageNavigationItem>
    <LanguageNavigationItem>
      <LanguageNavigationLink href='#' lang='cy'>
        Cymraeg
      </LanguageNavigationLink>
    </LanguageNavigationItem>
  </LanguageNavigation>
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
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          {navigationItems(['Navigation item 1'])}
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const LargeNavigation: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
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
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const NoCollapseOnMobile: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
        <ServiceNavigationNav collapseOnMobile={false}>
          {navigationItems(threeItems)}
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const Inverse: Story = {
  render: () => (
    <ServiceNavigation inverse>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          {navigationItems(threeItems)}
        </ServiceNavigationNav>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const WithLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          {navigationItems(threeItems)}
        </ServiceNavigationNav>
        <ServiceNavigationEnd>
          <Languages />
        </ServiceNavigationEnd>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const WithInlineLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Service name
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          {navigationItems(threeItems)}
        </ServiceNavigationNav>
        <ServiceNavigationEnd inline>
          <Languages />
        </ServiceNavigationEnd>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};

export const InverseWithLanguageNavigation: Story = {
  render: () => (
    <ServiceNavigation inverse>
      <ServiceNavigationContainer>
        <ServiceNavigationServiceName href='#'>
          Apply for a juggling licence
        </ServiceNavigationServiceName>
        <ServiceNavigationNav>
          {navigationItems(threeItems)}
        </ServiceNavigationNav>
        <ServiceNavigationEnd inline>
          <Languages inverse />
        </ServiceNavigationEnd>
      </ServiceNavigationContainer>
    </ServiceNavigation>
  ),
};
