import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { addTask, toggleTaskCompletion, setTaskInput } from '../store/slices/taskManagerSlice';

const TaskManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.taskManager.list);
  const taskInput = useSelector((state: RootState) => state.taskManager.taskInput);

  const handleAddTask = () => {
    dispatch(addTask());
  };

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskInput(e.target.value));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl widget-title">Task Manager</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleTaskInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;