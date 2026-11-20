import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Radios from '@/ui/radios';
import * as Fieldset from '@/ui/fieldset';
import { FormGroup } from '@/ui/form-group';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { Label } from '@/ui/label';
import { TextInput } from '@/ui/text-input';

const meta = {
  title: 'Whitehall-UI/Radios',
  component: Radios.Root,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI radios component. Lets users select one option from a list. Based on the [GOV.UK Design System Radios](https://design-system.service.gov.uk/components/radios/). Pass `hint` to `Radios.Item` to show hint text under an option; it is linked to the radio with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radios.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
      <Radios.Root name='where-do-you-live' defaultValue=''>
        <Radios.Item value='england'>England</Radios.Item>
        <Radios.Item value='scotland'>Scotland</Radios.Item>
        <Radios.Item value='wales'>Wales</Radios.Item>
        <Radios.Item value='northern-ireland'>Northern Ireland</Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const Inline: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios.Root name='changed-name' inline defaultValue=''>
        <Radios.Item value='yes'>Yes</Radios.Item>
        <Radios.Item value='no'>No</Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const WithHints: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios.Root name='sign-in' defaultValue=''>
        <Radios.Item
          value='gateway'
          hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Radios.Item>

        <Radios.Item
          value='verify'
          hint="You'll have an account if you've already proved your identity with a certified company."
        >
          Sign in with GOV.UK Verify
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
      <Radios.Root name='where-divider' defaultValue=''>
        <Radios.Item value='england'>England</Radios.Item>
        <Radios.Item value='scotland'>Scotland</Radios.Item>
        <Radios.Item value='wales'>Wales</Radios.Item>
        <Radios.Divider />
        <Radios.Item value='abroad'>
          I am a British citizen living abroad
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
      <Radios.Root name='disabled-radios' disabled defaultValue=''>
        <Radios.Item value='england'>England</Radios.Item>
        <Radios.Item value='scotland'>Scotland</Radios.Item>
        <Radios.Item value='wales'>Wales</Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const PreSelected: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Where do you live?</Fieldset.Legend>
      <Radios.Root name='pre-selected' defaultValue='scotland'>
        <Radios.Item value='england'>England</Radios.Item>
        <Radios.Item value='scotland'>Scotland</Radios.Item>
        <Radios.Item value='wales'>Wales</Radios.Item>
        <Radios.Item value='northern-ireland'>Northern Ireland</Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset.Root aria-describedby='changed-name-error-hint changed-name-error'>
        <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
        <Hint id='changed-name-error-hint'>
          This includes changing your last name or spelling your name
          differently
        </Hint>
        <ErrorMessage id='changed-name-error'>
          Select yes if you have changed your name
        </ErrorMessage>
        <Radios.Root name='changed-name-error' inline defaultValue=''>
          <Radios.Item value='yes'>Yes</Radios.Item>
          <Radios.Item value='no'>No</Radios.Item>
        </Radios.Root>
      </Fieldset.Root>
    </FormGroup>
  ),
};

export const LegendAsPageHeading: Story = {
  render: () => (
    <Fieldset.Root aria-describedby='housing-act-hint'>
      <Fieldset.Legend size='l'>
        <Fieldset.Heading>
          Which part of the Housing Act was your licence issued under?
        </Fieldset.Heading>
      </Fieldset.Legend>
      <Hint id='housing-act-hint'>Select one of the options below.</Hint>
      <Radios.Root name='housing-act' defaultValue=''>
        <Radios.Item value='part-2'>Part 2 of the Housing Act 2004</Radios.Item>
        <Radios.Item value='part-3'>Part 3 of the Housing Act 2004</Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
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
    <Radios.Root name='colours' aria-label='Colour' defaultValue=''>
      <Radios.Item value='red'>Red</Radios.Item>
      <Radios.Item value='green'>Green</Radios.Item>
      <Radios.Item value='blue'>Blue</Radios.Item>
    </Radios.Root>
  ),
};

export const LongOptionText: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Which statement best describes you?</Fieldset.Legend>
      <Radios.Root name='long-text' defaultValue=''>
        <Radios.Item
          value='first'
          hint='Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          faucibus mollis interdum. Donec sed odio dui. Cras mattis consectetur
          purus sit amet fermentum. Vestibulum id ligula porta felis euismod
          semper.
        </Radios.Item>
        <Radios.Item value='second'>
          Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla
          non metus auctor fringilla.
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

const ContactRadios = ({ id, small }: { id: string; small?: boolean }) => {
  const [value, setValue] = useState('');

  return (
    <Fieldset.Root aria-describedby={`${id}-hint`}>
      <Fieldset.Legend>How would you prefer to be contacted?</Fieldset.Legend>
      <Hint id={`${id}-hint`}>Select one option</Hint>
      <Radios.Root
        name={id}
        value={value}
        onValueChange={(next) => setValue(String(next))}
      >
        <Radios.Item small={small} value='email'>
          Email
        </Radios.Item>
        {value === 'email' && (
          <Radios.Conditional small={small}>
            <Label htmlFor={`${id}-email`}>Email address</Label>
            <TextInput
              id={`${id}-email`}
              type='email'
              autoComplete='email'
              width={20}
            />
          </Radios.Conditional>
        )}

        <Radios.Item small={small} value='phone'>
          Phone
        </Radios.Item>
        {value === 'phone' && (
          <Radios.Conditional small={small}>
            <Label htmlFor={`${id}-phone`}>Phone number</Label>
            <TextInput
              id={`${id}-phone`}
              type='tel'
              autoComplete='tel'
              width={20}
            />
          </Radios.Conditional>
        )}

        <Radios.Item small={small} value='text'>
          Text message
        </Radios.Item>
        {value === 'text' && (
          <Radios.Conditional small={small}>
            <Label htmlFor={`${id}-mobile`}>Mobile phone number</Label>
            <TextInput
              id={`${id}-mobile`}
              type='tel'
              autoComplete='tel'
              width={20}
            />
          </Radios.Conditional>
        )}
      </Radios.Root>
    </Fieldset.Root>
  );
};

export const ConditionalReveal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Render a `Radios.Conditional` after an item while it is selected. Only reveal one simple question.',
      },
    },
  },
  render: () => <ContactRadios id='contact' />,
};

export const Small: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend size='m'>Filter</Fieldset.Legend>
      <Radios.Root name='small-filter' defaultValue=''>
        <Radios.Item small value='monthly'>
          Monthly
        </Radios.Item>
        <Radios.Item small value='yearly'>
          Yearly
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const SmallInline: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend size='m'>Sort by</Fieldset.Legend>
      <Radios.Root name='small-sort' inline defaultValue='relevance'>
        <Radios.Item small value='relevance'>
          Relevance
        </Radios.Item>
        <Radios.Item small value='title'>
          A to Z
        </Radios.Item>
        <Radios.Item small value='updated'>
          Updated (newest)
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const SmallWithHint: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend size='m'>How do you want to sign in?</Fieldset.Legend>
      <Radios.Root name='small-sign-in' defaultValue=''>
        <Radios.Item
          small
          value='gateway'
          hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Radios.Item>
        <Radios.Item
          small
          value='one-login'
          hint="You'll have an account if you've already proved your identity with GOV.UK One Login."
        >
          Sign in with GOV.UK One Login
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const SmallWithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset.Root aria-describedby='small-error-message'>
        <Fieldset.Legend size='m'>Filter</Fieldset.Legend>
        <ErrorMessage id='small-error-message'>Select a filter</ErrorMessage>
        <Radios.Root name='small-error' defaultValue=''>
          <Radios.Item small value='monthly'>
            Monthly
          </Radios.Item>
          <Radios.Item small value='yearly'>
            Yearly
          </Radios.Item>
        </Radios.Root>
      </Fieldset.Root>
    </FormGroup>
  ),
};

export const SmallWithDivider: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend size='m'>How do you want to sign in?</Fieldset.Legend>
      <Radios.Root name='small-divider' defaultValue=''>
        <Radios.Item small value='gateway'>
          Use Government Gateway
        </Radios.Item>
        <Radios.Item small value='one-login'>
          Use GOV.UK One Login
        </Radios.Item>
        <Radios.Divider small />
        <Radios.Item small value='create'>
          Create an account
        </Radios.Item>
      </Radios.Root>
    </Fieldset.Root>
  ),
};

export const SmallWithConditionalReveal: Story = {
  render: () => <ContactRadios id='small-contact' small />,
};
