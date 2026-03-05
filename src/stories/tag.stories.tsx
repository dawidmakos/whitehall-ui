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
      <table
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '19px',
          borderCollapse: 'collapse',
          width: '100%',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: '10px 20px 10px 0',
                borderBottom: '1px solid #b1b4b6',
              }}
            >
              Colour
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: '10px 20px 10px 0',
                borderBottom: '1px solid #b1b4b6',
              }}
            >
              Tag
            </th>
          </tr>
        </thead>
        <tbody>
          {colours.map(({ colour, label }) => (
            <tr key={colour}>
              <td
                style={{
                  padding: '10px 20px 10px 0',
                  borderBottom: '1px solid #b1b4b6',
                }}
              >
                {colour}
              </td>
              <td
                style={{
                  padding: '10px 20px 10px 0',
                  borderBottom: '1px solid #b1b4b6',
                }}
              >
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
    <table
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '19px',
        borderCollapse: 'collapse',
        width: '100%',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'left',
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            Name
          </th>
          <th
            style={{
              textAlign: 'left',
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            Joshua Wessel
          </td>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            <Tag colour='red'>Urgent</Tag>
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            Rachel Silver
          </td>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            <Tag colour='green'>New</Tag>
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            Rachael Pepper
          </td>
          <td
            style={{
              padding: '10px 20px 10px 0',
              borderBottom: '1px solid #b1b4b6',
            }}
          >
            <Tag colour='grey'>Inactive</Tag>
          </td>
        </tr>
      </tbody>
    </table>
  ),
};
