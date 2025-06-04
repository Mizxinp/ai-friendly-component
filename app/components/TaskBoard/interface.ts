export interface TaskItem {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskBoardProps {
  /** 任务列表数据 */
  tasks: TaskItem[];
  /** 是否显示新增输入框 */
  showAddInput?: boolean;
  /** 任务搜索回调 */
  onSearch?: (keyword: string) => void;
  /** 新增任务回调 */
  onAdd?: (content: string) => void;
  /** 删除任务回调 */
  onDelete?: (id: string) => void;
  /** 更新任务状态回调 */
  onStatusChange?: (id: string, completed: boolean) => void;
}
