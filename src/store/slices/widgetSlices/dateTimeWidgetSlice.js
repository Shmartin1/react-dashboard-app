// src/store/slices/dateTimeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTime: new Date().toISOString(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  isAnalog: false,
};

export const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState,
  reducers: {
    updateCurrentTime: (state) => {
      state.currentTime = new Date().toISOString();
    },
    setTimezone: (state, action) => {
      state.timezone = action.payload;
    },
    toggleClockMode: (state) => {
      state.isAnalog = !state.isAnalog;
    },
  },
});

export const { updateCurrentTime, setTimezone, toggleClockMode } = dateTimeSlice.actions;

export default dateTimeSlice.reducer;