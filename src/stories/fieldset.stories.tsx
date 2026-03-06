import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Fieldset,
  FieldsetLegend,
  FieldsetHeading,
  type FieldsetLegendProps,
} from '@/ui/fieldset';
import { TextInput } from '@/ui/text-input';
import { Label } from '@/ui/label';

interface FieldsetStoryArgs {
  legendText: string;
  size: FieldsetLegendProps['size'];
}

const meta: Meta = {
  title: 'Whitehall-UI/Fieldset',
  component: Fieldset,
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
};

export default meta;
type Story = StoryObj<FieldsetStoryArgs>;

export const Default: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'xl',
  },
  render: ({ legendText, size }) => (
    <Fieldset>
      <FieldsetLegend size={size}>
        <FieldsetHeading as='h1'>{legendText}</FieldsetHeading>
      </FieldsetLegend>
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
    </Fieldset>
  ),
};

export const LegendSizeXL: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'xl',
  },
  render: ({ legendText, size }) => (
    <Fieldset>
      <FieldsetLegend size={size}>
        <FieldsetHeading>{legendText}</FieldsetHeading>
      </FieldsetLegend>
    </Fieldset>
  ),
};

export const LegendSizeL: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'l',
  },
  render: ({ legendText, size }) => (
    <Fieldset>
      <FieldsetLegend size={size}>
        <FieldsetHeading as='h2'>{legendText}</FieldsetHeading>
      </FieldsetLegend>
    </Fieldset>
  ),
};

export const LegendSizeM: Story = {
  args: {
    legendText: 'What is your address?',
    size: 'm',
  },
  render: ({ legendText, size }) => (
    <Fieldset>
      <FieldsetLegend size={size}>
        <FieldsetHeading as='h3'>{legendText}</FieldsetHeading>
      </FieldsetLegend>
    </Fieldset>
  ),
};

export const LegendSizeS: Story = {
  args: {
    legendText: 'What is your address?',
    size: 's',
  },
  render: ({ legendText, size }) => (
    <Fieldset>
      <FieldsetLegend size={size}>
        <FieldsetHeading as='h4'>{legendText}</FieldsetHeading>
      </FieldsetLegend>
    </Fieldset>
  ),
};
