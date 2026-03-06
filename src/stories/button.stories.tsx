import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '@/ui/button';

const meta = {
  title: 'Whitehall-UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Whitehall-UI button component. Helps users carry out an action like starting an application or saving their information. Based on the [GOV.UK Design System Button](https://design-system.service.gov.uk/components/button/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'warning', 'inverse', 'start'],
      description: 'The visual style of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Save and continue',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Find address',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Delete account',
  },
};

export const Start: Story = {
  args: {
    variant: 'start',
    children: 'Start now',
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    children: 'Sign in',
  },
  decorators: [
    (Story) => (
      <div className='bg-govuk-link p-7.5'>
        <Story />
      </div>
    ),
  ],
};

export const DisabledDefault: Story = {
  name: 'Disabled (Default)',
  args: {
    variant: 'default',
    children: 'Save and continue',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  name: 'Disabled (Secondary)',
  args: {
    variant: 'secondary',
    children: 'Find address',
    disabled: true,
  },
};

export const DisabledWarning: Story = {
  name: 'Disabled (Warning)',
  args: {
    variant: 'warning',
    children: 'Delete account',
    disabled: true,
  },
};

export const ButtonGroup: Story = {
  args: {
    children: 'Save and continue',
  },
  render: () => (
    <div className='flex flex-wrap gap-3 items-baseline'>
      <Button variant='default' onClick={fn()}>
        Save and continue
      </Button>
      <Button variant='secondary' onClick={fn()}>
        Save as draft
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className='flex flex-col gap-4'>
      <div>
        <h4 className='m-0 mb-2 font-govuk text-[14px] text-[#666]'>
          Default (Primary)
        </h4>
        <Button variant='default' onClick={fn()}>
          Save and continue
        </Button>
      </div>
      <div>
        <h4 className='m-0 mb-2 font-govuk text-[14px] text-[#666]'>
          Secondary
        </h4>
        <Button variant='secondary' onClick={fn()}>
          Find address
        </Button>
      </div>
      <div>
        <h4 className='m-0 mb-2 font-govuk text-[14px] text-[#666]'>Warning</h4>
        <Button variant='warning' onClick={fn()}>
          Delete account
        </Button>
      </div>
      <div>
        <h4 className='m-0 mb-2 font-govuk text-[14px] text-[#666]'>Start</h4>
        <Button variant='start' onClick={fn()}>
          Start now
        </Button>
      </div>
      <div className='bg-govuk-link p-5'>
        <h4 className='m-0 mb-2 font-govuk text-[14px] text-white'>
          Inverse (on dark background)
        </h4>
        <Button variant='inverse' onClick={fn()}>
          Sign in
        </Button>
      </div>
    </div>
  ),
};
