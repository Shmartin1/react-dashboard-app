// src/store/slices/progressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: 0,
  isProgressing: false,
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    startProgress: (state) => {
      state.isProgressing = true;
    },
    stopProgress: (state) => {
      state.isProgressing = false;
    },
    resetProgress: (state) => {
      state.progress = 0;
      state.isProgressing = false;
    },
  },
});

export const { setProgress, startProgress, stopProgress, resetProgress } = progressSlice.actions;

export default progressSlice.reducer;