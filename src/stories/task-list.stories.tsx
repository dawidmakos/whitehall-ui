import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import {
  TaskList,
  TaskListItem,
  TaskListNameAndHint,
  TaskListLink,
  TaskListHint,
  TaskListStatus,
} from '@/ui/task-list';
import { Tag, type TagColour } from '@/ui/tag';

const meta = {
  title: 'Whitehall-UI/TaskList',
  component: TaskList,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI task list component. Based on the [GOV.UK Design System Task list](https://design-system.service.gov.uk/components/task-list/). Displays all the tasks a user needs to do, allowing them to identify which ones are done. `TaskListHint` and `TaskListStatus` are linked to the `TaskListLink` in the same item with `aria-describedby` automatically.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TaskList>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Company Directors</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>Completed</TaskListStatus>
      </TaskListItem>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Registered company details</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskListStatus>
      </TaskListItem>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Financial history</TaskListLink>
          <TaskListHint>
            Include 5 years of the company's relevant financial information
          </TaskListHint>
        </TaskListNameAndHint>
        <TaskListStatus>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskListStatus>
      </TaskListItem>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Business plan</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskListStatus>
      </TaskListItem>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>References</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskListStatus>
      </TaskListItem>
    </TaskList>
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
    <TaskList>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#' aria-describedby='directors-note'>
            Company Directors
          </TaskListLink>
          <p id='directors-note'>Check all directors are listed</p>
        </TaskListNameAndHint>
        <TaskListStatus>Completed</TaskListStatus>
      </TaskListItem>
    </TaskList>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: 'Company Directors' }),
    ).toHaveAccessibleDescription('Completed Check all directors are listed');
  },
};

export const CannotStartYet: Story = {
  render: () => (
    <TaskList>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Company Directors</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>Completed</TaskListStatus>
      </TaskListItem>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Registered company details</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>
          <Tag colour='blue'>Incomplete</Tag>
        </TaskListStatus>
      </TaskListItem>
      <TaskListItem>
        <TaskListNameAndHint>Financial history</TaskListNameAndHint>
        <TaskListStatus cannotStartYet>Cannot start yet</TaskListStatus>
      </TaskListItem>
      <TaskListItem>
        <TaskListNameAndHint>Business plan</TaskListNameAndHint>
        <TaskListStatus cannotStartYet>Cannot start yet</TaskListStatus>
      </TaskListItem>
    </TaskList>
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
    <TaskList>
      <TaskListItem hasLink>
        <TaskListNameAndHint>
          <TaskListLink href='#'>Personal details</TaskListLink>
        </TaskListNameAndHint>
        <TaskListStatus>Completed</TaskListStatus>
      </TaskListItem>
      {statuses.map(({ task, status, colour }) => (
        <TaskListItem key={task} hasLink>
          <TaskListNameAndHint>
            <TaskListLink href='#'>{task}</TaskListLink>
          </TaskListNameAndHint>
          <TaskListStatus>
            <Tag colour={colour}>{status}</Tag>
          </TaskListStatus>
        </TaskListItem>
      ))}
    </TaskList>
  ),
};
