import { configureStore } from '@reduxjs/toolkit';
import taskManagerReducer from './slices/taskManagerSlice';
import profileReducer from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    taskManager: taskManagerReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
