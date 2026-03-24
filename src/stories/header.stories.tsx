import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Header,
  HeaderContainer,
  HeaderLogo,
  HeaderLink,
  HeaderServiceName,
  HeaderNav,
  HeaderNavItem,
  HeaderNavLink,
} from '@/ui/header';

const meta = {
  title: 'Whitehall-UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI header component. An app-style masthead bar with logo, service name, and navigation links. Based on the [GOV.UK Design System Header](https://design-system.service.gov.uk/components/header/) and [Service Navigation](https://design-system.service.gov.uk/components/service-navigation/). Supply your own logo and service name via the composable sub-components.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='/'>My Service</HeaderLink>
        </HeaderLogo>
      </HeaderContainer>
    </Header>
  ),
};

export const WithNavigation: Story = {
  render: () => (
    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='/'>My Service</HeaderLink>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem active>
            <HeaderNavLink href='/'>Dashboard</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/reports'>Reports</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/settings'>Settings</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  ),
};

export const WithServiceNameAndNav: Story = {
  render: () => (
    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              width='30'
              height='30'
              aria-label='Home'
            >
              <path d='M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z' />
            </svg>
          </HeaderLink>
        </HeaderLogo>
        <HeaderServiceName href='/'>Whitehall Admin</HeaderServiceName>
        <HeaderNav>
          <HeaderNavItem active>
            <HeaderNavLink href='/'>Documents</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/users'>Users</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/audit'>Audit log</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  ),
};

export const ManyLinks: Story = {
  render: () => (
    <Header>
      <HeaderContainer>
        <HeaderLogo>
          <HeaderLink href='/'>My Service</HeaderLink>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem active>
            <HeaderNavLink href='/'>Dashboard</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/reports'>Reports</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/users'>Users</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/settings'>Settings</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/audit'>Audit log</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/help'>Help</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Header>
      <HeaderContainer fullWidth>
        <HeaderLogo>
          <HeaderLink href='/'>My Service</HeaderLink>
        </HeaderLogo>
        <HeaderNav>
          <HeaderNavItem>
            <HeaderNavLink href='/'>Home</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink href='/about'>About</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  ),
};
