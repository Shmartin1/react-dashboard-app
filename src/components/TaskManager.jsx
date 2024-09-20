import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTaskCompletion, setTaskInput } from '../store/slices/taskManagerSlice';

function TaskManager() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskManager.list);
  const taskInput = useSelector((state) => state.taskManager.taskInput);

  const handleAddTask = () => {
    dispatch(addTask());
  };

  const handleTaskInputChange = (e) => {
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
}

export default TaskManager;