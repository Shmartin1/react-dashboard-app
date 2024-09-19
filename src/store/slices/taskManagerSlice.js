import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTask, addTask, toggleTaskCompletion } from '../store/slices/tasksSlice';

function TaskManager() {
    const dispatch = useDispatch();
    const { tasks, currentTask } = useSelector((state) => state.tasks);

    const handleAddTask = () => {
        dispatch(addTask());
    };

    const handleTaskCompletion = () => {
        dispatch(toggleTaskCompletion(taskId));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2 className="widget-title">Task Manager</h2>
            <input
                type="text"
                value={currentTask}
                onChange={(e) => dispatch(setCurrentTask(e.target.value))}
                placeholder="Add new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                        {task.text}
                        <button onClick={() => handleTaskCompletion(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}