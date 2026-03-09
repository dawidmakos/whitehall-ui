import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorSummary } from '@/ui/error-summary';
import { ErrorMessage } from '@/ui/error-message';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { TextInput } from '@/ui/text-input';
import { Fieldset, FieldsetLegend } from '@/ui/fieldset';

const meta = {
  title: 'Whitehall-UI/Error Summary',
  component: ErrorSummary,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI error summary component. Use this at the top of a page to summarise validation errors. Based on the [GOV.UK Design System Error Summary](https://design-system.service.gov.uk/components/error-summary/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    titleText: {
      control: 'text',
      description: 'The heading text (default: "There is a problem")',
    },
    descriptionText: {
      control: 'text',
      description: 'Optional description paragraph below the heading',
    },
    errorList: {
      control: 'object',
      description:
        'Array of error items. Each item has a `text` string and an optional `href` string.',
    },
  },
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorList: [
      { text: 'Enter your full name', href: '#full-name' },
      {
        text: 'The date your passport was issued must be in the past',
        href: '#passport-issued-day',
      },
    ],
  },
};

export const SingleError: Story = {
  args: {
    errorList: [{ text: 'Enter your full name', href: '#full-name-input' }],
  },
};

export const WithDescription: Story = {
  args: {
    descriptionText: 'Please fix the following errors before continuing.',
    errorList: [
      { text: 'Enter your full name', href: '#full-name' },
      { text: 'Enter a valid email address', href: '#email' },
    ],
  },
};

export const WithoutLinks: Story = {
  args: {
    errorList: [
      { text: 'Enter your full name' },
      { text: 'Enter a valid date of birth' },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    titleText: 'Mae yna broblem',
    errorList: [{ text: 'Rhowch eich enw llawn', href: '#enw-llawn' }],
  },
};

export const LinkedToTextField: Story = {
  args: {
    errorList: [{ text: 'Enter your full name', href: '#full-name-input' }],
  },
  render: (args) => (
    <>
      <ErrorSummary {...args} />
      <Label htmlFor='full-name-input'>Full name</Label>
      <ErrorMessage id='full-name-input-error'>
        Enter your full name
      </ErrorMessage>
      <TextInput
        id='full-name-input'
        error
        aria-describedby='full-name-input-error'
      />
    </>
  ),
};

export const LinkedToDateFields: Story = {
  args: {
    errorList: [
      {
        text: 'The date your passport was issued must include a year',
        href: '#passport-issued-year',
      },
    ],
  },
  render: (args) => (
    <>
      <ErrorSummary {...args} />
      <Fieldset>
        <FieldsetLegend size='l'>When was your passport issued?</FieldsetLegend>
        <Hint>For example, 27 3 2007</Hint>
        <ErrorMessage id='passport-issued-error'>
          The date your passport was issued must include a year
        </ErrorMessage>
        <div className='flex gap-4'>
          <div>
            <Label htmlFor='passport-issued-day'>Day</Label>
            <TextInput id='passport-issued-day' width={2} />
          </div>
          <div>
            <Label htmlFor='passport-issued-month'>Month</Label>
            <TextInput id='passport-issued-month' width={2} />
          </div>
          <div>
            <Label htmlFor='passport-issued-year'>Year</Label>
            <TextInput id='passport-issued-year' width={4} error />
          </div>
        </div>
      </Fieldset>
    </>
  ),
};
