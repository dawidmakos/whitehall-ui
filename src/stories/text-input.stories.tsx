import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@/ui/text-input';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { FormGroup } from '@/ui/form-group';
import { LabelWrapper } from '@/ui/label';

const meta = {
  title: 'Whitehall-UI/Text Input',
  component: TextInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI text input component. Lets users enter text no longer than a single line. Based on the [GOV.UK Design System Text Input](https://design-system.service.gov.uk/components/text-input/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: ['full', 30, 20, 10, 5, 4, 3, 2],
      description: 'Fixed or fluid width of the input',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input is in an error state',
    },
    extraLetterSpacing: {
      control: 'boolean',
      description: 'Extra letter spacing for codes and reference numbers',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='default'>What is the name of the event?</Label>
      <TextInput id='default' {...args} />
    </>
  ),
};

export const FixedWidths: Story = {
  args: {},
  render: () => (
    <div className='flex flex-col gap-5'>
      {([30, 20, 10, 5, 4, 3, 2] as const).map((w) => (
        <div key={w}>
          <Label htmlFor={`width-${w}`}>Width {w}</Label>
          <TextInput id={`width-${w}`} width={w} />
        </div>
      ))}
    </div>
  ),
};

export const WithError: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <FormGroup error>
      <Label htmlFor='error'>What is your National Insurance number?</Label>
      <ErrorMessage id='error-msg'>
        Enter a National Insurance number in the correct format
      </ErrorMessage>
      <TextInput
        id='error'
        width={10}
        aria-describedby='error-msg'
        {...args}
      />
    </FormGroup>
  ),
};

export const CodeSequence: Story = {
  args: {
    extraLetterSpacing: true,
    width: 10,
  },
  render: (args) => (
    <>
      <Label htmlFor='code'>What is your reference number?</Label>
      <Hint>It's on the letter we sent you. For example, HDJ2123F</Hint>
      <TextInput id='code' {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Cannot edit this',
  },
  render: (args) => (
    <>
      <Label htmlFor='disabled'>Full name</Label>
      <TextInput id='disabled' {...args} />
    </>
  ),
};

export const WithHint: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='hint'>What is your National Insurance number?</Label>
      <Hint id='hint-text'>
        It's on your National Insurance card, benefit letter, payslip or P60.
        For example, 'QQ 12 34 56 C'.
      </Hint>
      <TextInput id='hint' width={10} aria-describedby='hint-text' {...args} />
    </>
  ),
};

export const WithPrefix: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='prefix'>What is the cost in pounds?</Label>
      <TextInput id='prefix' width={5} prefix='£' {...args} />
    </>
  ),
};

export const WithSuffix: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='suffix'>Weight, in kilograms</Label>
      <TextInput id='suffix' width={5} suffix='kg' {...args} />
    </>
  ),
};

export const WithPrefixAndSuffix: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='both'>What is the cost per item, in pounds?</Label>
      <TextInput id='both' width={5} prefix='£' suffix='per item' {...args} />
    </>
  ),
};

export const PrefixSuffixWithError: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <FormGroup error>
      <Label htmlFor='prefix-error'>
        What is the cost per item, in pounds?
      </Label>
      <ErrorMessage id='prefix-error-msg'>
        Enter the cost per item, in pounds
      </ErrorMessage>
      <TextInput
        id='prefix-error'
        width={5}
        prefix='£'
        suffix='per item'
        aria-describedby='prefix-error-msg'
        {...args}
      />
    </FormGroup>
  ),
};

export const WithErrorAndHint: Story = {
  args: { error: true },
  render: (args) => (
    <FormGroup error>
      <Label htmlFor='error-hint'>What is your National Insurance number?</Label>
      <Hint id='error-hint-hint'>
        It's on your National Insurance card, benefit letter, payslip or P60.
        For example, 'QQ 12 34 56 C'.
      </Hint>
      <ErrorMessage id='error-hint-error'>
        Enter a National Insurance number in the correct format
      </ErrorMessage>
      <TextInput
        id='error-hint'
        width={10}
        aria-describedby='error-hint-hint error-hint-error'
        {...args}
      />
    </FormGroup>
  ),
};

export const LabelAsPageHeading: Story = {
  args: {},
  render: (args) => (
    <>
      <LabelWrapper>
        <Label htmlFor='heading-input' size='l'>
          What is the name of the event?
        </Label>
      </LabelWrapper>
      <TextInput id='heading-input' {...args} />
    </>
  ),
};
