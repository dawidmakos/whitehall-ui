import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from '@/ui/password-input';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';

const meta = {
  title: 'Whitehall-UI/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI password input component. Helps users to create and enter passwords, with a button to show or hide the password. Based on the [GOV.UK Design System Password input](https://design-system.service.gov.uk/components/password-input/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'Whether the input is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='password'>Password</Label>
      <PasswordInput id='password' name='password' {...args} />
    </>
  ),
};

export const WithHint: Story = {
  args: {},
  render: (args) => (
    <>
      <Label htmlFor='password-hint'>Password</Label>
      <Hint id='password-hint-hint'>
        Your password should be at least 8 characters long.
      </Hint>
      <PasswordInput
        id='password-hint'
        name='password'
        aria-describedby='password-hint-hint'
        {...args}
      />
    </>
  ),
};

export const WithError: Story = {
  args: {},
  render: (args) => (
    <div className='border-l-govuk-standard border-l-govuk-error pl-govuk-4'>
      <Label htmlFor='password-error'>Password</Label>
      <ErrorMessage id='password-error-error'>Enter your password</ErrorMessage>
      <PasswordInput
        id='password-error'
        name='password'
        error
        aria-describedby='password-error-error'
        {...args}
      />
    </div>
  ),
};
