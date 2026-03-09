import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorMessage } from '@/ui/error-message';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { TextInput } from '@/ui/text-input';
import { Textarea } from '@/ui/textarea';
import { Fieldset, FieldsetLegend } from '@/ui/fieldset';

const meta = {
  title: 'Whitehall-UI/Error Message',
  component: ErrorMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI error message component. Shows a validation error message next to a form field. Based on the [GOV.UK Design System Error Message](https://design-system.service.gov.uk/components/error-message/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The error message text',
    },
    visuallyHiddenText: {
      control: 'text',
      description:
        'Hidden prefix for screen readers (default: "Error"). Set to empty string to remove.',
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Enter your full name',
  },
};

export const WithTextInput: Story = {
  args: {
    children: 'Enter your full name',
  },
  render: (args) => (
    <>
      <Label htmlFor='full-name'>Full name</Label>
      <ErrorMessage id='full-name-error' {...args} />
      <TextInput id='full-name' error aria-describedby='full-name-error' />
    </>
  ),
};

export const WithHintAndTextInput: Story = {
  args: {
    children: 'Enter a National Insurance number in the correct format',
  },
  render: (args) => (
    <>
      <Label htmlFor='ni-number'>What is your National Insurance number?</Label>
      <Hint id='ni-number-hint'>
        It's on your National Insurance card, benefit letter, payslip or P60.
        For example, 'QQ 12 34 56 C'.
      </Hint>
      <ErrorMessage id='ni-number-error' {...args} />
      <TextInput
        id='ni-number'
        error
        width={10}
        aria-describedby='ni-number-hint ni-number-error'
      />
    </>
  ),
};

export const WithTextarea: Story = {
  args: {
    children: 'Enter more detail',
  },
  render: (args) => (
    <>
      <Label htmlFor='more-detail'>Can you provide more detail?</Label>
      <Hint id='more-detail-hint'>
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </Hint>
      <ErrorMessage id='more-detail-error' {...args} />
      <Textarea
        id='more-detail'
        error
        aria-describedby='more-detail-hint more-detail-error'
      />
    </>
  ),
};

export const WithFieldset: Story = {
  args: {
    children: 'The date your passport was issued must be in the past',
  },
  render: (args) => (
    <Fieldset>
      <FieldsetLegend size='l'>When was your passport issued?</FieldsetLegend>
      <Hint>For example, 27 3 2007</Hint>
      <ErrorMessage id='passport-issued-error' {...args} />
      <div className='flex gap-4'>
        <div>
          <Label htmlFor='passport-day'>Day</Label>
          <TextInput id='passport-day' width={2} error />
        </div>
        <div>
          <Label htmlFor='passport-month'>Month</Label>
          <TextInput id='passport-month' width={2} error />
        </div>
        <div>
          <Label htmlFor='passport-year'>Year</Label>
          <TextInput id='passport-year' width={4} error />
        </div>
      </div>
    </Fieldset>
  ),
};

export const CustomHiddenPrefix: Story = {
  args: {
    children: 'Rhowch eich enw llawn',
    visuallyHiddenText: 'Gwall',
  },
};
