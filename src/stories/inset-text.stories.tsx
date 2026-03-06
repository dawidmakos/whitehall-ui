import type { Meta, StoryObj } from '@storybook/react-vite';
import { InsetText } from '@/ui/inset-text';

const meta = {
  title: 'Whitehall-UI/Inset Text',
  component: InsetText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI inset text component. Differentiates a block of text from surrounding content. Based on the [GOV.UK Design System Inset Text](https://design-system.service.gov.uk/components/inset-text/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InsetText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <InsetText>
      <p>
        It can take up to 8 weeks to register a lasting power of attorney if
        there are no mistakes in the application.
      </p>
    </InsetText>
  ),
};

export const WithMultipleParagraphs: Story = {
  args: {},
  render: () => (
    <InsetText>
      <p>
        It can take up to 8 weeks to register a lasting power of attorney if
        there are no mistakes in the application.
      </p>
      <p>
        You can still make decisions while you're waiting for it to be
        registered.
      </p>
    </InsetText>
  ),
};

export const InContext: Story = {
  args: {},
  render: () => (
    <div className='font-govuk text-govuk-body leading-6.25 max-w-160'>
      <p>This is a paragraph of text before the inset text.</p>
      <InsetText>
        <p>
          It can take up to 8 weeks to register a lasting power of attorney if
          there are no mistakes in the application.
        </p>
      </InsetText>
      <p>This is a paragraph of text after the inset text.</p>
    </div>
  ),
};
