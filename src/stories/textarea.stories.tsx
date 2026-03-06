import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/ui/textarea';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';

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
    <>
      <Label htmlFor='default-textarea'>Can you provide more detail?</Label>
      <Hint id='default-textarea-hint'>
        Do not include personal or financial information, like your National
        Insurance number or credit card details.
      </Hint>
      <Textarea
        id='default-textarea'
        aria-describedby='default-textarea-hint'
        {...args}
      />
    </>
  ),
};

export const WithError: Story = {
  args: {
    error: true,
  },
  render: (args) => (
    <>
      <Label htmlFor='error-textarea'>Can you provide more detail?</Label>
      <p
        id='error-textarea-error'
        className='font-govuk text-govuk-body font-bold text-govuk-error m-0 mb-govuk-1'
      >
        <span className='sr-only'>Error:</span> Enter more detail
      </p>
      <Textarea
        id='error-textarea'
        aria-describedby='error-textarea-error'
        {...args}
      />
    </>
  ),
};

export const CustomRows: Story = {
  args: {
    rows: 8,
  },
  render: (args) => (
    <>
      <Label htmlFor='custom-rows-textarea'>
        Provide a detailed description
      </Label>
      <Textarea id='custom-rows-textarea' {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <>
      <Label htmlFor='disabled-textarea'>This field is disabled</Label>
      <Textarea
        id='disabled-textarea'
        defaultValue='This textarea is disabled'
        {...args}
      />
    </>
  ),
};

export const WithAriaDescribedBy: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='accessible-textarea'>Why are you contacting us?</Label>
      <Hint id='accessible-textarea-hint'>Give as much detail as you can</Hint>
      <p
        id='accessible-textarea-error'
        className='font-govuk text-govuk-body font-bold text-govuk-error m-0 mb-govuk-3'
      >
        <span className='sr-only'>Error:</span> Enter a reason for contacting us
      </p>
      <Textarea
        id='accessible-textarea'
        error
        aria-describedby='accessible-textarea-hint accessible-textarea-error'
        {...args}
      />
    </>
  ),
};
