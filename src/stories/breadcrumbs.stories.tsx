import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Breadcrumbs from '@/ui/breadcrumbs';

const meta = {
  title: 'Whitehall-UI/Breadcrumbs',
  component: Breadcrumbs.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI breadcrumbs component. Based on the [GOV.UK Design System Breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/). Helps users understand where they are.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Home</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>
            Passports, travel and living abroad
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Travel abroad</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const CollapseOnMobile: Story = {
  render: () => (
    <Breadcrumbs.Root collapseOnMobile>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Home</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>
            Environment and countryside
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Rural and countryside</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>
            Economic growth in rural areas
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div className='bg-govuk-brand p-govuk-4'>
      <Breadcrumbs.Root inverse>
        <Breadcrumbs.List>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href='#'>
              Home
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href='#'>
              Passports, travel and living abroad
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
          <Breadcrumbs.ListItem>
            <Breadcrumbs.Link href='#'>
              Travel abroad
            </Breadcrumbs.Link>
          </Breadcrumbs.ListItem>
        </Breadcrumbs.List>
      </Breadcrumbs.Root>
    </div>
  ),
};

export const OneLevel: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Section</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const WithoutHome: Story = {
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Service manual</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Agile delivery</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};

export const CurrentPage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Only include the current page when it helps users. Render it as text with `aria-current="page"`, not as a link.',
      },
    },
  },
  render: () => (
    <Breadcrumbs.Root>
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>Home</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href='#'>
            Passports, travel and living abroad
          </Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem aria-current='page'>
          Travel abroad
        </Breadcrumbs.ListItem>
      </Breadcrumbs.List>
    </Breadcrumbs.Root>
  ),
};
