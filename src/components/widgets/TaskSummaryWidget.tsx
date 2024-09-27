import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TaskStatus } from '../../store/slices/widgetSlices/taskSummaryWidgetSlice';

interface TaskSummaryWidgetProps {
  className?: string;
}

const TaskSummaryWidget: React.FC<TaskSummaryWidgetProps> = ({ className }) => {
  const tasks = useSelector((state: RootState) => state.taskSummary.tasks);

  const getStatusClass = (status: TaskStatus): string => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: TaskStatus): string => {
    switch(status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <div className={`widget-card ${className}`}>
      <h2 className="widget-title">Task Summary</h2>
      <ul className="space-y-4 ml-1">
        {tasks.map((task) => (
          <li key={task.id} className="flex flex-row justify-between items-center">
            <p className="task-summary-label">{task.title}</p>
            <span className={`${getStatusClass(task.status)} text-sm px-2 py-1 rounded w-24 text-center`}>
              {getStatusText(task.status)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSummaryWidget;