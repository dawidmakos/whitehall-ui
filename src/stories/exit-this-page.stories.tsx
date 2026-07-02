import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExitThisPage } from '@/ui/exit-this-page';

const meta = {
  title: 'Whitehall-UI/ExitThisPage',
  component: ExitThisPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Whitehall-UI exit this page component. Gives users a way to quickly and safely exit a page, hiding it from anyone who may be watching. Pressing the Shift key three times also activates it. Based on the [GOV.UK Design System Exit this page](https://design-system.service.gov.uk/components/exit-this-page/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExitThisPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='p-govuk-4'>
      <ExitThisPage />
    </div>
  ),
};

export const CustomText: Story = {
  render: () => (
    <div className='p-govuk-4'>
      <ExitThisPage text='Exit this page now' />
    </div>
  ),
};
