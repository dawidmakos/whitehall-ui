import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormGroup } from '@/ui/form-group';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { TextInput } from '@/ui/text-input';

const meta = {
  title: 'Whitehall-UI/Form Group',
  component: FormGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI form group. Wraps one question (label, hint, error message and field) and adds the spacing between questions. Pass `error` to show the red left border GOV.UK uses for a question with an error. Based on the form group used by every [GOV.UK Design System](https://design-system.service.gov.uk/components/error-message/) form component.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <FormGroup>
        <Label htmlFor='full-name'>Full name</Label>
        <TextInput id='full-name' width={20} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='email'>Email address</Label>
        <TextInput id='email' type='email' width={20} />
      </FormGroup>
    </>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Label htmlFor='ni-number'>National Insurance number</Label>
      <Hint id='ni-number-hint'>
        It&rsquo;s on your National Insurance card, benefit letter, payslip or
        P60. For example, &lsquo;QQ 12 34 56 C&rsquo;.
      </Hint>
      <ErrorMessage id='ni-number-error'>
        Enter a National Insurance number in the correct format
      </ErrorMessage>
      <TextInput
        id='ni-number'
        width={10}
        error
        aria-describedby='ni-number-hint ni-number-error'
      />
    </FormGroup>
  ),
};
