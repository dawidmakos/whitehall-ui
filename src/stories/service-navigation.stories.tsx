import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ServiceNavigation,
  ServiceNavigationContainer,
  ServiceNavigationServiceName,
  ServiceNavigationNav,
  ServiceNavigationItem,
  ServiceNavigationLink,
} from '@/ui/service-navigation';

const meta = {
  title: 'Whitehall-UI/ServiceNavigation',
  component: ServiceNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI service navigation component. Helps users understand that they are using your service and lets them navigate around it. Based on the [GOV.UK Design System Service navigation](https://design-system.service.gov.uk/components/service-navigation/).',
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
