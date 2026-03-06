import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hint } from '@/ui/hint';
import { Label } from '@/ui/label';
import { TextInput } from '@/ui/text-input';

const meta: Meta = {
  title: 'Whitehall-UI/Hint',
  component: Hint,
  argTypes: {
    hintText: {
      control: 'text',
      description: 'Text content of the hint',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI hint component. Use hint text for help that applies to the majority of users, displayed below the label.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

interface HintStoryArgs {
  hintText: string;
}

type Story = StoryObj<HintStoryArgs>;

export const Default: Story = {
  args: {
    hintText:
      'It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, QQ 12 34 56 C.',
  },
  render: ({ hintText }) => (
    <>
      <Label htmlFor='ni-hint'>National Insurance number</Label>
      <Hint id='ni-hint-text'>{hintText}</Hint>
      <TextInput id='ni-hint' width={10} aria-describedby='ni-hint-text' />
    </>
  ),
};
