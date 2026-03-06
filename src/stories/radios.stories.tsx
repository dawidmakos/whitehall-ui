import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radios, RadiosItem, RadiosHint, RadiosDivider } from '@/ui/radios';
import { Fieldset, FieldsetLegend } from '@/ui/fieldset';

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
    <Fieldset>
      <FieldsetLegend>Where do you live?</FieldsetLegend>
      <Radios name='where-do-you-live' defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosItem value='northern-ireland'>Northern Ireland</RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const Inline: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Have you changed your name?</FieldsetLegend>
      <Radios name='changed-name' inline defaultValue=''>
        <RadiosItem value='yes'>Yes</RadiosItem>
        <RadiosItem value='no'>No</RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const WithHints: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>How do you want to sign in?</FieldsetLegend>
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
    </Fieldset>
  ),
};

export const WithDivider: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Where do you live?</FieldsetLegend>
      <Radios name='where-divider' defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosDivider />
        <RadiosItem value='abroad'>
          I am a British citizen living abroad
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Where do you live?</FieldsetLegend>
      <Radios name='disabled-radios' disabled defaultValue=''>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const PreSelected: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Where do you live?</FieldsetLegend>
      <Radios name='pre-selected' defaultValue='scotland'>
        <RadiosItem value='england'>England</RadiosItem>
        <RadiosItem value='scotland'>Scotland</RadiosItem>
        <RadiosItem value='wales'>Wales</RadiosItem>
        <RadiosItem value='northern-ireland'>Northern Ireland</RadiosItem>
      </Radios>
    </Fieldset>
  ),
};
