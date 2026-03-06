import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label, LabelWrapper } from '@/ui/label';
import { TextInput } from '@/ui/text-input';

interface LabelStoryArgs {
  labelText: string;
  size: 'xl' | 'l' | 'm' | 's' | undefined;
}

const meta: Meta = {
  title: 'Whitehall-UI/Label',
  component: Label,
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Text content of the label',
    },
    size: {
      control: 'select',
      options: [undefined, 'xl', 'l', 'm', 's'],
      description: 'Label size variant',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI label component. Use the label to provide a text label for form inputs. Supports size variants for single-question-per-page patterns.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LabelStoryArgs>;

export const Default: Story = {
  args: {
    labelText: 'National Insurance number',
    size: undefined,
  },
  render: ({ labelText, size }) => (
    <>
      <Label htmlFor='ni-number' size={size}>
        {labelText}
      </Label>
      <TextInput id='ni-number' width={10} />
    </>
  ),
};

export const AsPageHeading: Story = {
  args: {
    labelText: 'What is your National Insurance number?',
    size: 'xl',
  },
  render: ({ labelText, size }) => (
    <>
      <LabelWrapper>
        <Label htmlFor='ni-number-heading' size={size}>
          {labelText}
        </Label>
      </LabelWrapper>
      <TextInput id='ni-number-heading' width={10} />
    </>
  ),
};
