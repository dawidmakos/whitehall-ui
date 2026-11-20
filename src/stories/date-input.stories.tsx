import type { Meta, StoryObj } from '@storybook/react-vite';
import * as DateInput from '@/ui/date-input';
import * as Fieldset from '@/ui/fieldset';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { FormGroup } from '@/ui/form-group';

const meta = {
  title: 'Whitehall-UI/DateInput',
  component: DateInput.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI date input component. Based on the [GOV.UK Design System Date Input](https://design-system.service.gov.uk/components/date-input/). Uses three separate text inputs for day, month, and year.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateInput.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset.Root role='group' aria-describedby='passport-issued-hint'>
      <Fieldset.Legend size='l'>
        <Fieldset.Heading>When was your passport issued?</Fieldset.Heading>
      </Fieldset.Legend>
      <Hint id='passport-issued-hint'>For example, 27 3 2007</Hint>
      <DateInput.Root id='passport-issued'>
        <DateInput.Item>
          <DateInput.Label htmlFor='passport-issued-day'>Day</DateInput.Label>
          <DateInput.Input
            id='passport-issued-day'
            name='passport-issued-day'
            className='max-w-govuk-input-width-2'
          />
        </DateInput.Item>
        <DateInput.Item>
          <DateInput.Label htmlFor='passport-issued-month'>Month</DateInput.Label>
          <DateInput.Input
            id='passport-issued-month'
            name='passport-issued-month'
            className='max-w-govuk-input-width-2'
          />
        </DateInput.Item>
        <DateInput.Item>
          <DateInput.Label htmlFor='passport-issued-year'>Year</DateInput.Label>
          <DateInput.Input
            id='passport-issued-year'
            name='passport-issued-year'
            className='max-w-govuk-input-width-4'
          />
        </DateInput.Item>
      </DateInput.Root>
    </Fieldset.Root>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset.Root role='group' aria-describedby='dob-hint dob-error'>
        <Fieldset.Legend size='l'>
          <Fieldset.Heading>What is your date of birth?</Fieldset.Heading>
        </Fieldset.Legend>
        <Hint id='dob-hint'>For example, 31 3 1980</Hint>
        <ErrorMessage id='dob-error'>
          The date your passport was issued must include a year
        </ErrorMessage>
        <DateInput.Root id='dob'>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-day'>Day</DateInput.Label>
            <DateInput.Input
              id='dob-day'
              name='dob-day'
              className='max-w-govuk-input-width-2'
              defaultValue='21'
            />
          </DateInput.Item>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-month'>Month</DateInput.Label>
            <DateInput.Input
              id='dob-month'
              name='dob-month'
              className='max-w-govuk-input-width-2'
              defaultValue='3'
            />
          </DateInput.Item>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-year'>Year</DateInput.Label>
            <DateInput.Input
              id='dob-year'
              name='dob-year'
              className='max-w-govuk-input-width-4'
              error
            />
          </DateInput.Item>
        </DateInput.Root>
      </Fieldset.Root>
    </FormGroup>
  ),
};

export const WithAllFieldsInError: Story = {
  render: () => (
    <FormGroup error>
      <Fieldset.Root role='group' aria-describedby='date-error'>
        <Fieldset.Legend size='l'>
          <Fieldset.Heading>What is your date of birth?</Fieldset.Heading>
        </Fieldset.Legend>
        <ErrorMessage id='date-error'>
          Date of birth must include a day, month and year
        </ErrorMessage>
        <DateInput.Root id='dob-all-error'>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-all-error-day'>Day</DateInput.Label>
            <DateInput.Input
              id='dob-all-error-day'
              name='dob-all-error-day'
              className='max-w-govuk-input-width-2'
              error
            />
          </DateInput.Item>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-all-error-month'>Month</DateInput.Label>
            <DateInput.Input
              id='dob-all-error-month'
              name='dob-all-error-month'
              className='max-w-govuk-input-width-2'
              error
            />
          </DateInput.Item>
          <DateInput.Item>
            <DateInput.Label htmlFor='dob-all-error-year'>Year</DateInput.Label>
            <DateInput.Input
              id='dob-all-error-year'
              name='dob-all-error-year'
              className='max-w-govuk-input-width-4'
              error
            />
          </DateInput.Item>
        </DateInput.Root>
      </Fieldset.Root>
    </FormGroup>
  ),
};

export const DayAndMonth: Story = {
  render: () => (
    <Fieldset.Root role='group' aria-describedby='bday-hint'>
      <Fieldset.Legend>What is your birthday?</Fieldset.Legend>
      <Hint id='bday-hint'>For example, 5 12</Hint>
      <DateInput.Root id='bday'>
        <DateInput.Item>
          <DateInput.Label htmlFor='bday-day'>Day</DateInput.Label>
          <DateInput.Input
            id='bday-day'
            name='bday-day'
            className='max-w-govuk-input-width-2'
          />
        </DateInput.Item>
        <DateInput.Item>
          <DateInput.Label htmlFor='bday-month'>Month</DateInput.Label>
          <DateInput.Input
            id='bday-month'
            name='bday-month'
            className='max-w-govuk-input-width-2'
          />
        </DateInput.Item>
      </DateInput.Root>
    </Fieldset.Root>
  ),
};

export const MonthAndYear: Story = {
  render: () => (
    <Fieldset.Root role='group' aria-describedby='moved-hint'>
      <Fieldset.Legend>When did you move to this property?</Fieldset.Legend>
      <Hint id='moved-hint'>For example, 3 1980</Hint>
      <DateInput.Root id='moved'>
        <DateInput.Item>
          <DateInput.Label htmlFor='moved-month'>Month</DateInput.Label>
          <DateInput.Input
            id='moved-month'
            name='moved-month'
            className='max-w-govuk-input-width-2'
          />
        </DateInput.Item>
        <DateInput.Item>
          <DateInput.Label htmlFor='moved-year'>Year</DateInput.Label>
          <DateInput.Input
            id='moved-year'
            name='moved-year'
            className='max-w-govuk-input-width-4'
          />
        </DateInput.Item>
      </DateInput.Root>
    </Fieldset.Root>
  ),
};
