import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), ...action.payload });
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, removeTask } = taskSummaryWidgetSlice.actions;

export default taskSummaryWidgetSlice.reducer;