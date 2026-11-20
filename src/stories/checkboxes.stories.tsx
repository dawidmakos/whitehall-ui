import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as Checkboxes from '@/ui/checkboxes';
import * as Fieldset from '@/ui/fieldset';
import { FormGroup } from '@/ui/form-group';
import { Hint } from '@/ui/hint';
import { Label } from '@/ui/label';
import { TextInput } from '@/ui/text-input';
import { ErrorMessage } from '@/ui/error-message';

const meta = {
  title: 'Whitehall-UI/Checkboxes',
  component: Checkboxes.Root,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI checkboxes component. Lets users select one or more options from a list, or toggle a single option on or off. Based on the [GOV.UK Design System Checkboxes](https://design-system.service.gov.uk/components/checkboxes/). Pass `hint` to `Checkboxes.Item` to show hint text under an option; it is linked to the checkbox with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkboxes.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Which types of waste do you transport?</Fieldset.Legend>
      <Hint>Select all that apply</Hint>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item name='waste' value='animal'>
          Waste from animal carcasses
        </Checkboxes.Item>
        <Checkboxes.Item name='waste' value='mines'>
          Waste from mines or quarries
        </Checkboxes.Item>
        <Checkboxes.Item name='waste' value='farm'>
          Farm or agricultural waste
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  ),
};

export const WithHints: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
      <Hint>
        If you have dual nationality, select all options that are relevant to
        you.
      </Hint>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item
          name='nationality'
          value='british'
          hint='including English, Scottish, Welsh and Northern Irish'
        >
          British
        </Checkboxes.Item>

        <Checkboxes.Item name='nationality' value='irish'>
          Irish
        </Checkboxes.Item>

        <Checkboxes.Item name='nationality' value='other'>
          Citizen of another country
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
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
    <Fieldset.Root>
      <Fieldset.Legend>
        Will you be travelling to any of these countries?
      </Fieldset.Legend>
      <Hint>Select all that apply</Hint>
      <Checkboxes.Root value={values} onValueChange={handleChange}>
        <Checkboxes.Item small={small} name='countries' value='france'>
          France
        </Checkboxes.Item>
        <Checkboxes.Item small={small} name='countries' value='portugal'>
          Portugal
        </Checkboxes.Item>
        <Checkboxes.Item small={small} name='countries' value='spain'>
          Spain
        </Checkboxes.Item>
        <Checkboxes.Divider small={small} />
        <Checkboxes.Item small={small} name='countries' value='none'>
          No, I will not be travelling to any of these countries
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  );
};

export const WithNoneOption: Story = {
  render: () => <WithNoneOptionRender />,
};

const WithNoneAndConditionalRender = () => {
  const [values, handleChange] = useExclusiveNone();

  return (
    <Fieldset.Root>
      <Fieldset.Legend>Do you have any access needs?</Fieldset.Legend>
      <Hint>Select all that apply</Hint>
      <Checkboxes.Root value={values} onValueChange={handleChange}>
        <Checkboxes.Item name='access-needs' value='toilets'>
          Accessible toilets available
        </Checkboxes.Item>
        <Checkboxes.Item name='access-needs' value='braille'>
          Braille translation service available
        </Checkboxes.Item>
        <Checkboxes.Item name='access-needs' value='other'>
          Something else
        </Checkboxes.Item>
        {values.includes('other') && (
          <Checkboxes.Conditional>
            <Label htmlFor='access-needs-other'>
              Describe your access needs
            </Label>
            <TextInput id='access-needs-other' width={20} />
          </Checkboxes.Conditional>
        )}
        <Checkboxes.Divider />
        <Checkboxes.Item name='access-needs' value='none'>
          No, I do not have any access needs
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  );
};

export const WithNoneAndConditional: Story = {
  render: () => <WithNoneAndConditionalRender />,
};

export const PreChecked: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>How do you want to be contacted?</Fieldset.Legend>
      <Hint>Select all that apply</Hint>
      <Checkboxes.Root defaultValue={['email', 'text']}>
        <Checkboxes.Item name='contact-pre' value='email'>
          Email
        </Checkboxes.Item>
        <Checkboxes.Item name='contact-pre' value='phone'>
          Phone
        </Checkboxes.Item>
        <Checkboxes.Item name='contact-pre' value='text'>
          Text message
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  ),
};

export const LegendAsPageHeading: Story = {
  render: () => (
    <Fieldset.Root aria-describedby='waste-heading-hint'>
      <Fieldset.Legend size='l'>
        <Fieldset.Heading>
          Which types of waste do you transport regularly?
        </Fieldset.Heading>
      </Fieldset.Legend>
      <Hint id='waste-heading-hint'>Select all that apply</Hint>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item name='waste-heading' value='animal'>
          Waste from animal carcasses
        </Checkboxes.Item>
        <Checkboxes.Item name='waste-heading' value='mines'>
          Waste from mines or quarries
        </Checkboxes.Item>
        <Checkboxes.Item name='waste-heading' value='farm'>
          Farm or agricultural waste
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  ),
};

export const LongOptionText: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Which statements apply to you?</Fieldset.Legend>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item
          name='long-text'
          value='first'
          hint='Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          faucibus mollis interdum. Donec sed odio dui. Cras mattis consectetur
          purus sit amet fermentum. Vestibulum id ligula porta felis euismod
          semper.
        </Checkboxes.Item>
        <Checkboxes.Item name='long-text' value='second'>
          Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a
          ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla
          non metus auctor fringilla.
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
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
    <Fieldset.Root>
      <Fieldset.Legend>How would you like to be contacted?</Fieldset.Legend>
      <Hint>Select all that apply</Hint>
      <Checkboxes.Root value={values} onValueChange={setValues}>
        <Checkboxes.Item small={small} name={id} value='email'>
          Email
        </Checkboxes.Item>
        {values.includes('email') && (
          <Checkboxes.Conditional small={small}>
            <Label htmlFor={`${id}-email`}>Email address</Label>
            <TextInput
              id={`${id}-email`}
              name={`${id}-email`}
              type='email'
              width={20}
            />
          </Checkboxes.Conditional>
        )}

        <Checkboxes.Item small={small} name={id} value='phone'>
          Phone
        </Checkboxes.Item>
        {values.includes('phone') && (
          <Checkboxes.Conditional small={small}>
            <Label htmlFor={`${id}-phone`}>Phone number</Label>
            <TextInput
              id={`${id}-phone`}
              name={`${id}-phone`}
              type='tel'
              width={20}
            />
          </Checkboxes.Conditional>
        )}

        <Checkboxes.Item small={small} name={id} value='text'>
          Text message
        </Checkboxes.Item>
        {values.includes('text') && (
          <Checkboxes.Conditional small={small}>
            <Label htmlFor={`${id}-mobile`}>Mobile phone number</Label>
            <TextInput
              id={`${id}-mobile`}
              name={`${id}-mobile`}
              type='tel'
              width={20}
            />
          </Checkboxes.Conditional>
        )}
      </Checkboxes.Root>
    </Fieldset.Root>
  );
};

export const ConditionalReveal: Story = {
  render: () => <ConditionalRevealRender id='contact' />,
};

export const Small: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Organisation</Fieldset.Legend>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item small name='organisation' value='hmrc'>
          HM Revenue and Customs (HMRC)
        </Checkboxes.Item>
        <Checkboxes.Item small name='organisation' value='employment'>
          Employment Tribunal
        </Checkboxes.Item>
        <Checkboxes.Item small name='organisation' value='mod'>
          Ministry of Defence
        </Checkboxes.Item>
        <Checkboxes.Item small name='organisation' value='dfe'>
          Department for Education
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  ),
};

export const SmallWithHint: Story = {
  render: () => (
    <Fieldset.Root>
      <Fieldset.Legend>Filter by</Fieldset.Legend>
      <Checkboxes.Root defaultValue={[]}>
        <Checkboxes.Item
          small
          name='small-hint'
          value='open'
          hint='Consultations you can still respond to'
        >
          Open consultations
        </Checkboxes.Item>
        <Checkboxes.Item
          small
          name='small-hint'
          value='closed'
          hint='Consultations that have closed for responses'
        >
          Closed consultations
        </Checkboxes.Item>
      </Checkboxes.Root>
    </Fieldset.Root>
  ),
};

export const SmallWithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset.Root aria-describedby='small-filter-error'>
        <Fieldset.Legend>Filter by</Fieldset.Legend>
        <ErrorMessage id='small-filter-error'>
          Select at least one filter
        </ErrorMessage>
        <Checkboxes.Root defaultValue={[]}>
          <Checkboxes.Item small name='small-error' value='open'>
            Open consultations
          </Checkboxes.Item>
          <Checkboxes.Item small name='small-error' value='closed'>
            Closed consultations
          </Checkboxes.Item>
        </Checkboxes.Root>
      </Fieldset.Root>
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
      <Fieldset.Root aria-describedby='nationality-error-hint nationality-error'>
        <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
        <Hint id='nationality-error-hint'>
          If you have dual nationality, select all options that are relevant
          to you.
        </Hint>
        <ErrorMessage id='nationality-error'>
          Select if you are British, Irish or a citizen of a different country
        </ErrorMessage>
        <Checkboxes.Root defaultValue={[]}>
          <Checkboxes.Item
            name='nationality'
            value='british'
            hint='including English, Scottish, Welsh and Northern Irish'
          >
            British
          </Checkboxes.Item>

          <Checkboxes.Item name='nationality' value='irish'>
            Irish
          </Checkboxes.Item>

          <Checkboxes.Item name='nationality' value='other'>
            Citizen of another country
          </Checkboxes.Item>
        </Checkboxes.Root>
      </Fieldset.Root>
    </FormGroup>
  ),
};
