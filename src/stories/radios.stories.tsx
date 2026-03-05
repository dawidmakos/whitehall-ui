import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radios, RadiosItem, RadiosHint, RadiosDivider } from '@/ui/radios';

const meta = {
  title: 'Whitehall-UI/Radios',
  component: Radios,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI radios component. Lets users select one option from a list. Based on the [GOV.UK Design System Radios](https://design-system.service.gov.uk/components/radios/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radios>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Where do you live?
      </legend>
      <Radios name='where-do-you-live' defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosItem value='northern-ireland'>Northern Ireland</RadiosItem>
      </Radios>
    </fieldset>
  ),
};

export const Inline: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Have you changed your name?
      </legend>
      <Radios name='changed-name' inline defaultValue=''>
        <RadiosItem value='yes'>Yes</RadiosItem>
        <RadiosItem value='no'>No</RadiosItem>
      </Radios>
    </fieldset>
  ),
};

export const WithHints: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        How do you want to sign in?
      </legend>
      <Radios name='sign-in' defaultValue=''>
        <RadiosItem value='gateway'>Sign in with Government Gateway</RadiosItem>
        <RadiosHint>
          You'll have a user ID if you've registered for Self Assessment or
          filed a tax return online before.
        </RadiosHint>

        <RadiosItem value='verify'>Sign in with GOV.UK Verify</RadiosItem>
        <RadiosHint>
          You'll have an account if you've already proved your identity with a
          certified company.
        </RadiosHint>
      </Radios>
    </fieldset>
  ),
};

export const WithDivider: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Where do you live?
      </legend>
      <Radios name='where-divider' defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosDivider />
        <RadiosItem value='abroad'>
          I am a British citizen living abroad
        </RadiosItem>
      </Radios>
    </fieldset>
  ),
};

export const Disabled: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Where do you live?
      </legend>
      <Radios name='disabled-radios' disabled defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
      </Radios>
    </fieldset>
  ),
};

export const PreSelected: Story = {
  args: {
    children: null,
  },
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Where do you live?
      </legend>
      <Radios name='pre-selected' defaultValue='scotland'>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosItem value='northern-ireland'>Northern Ireland</RadiosItem>
      </Radios>
    </fieldset>
  ),
};
