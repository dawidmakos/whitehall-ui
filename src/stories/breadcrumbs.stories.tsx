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
            <BreadcrumbsLink href='#' className='text-white hover:text-white'>
              Home
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
          <BreadcrumbsListItem>
            <BreadcrumbsLink href='#' className='text-white hover:text-white'>
              Passports, travel and living abroad
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
          <BreadcrumbsListItem>
            <BreadcrumbsLink href='#' className='text-white hover:text-white'>
              Travel abroad
            </BreadcrumbsLink>
          </BreadcrumbsListItem>
        </BreadcrumbsList>
      </Breadcrumbs>
    </div>
  ),
};
