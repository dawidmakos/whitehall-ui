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
      <div
        style={{
          backgroundColor: '#1d70b8',
          padding: '30px',
          borderRadius: '0',
        }}
      >
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

// ---------------------------------------------------------------------------
// Button group – multiple buttons together (GOV.UK pattern)
// ---------------------------------------------------------------------------
export const ButtonGroup: Story = {
  args: {
    children: 'Save and continue',
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'baseline',
      }}
    >
      <Button variant='default' onClick={fn()}>
        Save and continue
      </Button>
      <Button variant='secondary' onClick={fn()}>
        Save as draft
      </Button>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// All variants side by side (overview)
// ---------------------------------------------------------------------------
export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4
          style={{
            margin: '0 0 8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Default (Primary)
        </h4>
        <Button variant='default' onClick={fn()}>
          Save and continue
        </Button>
      </div>
      <div>
        <h4
          style={{
            margin: '0 0 8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Secondary
        </h4>
        <Button variant='secondary' onClick={fn()}>
          Find address
        </Button>
      </div>
      <div>
        <h4
          style={{
            margin: '0 0 8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Warning
        </h4>
        <Button variant='warning' onClick={fn()}>
          Delete account
        </Button>
      </div>
      <div>
        <h4
          style={{
            margin: '0 0 8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Start
        </h4>
        <Button variant='start' onClick={fn()}>
          Start now
        </Button>
      </div>
      <div
        style={{
          backgroundColor: '#1d70b8',
          padding: '20px',
        }}
      >
        <h4
          style={{
            margin: '0 0 8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#fff',
          }}
        >
          Inverse (on dark background)
        </h4>
        <Button variant='inverse' onClick={fn()}>
          Sign in
        </Button>
      </div>
    </div>
  ),
};
