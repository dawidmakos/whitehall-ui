import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  TaskList,
  TaskListItem,
  TaskListNameAndHint,
  TaskListLink,
  TaskListHint,
  TaskListStatus,
} from '@/ui/task-list';
import { Tag } from '@/ui/tag';

const meta = {
  title: 'Whitehall-UI/TaskList',
  component: TaskList,
  parameters: {
    docs: {
      description: {
        component:
          'Whitehall-UI task list component. Based on the [GOV.UK Design System Task list](https://design-system.service.gov.uk/components/task-list/). Displays all the tasks a user needs to do, allowing them to identify which ones are done.',
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
