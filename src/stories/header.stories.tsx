import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Header from '@/ui/header';
import * as ServiceNavigation from '@/ui/service-navigation';

const meta = {
  title: 'Whitehall-UI/Header',
  component: Header.Root,
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
} satisfies Meta<typeof Header.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithProductName: Story = {
  render: () => (
    <Header.Root>
      <Header.Container>
        <Header.Logo>
          <Header.Link href='https://www.gov.uk/'>
            <Header.Logotype />
            <Header.ProductName>Design System</Header.ProductName>
          </Header.Link>
        </Header.Logo>
      </Header.Container>
    </Header.Root>
  ),
};

export const WithServiceNavigation: Story = {
  render: () => (
    <header>
      <Header.Root />
      <ServiceNavigation.Root>
        <ServiceNavigation.Container>
          <ServiceNavigation.ServiceName href='#'>
            Whitehall Admin
          </ServiceNavigation.ServiceName>
          <ServiceNavigation.Nav>
            <ServiceNavigation.Item active>
              <ServiceNavigation.Link href='#' aria-current='page'>
                Documents
              </ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href='#'>Users</ServiceNavigation.Link>
            </ServiceNavigation.Item>
            <ServiceNavigation.Item>
              <ServiceNavigation.Link href='#'>Audit log</ServiceNavigation.Link>
            </ServiceNavigation.Item>
          </ServiceNavigation.Nav>
        </ServiceNavigation.Container>
      </ServiceNavigation.Root>
    </header>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};
