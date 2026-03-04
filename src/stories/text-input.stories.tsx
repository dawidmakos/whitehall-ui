import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@/ui/text-input';

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
    <div>
      <label
        htmlFor='default'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is the name of the event?
      </label>
      <TextInput id='default' {...args} />
    </div>
  ),
};

export const FixedWidths: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {([20, 10, 5, 4, 3, 2] as const).map((w) => (
        <div key={w}>
          <label
            htmlFor={`width-${w}`}
            style={{
              display: 'block',
              marginBottom: '5px',
              fontFamily: 'Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            Width {w}
          </label>
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
    <div>
      <label
        htmlFor='error'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is your National Insurance number?
      </label>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#d4351c',
          fontWeight: 700,
          margin: '0 0 5px',
        }}
      >
        Error: Enter a National Insurance number in the correct format
      </p>
      <TextInput id='error' width={10} {...args} />
    </div>
  ),
};

export const CodeSequence: Story = {
  args: {
    extraLetterSpacing: true,
    width: 10,
  },
  render: (args) => (
    <div>
      <label
        htmlFor='code'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is your reference number?
      </label>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          color: '#505a5f',
          marginBottom: '10px',
        }}
      >
        It's on the letter we sent you. For example, HDJ2123F
      </div>
      <TextInput id='code' {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Cannot edit this',
  },
  render: (args) => (
    <div>
      <label
        htmlFor='disabled'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Full name
      </label>
      <TextInput id='disabled' {...args} />
    </div>
  ),
};

export const WithHint: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='hint'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is your National Insurance number?
      </label>
      <div
        id='hint-text'
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          color: '#505a5f',
          marginBottom: '10px',
        }}
      >
        It's on your National Insurance card, benefit letter, payslip or P60.
        For example, 'QQ 12 34 56 C'.
      </div>
      <TextInput id='hint' width={10} aria-describedby='hint-text' {...args} />
    </div>
  ),
};

export const WithPrefix: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='prefix'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is the cost in pounds?
      </label>
      <TextInput id='prefix' width={5} prefix='£' {...args} />
    </div>
  ),
};

export const WithSuffix: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='suffix'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Weight, in kilograms
      </label>
      <TextInput id='suffix' width={5} suffix='kg' {...args} />
    </div>
  ),
};

export const WithPrefixAndSuffix: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='both'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is the cost per item, in pounds?
      </label>
      <TextInput id='both' width={5} prefix='£' suffix='per item' {...args} />
    </div>
  ),
};

export const PrefixSuffixWithError: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <div>
      <label
        htmlFor='prefix-error'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        What is the cost per item, in pounds?
      </label>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#d4351c',
          fontWeight: 700,
          margin: '0 0 5px',
        }}
      >
        Error: Enter the cost per item, in pounds
      </p>
      <TextInput
        id='prefix-error'
        width={5}
        prefix='£'
        suffix='per item'
        {...args}
      />
    </div>
  ),
};
