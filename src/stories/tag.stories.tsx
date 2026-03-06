import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag, type TagColour } from '@/ui/tag';

const meta = {
  title: 'Whitehall-UI/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Whitehall-UI tag component. Shows users the status of something. Based on the [GOV.UK Design System Tag](https://design-system.service.gov.uk/components/tag/).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colour: {
      control: 'select',
      options: [
        'blue',
        'green',
        'teal',
        'purple',
        'magenta',
        'red',
        'orange',
        'yellow',
        'grey',
      ],
      description: 'Colour variant of the tag',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Completed',
  },
};

export const AllColours: Story = {
  args: {},
  render: () => {
    const colours: { colour: TagColour; label: string }[] = [
      { colour: 'blue', label: 'Pending' },
      { colour: 'green', label: 'New' },
      { colour: 'teal', label: 'Active' },
      { colour: 'purple', label: 'Received' },
      { colour: 'magenta', label: 'Sent' },
      { colour: 'red', label: 'Rejected' },
      { colour: 'orange', label: 'Declined' },
      { colour: 'yellow', label: 'Delayed' },
      { colour: 'grey', label: 'Inactive' },
    ];

    return (
      <table className='font-govuk text-govuk-body border-collapse w-full'>
        <thead>
          <tr>
            <th className='text-left py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
              Colour
            </th>
            <th className='text-left py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
              Tag
            </th>
          </tr>
        </thead>
        <tbody>
          {colours.map(({ colour, label }) => (
            <tr key={colour}>
              <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
                {colour}
              </td>
              <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
                <Tag colour={colour}>{label}</Tag>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export const InATable: Story = {
  args: {},
  render: () => (
    <table className='font-govuk text-govuk-body border-collapse w-full'>
      <thead>
        <tr>
          <th className='text-left py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            Name
          </th>
          <th className='text-left py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            Joshua Wessel
          </td>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            <Tag colour='red'>Urgent</Tag>
          </td>
        </tr>
        <tr>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            Rachel Silver
          </td>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            <Tag colour='green'>New</Tag>
          </td>
        </tr>
        <tr>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            Rachael Pepper
          </td>
          <td className='py-govuk-2 pr-5 pl-0 border-b border-govuk-hover'>
            <Tag colour='grey'>Inactive</Tag>
          </td>
        </tr>
      </tbody>
    </table>
  ),
};
