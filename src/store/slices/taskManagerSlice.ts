import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskManagerState {
  list: Task[];
  taskInput: string;
}

const initialState: TaskManagerState = {
  list: [],
  taskInput: ''
};

const taskManagerSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state) => {
      if (state.taskInput.trim()) {
        state.list.push({
          id: state.list.length + 1,
          text: state.taskInput,
          completed: false,
        });
        state.taskInput = '';
      }
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTaskInput: (state, action: PayloadAction<string>) => {
      state.taskInput = action.payload;
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    clearCompletedTasks: (state) => {
      state.list = state.list.filter(task => !task.completed);
    }
  },
});

export const { 
  addTask, 
  toggleTaskCompletion, 
  setTaskInput, 
  removeTask, 
  clearCompletedTasks 
} = taskManagerSlice.actions;

export default taskManagerSlice.reducer;