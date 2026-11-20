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
          'Whitehall-UI header component. Shows the Whitehall-UI logo by default. To show your own logo instead, put it inside `Header.Logo` and `Header.Link`, or use the Generic header. Put the service name and navigation in a Service navigation component inside the same page `<header>` element. Based on the [GOV.UK Design System Header](https://design-system.service.gov.uk/components/header/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
