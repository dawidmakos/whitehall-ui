import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/ui/textarea';

const meta = {
  title: 'Whitehall-UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI textarea component. Lets users enter multiple lines of text. Based on the [GOV.UK Design System Textarea](https://design-system.service.gov.uk/components/textarea/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the textarea is in an error state',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows (default: 5)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='default-textarea'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Can you provide more detail?
      </label>
      <span
        id='default-textarea-hint'
        style={{
          display: 'block',
          marginBottom: '15px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
        }}
      >
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </span>
      <Textarea
        id='default-textarea'
        aria-describedby='default-textarea-hint'
        {...args}
      />
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
        htmlFor='error-textarea'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Can you provide more detail?
      </label>
      <p
        id='error-textarea-error'
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#d4351c',
          fontWeight: 700,
          margin: '0 0 5px',
        }}
      >
        <span className='sr-only'>Error:</span> Enter more detail
      </p>
      <Textarea
        id='error-textarea'
        aria-describedby='error-textarea-error'
        {...args}
      />
    </div>
  ),
};

export const CustomRows: Story = {
  args: {
    rows: 8,
  },
  render: (args) => (
    <div>
      <label
        htmlFor='custom-rows-textarea'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Provide a detailed description
      </label>
      <Textarea id='custom-rows-textarea' {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div>
      <label
        htmlFor='disabled-textarea'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        This field is disabled
      </label>
      <Textarea
        id='disabled-textarea'
        defaultValue='This textarea is disabled'
        {...args}
      />
    </div>
  ),
};

export const WithAriaDescribedBy: Story = {
  args: {},
  render: (args) => (
    <div>
      <label
        htmlFor='accessible-textarea'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
        }}
      >
        Why are you contacting us?
      </label>
      <span
        id='accessible-textarea-hint'
        style={{
          display: 'block',
          marginBottom: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
        }}
      >
        Give as much detail as you can
      </span>
      <p
        id='accessible-textarea-error'
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#d4351c',
          fontWeight: 700,
          margin: '0 0 15px',
        }}
      >
        <span className='sr-only'>Error:</span> Enter a reason for contacting us
      </p>
      <Textarea
        id='accessible-textarea'
        error
        aria-describedby='accessible-textarea-hint accessible-textarea-error'
        {...args}
      />
    </div>
  ),
};
