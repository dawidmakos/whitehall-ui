import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import {
  Checkboxes,
  CheckboxesItem,
  CheckboxesDivider,
  CheckboxesConditional,
} from '@/ui/checkboxes';
import { Fieldset, FieldsetLegend, FieldsetHeading } from '@/ui/fieldset';
import { FormGroup } from '@/ui/form-group';
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
          'Whitehall-UI checkboxes component. Lets users select one or more options from a list, or toggle a single option on or off. Based on the [GOV.UK Design System Checkboxes](https://design-system.service.gov.uk/components/checkboxes/). Pass `hint` to `CheckboxesItem` to show hint text under an option; it is linked to the checkbox with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkboxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
  render: () => (
    <Fieldset>
      <FieldsetLegend>What is your nationality?</FieldsetLegend>
      <Hint>
        If you have dual nationality, select all options that are relevant to
        you.
      </Hint>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem
          name='nationality'
          value='british'
          hint='including English, Scottish, Welsh and Northern Irish'
        >
          British
        </CheckboxesItem>

        <CheckboxesItem name='nationality' value='irish'>
          Irish
        </CheckboxesItem>

        <CheckboxesItem name='nationality' value='other'>
          Citizen of another country
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('checkbox', { name: 'British' }),
    ).toHaveAccessibleDescription(
      'including English, Scottish, Welsh and Northern Irish',
    );
  },
};

const useExclusiveNone = () => {
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

  return [values, handleChange] as const;
};

const WithNoneOptionRender = ({ small }: { small?: boolean }) => {
  const [values, handleChange] = useExclusiveNone();

  return (
    <Fieldset>
      <FieldsetLegend>
        Will you be travelling to any of these countries?
      </FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes value={values} onValueChange={handleChange}>
        <CheckboxesItem small={small} name='countries' value='france'>
          France
        </CheckboxesItem>
        <CheckboxesItem small={small} name='countries' value='portugal'>
          Portugal
        </CheckboxesItem>
        <CheckboxesItem small={small} name='countries' value='spain'>
          Spain
        </CheckboxesItem>
        <CheckboxesDivider small={small} />
        <CheckboxesItem small={small} name='countries' value='none'>
          No, I will not be travelling to any of these countries
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  );
};

export const WithNoneOption: Story = {
  render: () => <WithNoneOptionRender />,
};

const WithNoneAndConditionalRender = () => {
  const [values, handleChange] = useExclusiveNone();

  return (
    <Fieldset>
      <FieldsetLegend>Do you have any access needs?</FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes value={values} onValueChange={handleChange}>
        <CheckboxesItem name='access-needs' value='toilets'>
          Accessible toilets available
        </CheckboxesItem>
        <CheckboxesItem name='access-needs' value='braille'>
          Braille translation service available
        </CheckboxesItem>
        <CheckboxesItem name='access-needs' value='other'>
          Something else
        </CheckboxesItem>
        {values.includes('other') && (
          <CheckboxesConditional>
            <Label htmlFor='access-needs-other'>
              Describe your access needs
            </Label>
            <TextInput id='access-needs-other' width={20} />
          </CheckboxesConditional>
        )}
        <CheckboxesDivider />
        <CheckboxesItem name='access-needs' value='none'>
          No, I do not have any access needs
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  );
};

export const WithNoneAndConditional: Story = {
  render: () => <WithNoneAndConditionalRender />,
};

export const PreChecked: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>How do you want to be contacted?</FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes defaultValue={['email', 'text']}>
        <CheckboxesItem name='contact-pre' value='email'>
          Email
        </CheckboxesItem>
        <CheckboxesItem name='contact-pre' value='phone'>
          Phone
        </CheckboxesItem>
        <CheckboxesItem name='contact-pre' value='text'>
          Text message
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

export const LegendAsPageHeading: Story = {
  render: () => (
    <Fieldset aria-describedby='waste-heading-hint'>
      <FieldsetLegend size='l'>
        <FieldsetHeading>
          Which types of waste do you transport regularly?
        </FieldsetHeading>
      </FieldsetLegend>
      <Hint id='waste-heading-hint'>Select all that apply</Hint>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem name='waste-heading' value='animal'>
          Waste from animal carcasses
        </CheckboxesItem>
        <CheckboxesItem name='waste-heading' value='mines'>
          Waste from mines or quarries
        </CheckboxesItem>
        <CheckboxesItem name='waste-heading' value='farm'>
          Farm or agricultural waste
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

export const LongOptionText: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Which statements apply to you?</FieldsetLegend>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem
          name='long-text'
          value='first'
          hint='Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          faucibus mollis interdum. Donec sed odio dui. Cras mattis consectetur
          purus sit amet fermentum. Vestibulum id ligula porta felis euismod
          semper.
        </CheckboxesItem>
        <CheckboxesItem name='long-text' value='second'>
          Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla
          non metus auctor fringilla.
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

const ConditionalRevealRender = ({
  id,
  small,
}: {
  id: string;
  small?: boolean;
}) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Fieldset>
      <FieldsetLegend>How would you like to be contacted?</FieldsetLegend>
      <Hint>Select all that apply</Hint>
      <Checkboxes value={values} onValueChange={setValues}>
        <CheckboxesItem small={small} name={id} value='email'>
          Email
        </CheckboxesItem>
        {values.includes('email') && (
          <CheckboxesConditional small={small}>
            <Label htmlFor={`${id}-email`}>Email address</Label>
            <TextInput
              id={`${id}-email`}
              name={`${id}-email`}
              type='email'
              width={20}
            />
          </CheckboxesConditional>
        )}

        <CheckboxesItem small={small} name={id} value='phone'>
          Phone
        </CheckboxesItem>
        {values.includes('phone') && (
          <CheckboxesConditional small={small}>
            <Label htmlFor={`${id}-phone`}>Phone number</Label>
            <TextInput
              id={`${id}-phone`}
              name={`${id}-phone`}
              type='tel'
              width={20}
            />
          </CheckboxesConditional>
        )}

        <CheckboxesItem small={small} name={id} value='text'>
          Text message
        </CheckboxesItem>
        {values.includes('text') && (
          <CheckboxesConditional small={small}>
            <Label htmlFor={`${id}-mobile`}>Mobile phone number</Label>
            <TextInput
              id={`${id}-mobile`}
              name={`${id}-mobile`}
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
  render: () => <ConditionalRevealRender id='contact' />,
};

export const Small: Story = {
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

export const SmallWithHint: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Filter by</FieldsetLegend>
      <Checkboxes defaultValue={[]}>
        <CheckboxesItem
          small
          name='small-hint'
          value='open'
          hint='Consultations you can still respond to'
        >
          Open consultations
        </CheckboxesItem>
        <CheckboxesItem
          small
          name='small-hint'
          value='closed'
          hint='Consultations that have closed for responses'
        >
          Closed consultations
        </CheckboxesItem>
      </Checkboxes>
    </Fieldset>
  ),
};

export const SmallWithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset aria-describedby='small-filter-error'>
        <FieldsetLegend>Filter by</FieldsetLegend>
        <ErrorMessage id='small-filter-error'>
          Select at least one filter
        </ErrorMessage>
        <Checkboxes defaultValue={[]}>
          <CheckboxesItem small name='small-error' value='open'>
            Open consultations
          </CheckboxesItem>
          <CheckboxesItem small name='small-error' value='closed'>
            Closed consultations
          </CheckboxesItem>
        </Checkboxes>
      </Fieldset>
    </FormGroup>
  ),
};

export const SmallWithConditionalReveal: Story = {
  render: () => <ConditionalRevealRender id='small-contact' small />,
};

export const SmallWithNoneOption: Story = {
  render: () => <WithNoneOptionRender small />,
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset aria-describedby='nationality-error-hint nationality-error'>
        <FieldsetLegend>What is your nationality?</FieldsetLegend>
        <Hint id='nationality-error-hint'>
          If you have dual nationality, select all options that are relevant
          to you.
        </Hint>
        <ErrorMessage id='nationality-error'>
          Select if you are British, Irish or a citizen of a different country
        </ErrorMessage>
        <Checkboxes defaultValue={[]}>
          <CheckboxesItem
            name='nationality'
            value='british'
            hint='including English, Scottish, Welsh and Northern Irish'
          >
            British
          </CheckboxesItem>

          <CheckboxesItem name='nationality' value='irish'>
            Irish
          </CheckboxesItem>

          <CheckboxesItem name='nationality' value='other'>
            Citizen of another country
          </CheckboxesItem>
        </Checkboxes>
      </Fieldset>
    </FormGroup>
  ),
};
