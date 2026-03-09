import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectItem } from '@/ui/select';
import { Label } from '@/ui/label';
import { Hint } from '@/ui/hint';
import { ErrorMessage } from '@/ui/error-message';

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

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => {
    const items = [
      { value: 'recently-published', label: 'Recently published' },
      { value: 'recently-updated', label: 'Recently updated' },
      { value: 'most-views', label: 'Most views' },
      { value: 'most-comments', label: 'Most comments' },
    ];

    return (
      <>
        <Label id='sort-by-label'>Sort by</Label>
        <Select
          defaultValue='recently-published'
          items={items}
          aria-labelledby='sort-by-label'
        >
          <SelectItem value='recently-published'>Recently published</SelectItem>
          <SelectItem value='recently-updated'>Recently updated</SelectItem>
          <SelectItem value='most-views'>Most views</SelectItem>
          <SelectItem value='most-comments'>Most comments</SelectItem>
        </Select>
      </>
    );
  },
};

export const WithHint: Story = {
  args: {
    children: null,
  },
  render: () => {
    const items = [
      { value: 'east-midlands', label: 'East Midlands' },
      { value: 'east-of-england', label: 'East of England' },
      { value: 'london', label: 'London' },
      { value: 'north-east', label: 'North East' },
      { value: 'north-west', label: 'North West' },
      { value: 'south-east', label: 'South East' },
      { value: 'south-west', label: 'South West' },
      { value: 'west-midlands', label: 'West Midlands' },
      { value: 'yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    ];

    return (
      <>
        <Label id='location-label'>Choose location</Label>
        <Hint id='location-hint'>
          This can be different to where you went before
        </Hint>
        <Select
          placeholder='Choose location'
          items={items}
          aria-labelledby='location-label location-hint'
        >
          <SelectItem value='east-midlands'>East Midlands</SelectItem>
          <SelectItem value='east-of-england'>East of England</SelectItem>
          <SelectItem value='london'>London</SelectItem>
          <SelectItem value='north-east'>North East</SelectItem>
          <SelectItem value='north-west'>North West</SelectItem>
          <SelectItem value='south-east'>South East</SelectItem>
          <SelectItem value='south-west'>South West</SelectItem>
          <SelectItem value='west-midlands'>West Midlands</SelectItem>
          <SelectItem value='yorkshire-and-the-humber'>
            Yorkshire and the Humber
          </SelectItem>
        </Select>
      </>
    );
  },
};

export const Error: Story = {
  args: {
    children: null,
  },
  render: () => {
    const items = [
      { value: 'east-midlands', label: 'East Midlands' },
      { value: 'east-of-england', label: 'East of England' },
      { value: 'london', label: 'London' },
      { value: 'north-east', label: 'North East' },
      { value: 'north-west', label: 'North West' },
      { value: 'south-east', label: 'South East' },
      { value: 'south-west', label: 'South West' },
      { value: 'west-midlands', label: 'West Midlands' },
      { value: 'yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    ];

    return (
      <>
        <Label id='error-location-label'>Choose location</Label>
        <Hint id='error-location-hint'>
          This can be different to where you went before
        </Hint>
        <ErrorMessage id='error-location-error'>Select a location</ErrorMessage>
        <Select
          error
          placeholder='Choose location'
          items={items}
          aria-labelledby='error-location-label error-location-hint error-location-error'
        >
          <SelectItem value='east-midlands'>East Midlands</SelectItem>
          <SelectItem value='east-of-england'>East of England</SelectItem>
          <SelectItem value='london'>London</SelectItem>
          <SelectItem value='north-east'>North East</SelectItem>
          <SelectItem value='north-west'>North West</SelectItem>
          <SelectItem value='south-east'>South East</SelectItem>
          <SelectItem value='south-west'>South West</SelectItem>
          <SelectItem value='west-midlands'>West Midlands</SelectItem>
          <SelectItem value='yorkshire-and-the-humber'>
            Yorkshire and the Humber
          </SelectItem>
        </Select>
      </>
    );
  },
};
