import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Radios,
  RadiosItem,
  RadiosDivider,
  RadiosConditional,
} from '@/ui/radios';
import { Fieldset, FieldsetLegend, FieldsetHeading } from '@/ui/fieldset';
import { FormGroup } from '@/ui/form-group';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { Label } from '@/ui/label';
import { TextInput } from '@/ui/text-input';

const meta = {
  title: 'Whitehall-UI/Radios',
  component: Radios,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI radios component. Lets users select one option from a list. Based on the [GOV.UK Design System Radios](https://design-system.service.gov.uk/components/radios/). Pass `hint` to `RadiosItem` to show hint text under an option; it is linked to the radio with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radios>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
  render: () => (
    <Fieldset>
      <FieldsetLegend>How do you want to sign in?</FieldsetLegend>
      <Radios name='sign-in' defaultValue=''>
        <RadiosItem
          value='gateway'
          hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </RadiosItem>

        <RadiosItem
          value='verify'
          hint="You'll have an account if you've already proved your identity with a certified company."
        >
          Sign in with GOV.UK Verify
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const WithDivider: Story = {
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

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset aria-describedby='changed-name-error-hint changed-name-error'>
        <FieldsetLegend>Have you changed your name?</FieldsetLegend>
        <Hint id='changed-name-error-hint'>
          This includes changing your last name or spelling your name
          differently
        </Hint>
        <ErrorMessage id='changed-name-error'>
          Select yes if you have changed your name
        </ErrorMessage>
        <Radios name='changed-name-error' inline defaultValue=''>
          <RadiosItem value='yes'>Yes</RadiosItem>
          <RadiosItem value='no'>No</RadiosItem>
        </Radios>
      </Fieldset>
    </FormGroup>
  ),
};

export const LegendAsPageHeading: Story = {
  render: () => (
    <Fieldset aria-describedby='housing-act-hint'>
      <FieldsetLegend size='l'>
        <FieldsetHeading>
          Which part of the Housing Act was your licence issued under?
        </FieldsetHeading>
      </FieldsetLegend>
      <Hint id='housing-act-hint'>Select one of the options below.</Hint>
      <Radios name='housing-act' defaultValue=''>
        <RadiosItem value='part-2'>Part 2 of the Housing Act 2004</RadiosItem>
        <RadiosItem value='part-3'>Part 3 of the Housing Act 2004</RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const WithoutFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Without a `Fieldset`, give `Radios` an accessible name with `aria-label` or `aria-labelledby`.',
      },
    },
  },
  render: () => (
    <Radios name='colours' aria-label='Colour' defaultValue=''>
      <RadiosItem value='red'>Red</RadiosItem>
      <RadiosItem value='green'>Green</RadiosItem>
      <RadiosItem value='blue'>Blue</RadiosItem>
    </Radios>
  ),
};

export const LongOptionText: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Which statement best describes you?</FieldsetLegend>
      <Radios name='long-text' defaultValue=''>
        <RadiosItem
          value='first'
          hint='Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          faucibus mollis interdum. Donec sed odio dui. Cras mattis consectetur
          purus sit amet fermentum. Vestibulum id ligula porta felis euismod
          semper.
        </RadiosItem>
        <RadiosItem value='second'>
          Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla
          non metus auctor fringilla.
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

const ContactRadios = ({ id, small }: { id: string; small?: boolean }) => {
  const [value, setValue] = useState('');

  return (
    <Fieldset aria-describedby={`${id}-hint`}>
      <FieldsetLegend>How would you prefer to be contacted?</FieldsetLegend>
      <Hint id={`${id}-hint`}>Select one option</Hint>
      <Radios
        name={id}
        value={value}
        onValueChange={(next) => setValue(String(next))}
      >
        <RadiosItem small={small} value='email'>
          Email
        </RadiosItem>
        {value === 'email' && (
          <RadiosConditional small={small}>
            <Label htmlFor={`${id}-email`}>Email address</Label>
            <TextInput
              id={`${id}-email`}
              type='email'
              autoComplete='email'
              width={20}
            />
          </RadiosConditional>
        )}

        <RadiosItem small={small} value='phone'>
          Phone
        </RadiosItem>
        {value === 'phone' && (
          <RadiosConditional small={small}>
            <Label htmlFor={`${id}-phone`}>Phone number</Label>
            <TextInput
              id={`${id}-phone`}
              type='tel'
              autoComplete='tel'
              width={20}
            />
          </RadiosConditional>
        )}

        <RadiosItem small={small} value='text'>
          Text message
        </RadiosItem>
        {value === 'text' && (
          <RadiosConditional small={small}>
            <Label htmlFor={`${id}-mobile`}>Mobile phone number</Label>
            <TextInput
              id={`${id}-mobile`}
              type='tel'
              autoComplete='tel'
              width={20}
            />
          </RadiosConditional>
        )}
      </Radios>
    </Fieldset>
  );
};

export const ConditionalReveal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Render a `RadiosConditional` after an item while it is selected. Only reveal one simple question.',
      },
    },
  },
  render: () => <ContactRadios id='contact' />,
};

export const Small: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend size='m'>Filter</FieldsetLegend>
      <Radios name='small-filter' defaultValue=''>
        <RadiosItem small value='monthly'>
          Monthly
        </RadiosItem>
        <RadiosItem small value='yearly'>
          Yearly
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const SmallInline: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend size='m'>Sort by</FieldsetLegend>
      <Radios name='small-sort' inline defaultValue='relevance'>
        <RadiosItem small value='relevance'>
          Relevance
        </RadiosItem>
        <RadiosItem small value='title'>
          A to Z
        </RadiosItem>
        <RadiosItem small value='updated'>
          Updated (newest)
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const SmallWithHint: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend size='m'>How do you want to sign in?</FieldsetLegend>
      <Radios name='small-sign-in' defaultValue=''>
        <RadiosItem
          small
          value='gateway'
          hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </RadiosItem>
        <RadiosItem
          small
          value='one-login'
          hint="You'll have an account if you've already proved your identity with GOV.UK One Login."
        >
          Sign in with GOV.UK One Login
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const SmallWithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset aria-describedby='small-error-message'>
        <FieldsetLegend size='m'>Filter</FieldsetLegend>
        <ErrorMessage id='small-error-message'>Select a filter</ErrorMessage>
        <Radios name='small-error' defaultValue=''>
          <RadiosItem small value='monthly'>
            Monthly
          </RadiosItem>
          <RadiosItem small value='yearly'>
            Yearly
          </RadiosItem>
        </Radios>
      </Fieldset>
    </FormGroup>
  ),
};

export const SmallWithDivider: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend size='m'>How do you want to sign in?</FieldsetLegend>
      <Radios name='small-divider' defaultValue=''>
        <RadiosItem small value='gateway'>
          Use Government Gateway
        </RadiosItem>
        <RadiosItem small value='one-login'>
          Use GOV.UK One Login
        </RadiosItem>
        <RadiosDivider small />
        <RadiosItem small value='create'>
          Create an account
        </RadiosItem>
      </Radios>
    </Fieldset>
  ),
};

export const SmallWithConditionalReveal: Story = {
  render: () => <ContactRadios id='small-contact' small />,
};
