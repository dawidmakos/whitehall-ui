import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsListItem,
  BreadcrumbsLink,
} from '@/ui/breadcrumbs';

const meta = {
  title: 'Whitehall-UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI breadcrumbs component. Based on the [GOV.UK Design System Breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/). Helps users understand where they are.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Home</BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>
            Passports, travel and living abroad
          </BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Travel abroad</BreadcrumbsLink>
        </BreadcrumbsListItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
};

export const CollapseOnMobile: Story = {
  render: () => (
    <Breadcrumbs collapseOnMobile>
      <BreadcrumbsList>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Home</BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>
            Environment and countryside
          </BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Rural and countryside</BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>
            Economic growth in rural areas
          </BreadcrumbsLink>
        </BreadcrumbsListItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div className='bg-govuk-brand p-govuk-4'>
      <Breadcrumbs inverse>
        <BreadcrumbsList>
          <BreadcrumbsListItem>
            <BreadcrumbsLink href='#'>
              Home
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
          <BreadcrumbsListItem>
            <BreadcrumbsLink href='#'>
              Passports, travel and living abroad
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
          <BreadcrumbsListItem>
            <BreadcrumbsLink href='#'>
              Travel abroad
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
        </BreadcrumbsList>
      </Breadcrumbs>
    </div>
  ),
};

export const OneLevel: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Section</BreadcrumbsLink>
        </BreadcrumbsListItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
};

export const WithoutHome: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Service manual</BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Agile delivery</BreadcrumbsLink>
        </BreadcrumbsListItem>
      </BreadcrumbsList>
    </Breadcrumbs>
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
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>Home</BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem>
          <BreadcrumbsLink href='#'>
            Passports, travel and living abroad
          </BreadcrumbsLink>
        </BreadcrumbsListItem>
        <BreadcrumbsListItem aria-current='page'>
          Travel abroad
        </BreadcrumbsListItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
};
