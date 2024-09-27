import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  progress: number;
  isProgressing: boolean;
}

const initialState: ProgressState = {
  progress: 0,
  isProgressing: false,
};

export const progressSlice = createSlice ({
  name: 'progress',
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    startProgress: (state) => {
      state.isProgressing = true;
    },
    stopProgress: (state) => {
      state.isProgressing = false;
    },
    resetProgress: (state) => {
      state.isProgressing = false;
      state.progress = 0;
    },
    incrementProgress: (state) => {
      if (state.progress < 100) {
        state.progress += 1;
      } else {
        state.isProgressing = false;
      }
    },
  },
});

export const {
  setProgress,
  startProgress,
  stopProgress,
  resetProgress,
  incrementProgress
} = progressSlice.actions;

export default progressSlice.reducer;