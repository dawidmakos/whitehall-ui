import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '@/ui/select';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';
import { FormGroup } from '@/ui/form-group';
import { LabelWrapper } from '@/ui/label';

const meta = {
  title: 'Whitehall-UI/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI select component. Lets users choose an option from a dropdown list. Based on the [GOV.UK Design System Select](https://design-system.service.gov.uk/components/select/).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const locations = [
  'East Midlands',
  'East of England',
  'London',
  'North East',
  'North West',
  'South East',
  'South West',
  'West Midlands',
  'Yorkshire and the Humber',
];

const locationOptions = (
  <>
    <option value=''>Choose location</option>
    {locations.map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ))}
  </>
);

export const Default: Story = {
  render: () => (
    <>
      <Label htmlFor='sort-by'>Sort by</Label>
      <Select id='sort-by' name='sort-by' defaultValue='recently-published'>
        <option value='recently-published'>Recently published</option>
        <option value='recently-updated'>Recently updated</option>
        <option value='most-views'>Most views</option>
        <option value='most-comments'>Most comments</option>
      </Select>
    </>
  ),
};

export const WithHint: Story = {
  render: () => (
    <>
      <Label htmlFor='location'>Choose location</Label>
      <Hint id='location-hint'>
        This can be different to where you went before
      </Hint>
      <Select id='location' name='location' aria-describedby='location-hint'>
        {locationOptions}
      </Select>
    </>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormGroup error>
      <Label htmlFor='error-location'>Choose location</Label>
      <Hint id='error-location-hint'>
        This can be different to where you went before
      </Hint>
      <ErrorMessage id='error-location-error'>Select a location</ErrorMessage>
      <Select
        id='error-location'
        name='error-location'
        error
        aria-describedby='error-location-hint error-location-error'
      >
        {locationOptions}
      </Select>
    </FormGroup>
  ),
};

export const LabelAsPageHeading: Story = {
  render: () => (
    <>
      <LabelWrapper>
        <Label htmlFor='heading-location' size='l'>
          Choose location
        </Label>
      </LabelWrapper>
      <Select id='heading-location' name='heading-location'>
        {locationOptions}
      </Select>
    </>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <>
      <Label htmlFor='full-width-location'>Choose location</Label>
      <Select
        id='full-width-location'
        name='full-width-location'
        className='w-full'
      >
        {locationOptions}
      </Select>
    </>
  ),
};
