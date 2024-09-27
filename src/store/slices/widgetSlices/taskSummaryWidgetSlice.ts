import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskStatus = 'completed' | 'in-progress' | 'pending';

interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

interface TaskSummaryState {
  tasks: Task[];
}

const initialState: TaskSummaryState = {
  tasks: [
    { id: 1, title: 'Add dark mode', status: 'completed' },
    { id: 2, title: 'Fix header', status: 'in-progress' },
    { id: 3, title: 'Finish tasks', status: 'pending' },
  ],
};

export const taskSummaryWidgetSlice = createSlice({
  name: 'taskSummary',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask = {
        id: state.tasks.length + 1,
        ...action.payload,
      };
      state.tasks.push(newTask);
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: number; status: TaskStatus }>) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, removeTask } = taskSummaryWidgetSlice.actions;

export default taskSummaryWidgetSlice.reducer;