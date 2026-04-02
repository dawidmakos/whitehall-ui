import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DateInput,
  DateInputItem,
  DateInputLabel,
  DateInputInput,
} from '@/ui/date-input';
import { Fieldset, FieldsetLegend, FieldsetHeading } from '@/ui/fieldset';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';

const meta = {
  title: 'Whitehall-UI/DateInput',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI date input component. Based on the [GOV.UK Design System Date Input](https://design-system.service.gov.uk/components/date-input/). Uses three separate text inputs for day, month, and year.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset role='group' aria-describedby='passport-issued-hint'>
      <FieldsetLegend size='l'>
        <FieldsetHeading>When was your passport issued?</FieldsetHeading>
      </FieldsetLegend>
      <Hint id='passport-issued-hint'>For example, 27 3 2007</Hint>
      <DateInput id='passport-issued'>
        <DateInputItem>
          <DateInputLabel htmlFor='passport-issued-day'>Day</DateInputLabel>
          <DateInputInput
            id='passport-issued-day'
            name='passport-issued-day'
            className='max-w-govuk-input-width-2'
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='passport-issued-month'>Month</DateInputLabel>
          <DateInputInput
            id='passport-issued-month'
            name='passport-issued-month'
            className='max-w-govuk-input-width-2'
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='passport-issued-year'>Year</DateInputLabel>
          <DateInputInput
            id='passport-issued-year'
            name='passport-issued-year'
            className='max-w-govuk-input-width-4'
          />
        </DateInputItem>
      </DateInput>
    </Fieldset>
  ),
};

export const WithError: Story = {
  render: () => (
    <Fieldset role='group' aria-describedby='dob-hint dob-error'>
      <FieldsetLegend size='l'>
        <FieldsetHeading>What is your date of birth?</FieldsetHeading>
      </FieldsetLegend>
      <Hint id='dob-hint'>For example, 31 3 1980</Hint>
      <ErrorMessage id='dob-error'>
        The date your passport was issued must include a year
      </ErrorMessage>
      <DateInput id='dob'>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-day'>Day</DateInputLabel>
          <DateInputInput
            id='dob-day'
            name='dob-day'
            className='max-w-govuk-input-width-2'
            defaultValue='21'
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-month'>Month</DateInputLabel>
          <DateInputInput
            id='dob-month'
            name='dob-month'
            className='max-w-govuk-input-width-2'
            defaultValue='3'
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-year'>Year</DateInputLabel>
          <DateInputInput
            id='dob-year'
            name='dob-year'
            className='max-w-govuk-input-width-4'
            error
          />
        </DateInputItem>
      </DateInput>
    </Fieldset>
  ),
};

export const WithAllFieldsInError: Story = {
  render: () => (
    <Fieldset role='group' aria-describedby='date-error'>
      <FieldsetLegend size='l'>
        <FieldsetHeading>What is your date of birth?</FieldsetHeading>
      </FieldsetLegend>
      <ErrorMessage id='date-error'>
        Date of birth must include a day, month and year
      </ErrorMessage>
      <DateInput id='dob-all-error'>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-all-error-day'>Day</DateInputLabel>
          <DateInputInput
            id='dob-all-error-day'
            name='dob-all-error-day'
            className='max-w-govuk-input-width-2'
            error
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-all-error-month'>Month</DateInputLabel>
          <DateInputInput
            id='dob-all-error-month'
            name='dob-all-error-month'
            className='max-w-govuk-input-width-2'
            error
          />
        </DateInputItem>
        <DateInputItem>
          <DateInputLabel htmlFor='dob-all-error-year'>Year</DateInputLabel>
          <DateInputInput
            id='dob-all-error-year'
            name='dob-all-error-year'
            className='max-w-govuk-input-width-4'
            error
          />
        </DateInputItem>
      </DateInput>
    </Fieldset>
  ),
};
