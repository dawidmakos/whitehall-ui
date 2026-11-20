import type { Meta, StoryObj } from '@storybook/react-vite';
import * as Fieldset from '@/ui/fieldset';
import { TextInput } from '@/ui/text-input';
import { Label } from '@/ui/label';

interface FieldsetStoryArgs {
  legendText: string;
  size: Fieldset.LegendProps['size'];
}

const meta = {
  title: 'Whitehall-UI/Fieldset',
  argTypes: {
    legendText: {
      control: 'text',
      description: 'Text content of the legend',
    },
    size: {
      control: 'select',
      options: [undefined, 'xl', 'l', 'm', 's'],
      description: 'Legend size variant',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI fieldset component. Use the fieldset component to group related form inputs. Based on the [GOV.UK Design System Fieldset](https://design-system.service.gov.uk/components/fieldset/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<FieldsetStoryArgs>;

export default meta;
type Story = StoryObj<FieldsetStoryArgs>;

export const Default: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'xl',
  },
  render: ({ legendText, size }) => (
    <Fieldset.Root>
      <Fieldset.Legend size={size}>
        <Fieldset.Heading as='h1'>{legendText}</Fieldset.Heading>
      </Fieldset.Legend>
      <div className='flex flex-col gap-govuk-3'>
        <div>
          <Label htmlFor='address-line-1'>Address line 1</Label>
          <TextInput id='address-line-1' width={30} />
        </div>
        <div>
          <Label htmlFor='address-line-2'>Address line 2 (optional)</Label>
          <TextInput id='address-line-2' width={30} />
        </div>
        <div>
          <Label htmlFor='address-town'>Town or city</Label>
          <TextInput id='address-town' width={20} />
        </div>
        <div>
          <Label htmlFor='address-postcode'>Postcode</Label>
          <TextInput id='address-postcode' width={5} />
        </div>
      </div>
    </Fieldset.Root>
  ),
};

export const LegendSizeXL: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'xl',
  },
  render: ({ legendText, size }) => (
    <Fieldset.Root>
      <Fieldset.Legend size={size}>
        <Fieldset.Heading>{legendText}</Fieldset.Heading>
      </Fieldset.Legend>
    </Fieldset.Root>
  ),
};

export const LegendSizeL: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'l',
  },
  render: ({ legendText, size }) => (
    <Fieldset.Root>
      <Fieldset.Legend size={size}>
        <Fieldset.Heading as='h2'>{legendText}</Fieldset.Heading>
      </Fieldset.Legend>
    </Fieldset.Root>
  ),
};

export const LegendSizeM: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'm',
  },
  render: ({ legendText, size }) => (
    <Fieldset.Root>
      <Fieldset.Legend size={size}>
        <Fieldset.Heading as='h3'>{legendText}</Fieldset.Heading>
      </Fieldset.Legend>
    </Fieldset.Root>
  ),
};

export const LegendSizeS: Story = {
  args: {
    legendText: 'What is your address?',
    size: 's',
  },
  render: ({ legendText, size }) => (
    <Fieldset.Root>
      <Fieldset.Legend size={size}>
        <Fieldset.Heading as='h4'>{legendText}</Fieldset.Heading>
      </Fieldset.Legend>
    </Fieldset.Root>
  ),
};
