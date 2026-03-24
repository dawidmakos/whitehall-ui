import type { Meta, StoryObj } from '@storybook/react-vite';
import { Details, DetailsSummary, DetailsText } from '@/ui/details';

const meta = {
  title: 'Whitehall-UI/Details',
  component: Details,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI details component. Based on the [GOV.UK Design System Details](https://design-system.service.gov.uk/components/details/). Make a page easier to scan by letting users reveal more detailed information only if they need it.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Details>
      <DetailsSummary>Help with nationality</DetailsSummary>
      <DetailsText>
        <p className='font-govuk text-govuk-body'>
          We need to know your nationality so we can work out which elections
          you're entitled to vote in. If you cannot provide your nationality,
          you'll have to send copies of identity documents through the post.
        </p>
      </DetailsText>
    </Details>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Details defaultOpen>
      <DetailsSummary>Help with nationality</DetailsSummary>
      <DetailsText>
        <p className='font-govuk text-govuk-body'>
          We need to know your nationality so we can work out which elections
          you're entitled to vote in. If you cannot provide your nationality,
          you'll have to send copies of identity documents through the post.
        </p>
      </DetailsText>
    </Details>
  ),
};
