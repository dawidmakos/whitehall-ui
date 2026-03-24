import type { Meta, StoryObj } from '@storybook/react-vite';
import { WarningText } from '@/ui/warning-text';

const meta = {
  title: 'Whitehall-UI/WarningText',
  component: WarningText,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI warning text component. Based on the [GOV.UK Design System Warning text](https://design-system.service.gov.uk/components/warning-text/). Use to warn users about something important, such as legal consequences.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WarningText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'You can be fined up to £5,000 if you do not register.',
  },
};

export const CustomAssistiveText: Story = {
  args: {
    assistiveText: 'Important',
    children: 'You must complete this form before the deadline.',
  },
};

export const LongText: Story = {
  args: {
    children:
      'You could be taken to court if you do not respond to this letter within 28 days. You may also be required to pay additional legal costs.',
  },
};
