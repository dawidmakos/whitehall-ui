import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Checkboxes,
  CheckboxesItem,
  CheckboxesHint,
  CheckboxesDivider,
  CheckboxesConditional,
} from '@/ui/checkboxes';
import { Fieldset, FieldsetLegend } from '@/ui/fieldset';
import { Hint } from '@/ui/hint';
import { Label } from '@/ui/label';
import { TextInput } from '@/ui/text-input';
import { ErrorMessage } from '@/ui/error-message';

const meta = {
  title: 'Whitehall-UI/Checkboxes',
  component: Checkboxes,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI checkboxes component. Lets users select one or more options from a list, or toggle a single option on or off. Based on the [GOV.UK Design System Checkboxes](https://design-system.service.gov.uk/components/checkboxes/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkboxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Which types of waste do you transport?</FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem name='waste' value='animal'>
          Waste from animal carcasses
        </CheckboxesItem>
        <CheckboxesItem name='waste' value='mines'>
          Waste from mines or quarries
        </CheckboxesItem>
        <CheckboxesItem name='waste' value='farm'>
          Farm or agricultural waste
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

export const WithHints: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>What is your nationality?</FieldsetLegend>
      <Hint>
        If you have dual nationality, select all options that are relevant to
        you.
      </Hint>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem name='nationality' value='british'>
          British
        </CheckboxesItem>
        <CheckboxesHint>
          including English, Scottish, Welsh and Northern Irish
        </CheckboxesHint>

        <CheckboxesItem name='nationality' value='irish'>
          Irish
        </CheckboxesItem>

        <CheckboxesItem name='nationality' value='other'>
          Citizen of another country
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

const WithNoneOptionRender = () => {
  const [values, setValues] = useState<string[]>([]);

  const handleChange = (next: string[]) => {
    const addedNone = next.includes('none') && !values.includes('none');
    const addedOther =
      next.filter((v) => v !== 'none').length >
      values.filter((v) => v !== 'none').length;

    if (addedNone) {
      setValues(['none']);
    } else if (addedOther) {
      setValues(next.filter((v) => v !== 'none'));
    } else {
      setValues(next);
    }
  };

  return (
    <Fieldset>
      <FieldsetLegend>
        Will you be travelling to any of these countries?
      </FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes value={values} onValueChange={handleChange}>
        <CheckboxesItem name='countries' value='france'>
          France
        </CheckboxesItem>
        <CheckboxesItem name='countries' value='portugal'>
          Portugal
        </CheckboxesItem>
        <CheckboxesItem name='countries' value='spain'>
          Spain
        </CheckboxesItem>
        <CheckboxesDivider />
        <CheckboxesItem name='countries' value='none'>
          No, I will not be travelling to any of these countries
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  );
};

export const WithNoneOption: Story = {
  args: {
    children: null,
  },
  render: () => <WithNoneOptionRender />,
};

const ConditionalRevealRender = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Fieldset>
      <FieldsetLegend>How would you like to be contacted?</FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes value={values} onValueChange={setValues}>
        <CheckboxesItem name='contact' value='email'>
          Email
        </CheckboxesItem>
        {values.includes('email') && (
          <CheckboxesConditional>
            <Label htmlFor='email-address'>Email address</Label>
            <TextInput
              id='email-address'
              name='email-address'
              type='email'
              width={20}
            />
          </CheckboxesConditional>
        )}

        <CheckboxesItem name='contact' value='phone'>
          Phone
        </CheckboxesItem>
        {values.includes('phone') && (
          <CheckboxesConditional>
            <Label htmlFor='phone-number'>Phone number</Label>
            <TextInput
              id='phone-number'
              name='phone-number'
              type='tel'
              width={20}
            />
          </CheckboxesConditional>
        )}

        <CheckboxesItem name='contact' value='text'>
          Text message
        </CheckboxesItem>
        {values.includes('text') && (
          <CheckboxesConditional>
            <Label htmlFor='mobile-number'>Mobile phone number</Label>
            <TextInput
              id='mobile-number'
              name='mobile-number'
              type='tel'
              width={20}
            />
          </CheckboxesConditional>
        )}
      </Checkboxes>
    </Fieldset>
  );
};

export const ConditionalReveal: Story = {
  args: {
    children: null,
  },
  render: () => <ConditionalRevealRender />,
};

export const Small: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>Organisation</FieldsetLegend>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem small name='organisation' value='hmrc'>
          HM Revenue and Customs (HMRC)
        </CheckboxesItem>
        <CheckboxesItem small name='organisation' value='employment'>
          Employment Tribunal
        </CheckboxesItem>
        <CheckboxesItem small name='organisation' value='mod'>
          Ministry of Defence
        </CheckboxesItem>
        <CheckboxesItem small name='organisation' value='dfe'>
          Department for Education
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

export const WithError: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Fieldset>
      <FieldsetLegend>What is your nationality?</FieldsetLegend>
      <Hint>
        If you have dual nationality, select all options that are relevant to
        you.
      </Hint>
      <ErrorMessage>
        Select if you are British, Irish or a citizen of a different country
      </ErrorMessage>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem name='nationality' value='british'>
          British
        </CheckboxesItem>
        <CheckboxesHint>
          including English, Scottish, Welsh and Northern Irish
        </CheckboxesHint>

        <CheckboxesItem name='nationality' value='irish'>
          Irish
        </CheckboxesItem>

        <CheckboxesItem name='nationality' value='other'>
          Citizen of another country
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};
