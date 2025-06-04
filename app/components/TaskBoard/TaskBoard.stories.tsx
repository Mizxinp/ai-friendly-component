import type { Meta, StoryObj } from '@storybook/react';
import { TaskBoard } from './index';

const meta: Meta<typeof TaskBoard> = {
  title: 'Components/TaskBoard',
  component: TaskBoard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TaskBoard>;

const mockTasks = [
  { id: '1', content: '任务一任务一任务一任务一', completed: true },
  { id: '2', content: '任务二任务二任务二任务二', completed: true },
  { id: '3', content: '任务三任务三任务三任务三', completed: false },
  { id: '4', content: '任务四任务四任务四任务四', completed: false }
];

export const Default: Story = {
  args: {
    tasks: mockTasks,
    showAddInput: false,
    onSearch: (keyword) => console.log('搜索:', keyword),
    onAdd: (content) => console.log('新增:', content),
    onDelete: (id) => console.log('删除:', id),
    onStatusChange: (id, completed) => console.log('状态更新:', id, completed)
  }
};

export const WithAddInput: Story = {
  args: {
    ...Default.args,
    showAddInput: true
  }
};
