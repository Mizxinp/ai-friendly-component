import React, { useState } from 'react';
import { Input, Button, List, Checkbox } from 'antd';
import type { TaskBoardProps, TaskItem } from './interface';

const { Search } = Input;

const TaskBoard: React.FC<TaskBoardProps> = ({
  tasks,
  showAddInput = false,
  onSearch,
  onAdd,
  onDelete,
  onStatusChange
}) => {
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (newTask.trim()) {
      onAdd?.(newTask.trim());
      setNewTask('');
      setIsAdding(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="text-xl font-bold mb-4">任务管理面板</div>

      <div className="flex gap-4 mb-4">
        <Search placeholder="请输入任务进行搜索" onSearch={onSearch} className="flex-1" />
        <Button type="primary" onClick={() => setIsAdding(true)}>
          新增任务
        </Button>
      </div>

      {(showAddInput || isAdding) && (
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button type="primary" onClick={handleAdd}>
            确认
          </Button>
          <Button onClick={() => setIsAdding(false)}>取消</Button>
        </div>
      )}

      <List
        className="mt-4"
        dataSource={tasks}
        renderItem={(task: TaskItem) => (
          <List.Item className="flex items-center gap-2 px-4 py-2 border rounded-lg mb-2">
            <Checkbox
              checked={task.completed}
              onChange={(e) => onStatusChange?.(task.id, e.target.checked)}
            />
            <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>{task.content}</span>
            <Button type="link" className="text-blue-500" onClick={() => onDelete?.(task.id)}>
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskBoard;
