import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as TaskList from '@/ui/task-list';
import { Tag, type TagColour } from '@/ui/tag';

const meta = {
  title: 'Whitehall-UI/TaskList',
  component: TaskList.Root,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI task list component. Based on the [GOV.UK Design System Task list](https://design-system.service.gov.uk/components/task-list/). Displays all the tasks a user needs to do, allowing them to identify which ones are done. `TaskList.Hint` and `TaskList.Status` are linked to the `TaskList.Link` in the same item with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TaskList.Root>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Company Directors</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>Completed</TaskList.Status>
      </TaskList.Item>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Registered company details</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Financial history</TaskList.Link>
          <TaskList.Hint>
            Include 5 years of the company's relevant financial information
          </TaskList.Hint>
        </TaskList.NameAndHint>
        <TaskList.Status>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Business plan</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>References</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
    </TaskList.Root>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: 'Company Directors' }),
    ).toHaveAccessibleDescription('Completed');
  },
};

export const MergesConsumerDescription: Story = {
  tags: ['!autodocs', '!dev'],
  render: () => (
    <TaskList.Root>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#' aria-describedby='directors-note'>
            Company Directors
          </TaskList.Link>
          <p id='directors-note'>Check all directors are listed</p>
        </TaskList.NameAndHint>
        <TaskList.Status>Completed</TaskList.Status>
      </TaskList.Item>
    </TaskList.Root>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: 'Company Directors' }),
    ).toHaveAccessibleDescription('Completed Check all directors are listed');
  },
};

export const CannotStartYet: Story = {
  render: () => (
    <TaskList.Root>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Company Directors</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>Completed</TaskList.Status>
      </TaskList.Item>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Registered company details</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskList.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.NameAndHint>Financial history</TaskList.NameAndHint>
        <TaskList.Status cannotStartYet>Cannot start yet</TaskList.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.NameAndHint>Business plan</TaskList.NameAndHint>
        <TaskList.Status cannotStartYet>Cannot start yet</TaskList.Status>
      </TaskList.Item>
    </TaskList.Root>
  ),
};

const statuses: { task: string; status: string; colour: TagColour }[] = [
  { task: 'Contact details', status: 'Incomplete', colour: 'blue' },
  { task: 'Employment history', status: 'In progress', colour: 'teal' },
  { task: 'Previous applications', status: 'Received', colour: 'green' },
  { task: 'References', status: 'Requested', colour: 'purple' },
  { task: 'Supporting documents', status: 'Sent back', colour: 'magenta' },
  { task: 'Payment', status: 'Rejected', colour: 'red' },
  { task: 'Medical declaration', status: 'Urgent', colour: 'orange' },
  { task: 'Criminal record check', status: 'Pending', colour: 'yellow' },
  { task: 'Interview', status: 'Not applicable', colour: 'grey' },
];

export const AllStatusColours: Story = {
  render: () => (
    <TaskList.Root>
      <TaskList.Item hasLink>
        <TaskList.NameAndHint>
          <TaskList.Link href='#'>Personal details</TaskList.Link>
        </TaskList.NameAndHint>
        <TaskList.Status>Completed</TaskList.Status>
      </TaskList.Item>
      {statuses.map(({ task, status, colour }) => (
        <TaskList.Item key={task} hasLink>
          <TaskList.NameAndHint>
            <TaskList.Link href='#'>{task}</TaskList.Link>
          </TaskList.NameAndHint>
          <TaskList.Status>
            <Tag colour={colour}>{status}</Tag>
          </TaskList.Status>
        </TaskList.Item>
      ))}
    </TaskList.Root>
  ),
};
