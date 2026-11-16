import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Header,
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  HeaderLogotype,
  HeaderProductName,
} from '@/ui/header';
import {
  ServiceNavigation,
  ServiceNavigationContainer,
  ServiceNavigationServiceName,
  ServiceNavigationNav,
  ServiceNavigationItem,
  ServiceNavigationLink,
} from '@/ui/service-navigation';

const meta = {
  title: 'Whitehall-UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI header component. Shows users they are on GOV.UK. Based on the [GOV.UK Design System Header](https://design-system.service.gov.uk/components/header/). Renders the GOV.UK logo by default. Put the service name and navigation in a Service navigation component inside the same page `<header>` element. Services that are not on GOV.UK should use the Generic header.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithProductName: Story = {
  render: () => (
    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='https://www.gov.uk/'>
            <HeaderLogotype />
            <HeaderProductName>Design System</HeaderProductName>
          </HeaderLink>
        </HeaderLogo>
      </HeaderContainer>
    </Header>
  ),
};

export const WithServiceNavigation: Story = {
  render: () => (
    <header>
      <Header />
      <ServiceNavigation>
        <ServiceNavigationContainer>
          <ServiceNavigationServiceName href='#'>
            Whitehall Admin
          </ServiceNavigationServiceName>
          <ServiceNavigationNav>
            <ServiceNavigationItem active>
              <ServiceNavigationLink href='#' aria-current='page'>
                Documents
              </ServiceNavigationLink>
            </ServiceNavigationItem>
            <ServiceNavigationItem>
              <ServiceNavigationLink href='#'>Users</ServiceNavigationLink>
            </ServiceNavigationItem>
            <ServiceNavigationItem>
              <ServiceNavigationLink href='#'>Audit log</ServiceNavigationLink>
            </ServiceNavigationItem>
          </ServiceNavigationNav>
        </ServiceNavigationContainer>
      </ServiceNavigation>
    </header>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
