import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Checkboxes,
  CheckboxesItem,
  CheckboxesHint,
  CheckboxesDivider,
  CheckboxesConditional,
} from '@/ui/checkboxes';

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
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Which types of waste do you transport?
      </legend>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
          marginBottom: '15px',
        }}
      >
        Select all that apply
      </p>
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
        What is your nationality?
      </legend>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
          marginBottom: '15px',
        }}
      >
        If you have dual nationality, select all options that are relevant to
        you.
      </p>
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
    </fieldset>
  ),
};

function WithNoneOptionRender() {
  const [values, setValues] = useState<string[]>([]);

  function handleChange(next: string[]) {
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
  }

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Will you be travelling to any of these countries?
      </legend>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
          marginBottom: '15px',
        }}
      >
        Select all that apply
      </p>
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
    </fieldset>
  );
}

export const WithNoneOption: Story = {
  args: {
    children: null,
  },
  render: () => <WithNoneOptionRender />,
};

const inputStyle = {
  display: 'block',
  fontFamily: 'Arial, sans-serif',
  fontSize: '19px',
  border: '2px solid #0b0c0c',
  padding: '5px',
  height: '40px',
  width: '100%',
  maxWidth: '20.5em',
  boxSizing: 'border-box' as const,
  marginTop: '5px',
};

const fieldLabelStyle = {
  display: 'block',
  fontFamily: 'Arial, sans-serif',
  fontSize: '19px',
  fontWeight: 400,
};

function ConditionalRevealRender() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        How would you like to be contacted?
      </legend>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
          marginBottom: '15px',
        }}
      >
        Select all that apply
      </p>
      <Checkboxes value={values} onValueChange={setValues}>
        <CheckboxesItem name='contact' value='email'>
          Email
        </CheckboxesItem>
        {values.includes('email') && (
          <CheckboxesConditional>
            <label style={fieldLabelStyle}>
              Email address
              <input type='email' name='email-address' style={inputStyle} />
            </label>
          </CheckboxesConditional>
        )}

        <CheckboxesItem name='contact' value='phone'>
          Phone
        </CheckboxesItem>
        {values.includes('phone') && (
          <CheckboxesConditional>
            <label style={fieldLabelStyle}>
              Phone number
              <input type='tel' name='phone-number' style={inputStyle} />
            </label>
          </CheckboxesConditional>
        )}

        <CheckboxesItem name='contact' value='text'>
          Text message
        </CheckboxesItem>
        {values.includes('text') && (
          <CheckboxesConditional>
            <label style={fieldLabelStyle}>
              Mobile phone number
              <input type='tel' name='mobile-number' style={inputStyle} />
            </label>
          </CheckboxesConditional>
        )}
      </Checkboxes>
    </fieldset>
  );
}

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
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Organisation
      </legend>
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
    </fieldset>
  ),
};

export const Error: Story = {
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
        What is your nationality?
      </legend>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          color: '#505a5f',
          marginBottom: '15px',
        }}
      >
        If you have dual nationality, select all options that are relevant to
        you.
      </p>
      <p
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          fontWeight: 700,
          color: '#d4351c',
          marginBottom: '15px',
        }}
      >
        <span
          style={{
            border: 'none',
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: '1px',
          }}
        >
          Error:
        </span>
        Select if you are British, Irish or a citizen of a different country
      </p>
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
    </fieldset>
  ),
};
