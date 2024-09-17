import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTime: new Date().toISOString(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  isAnalog: false,
};

export const dateTimeWidgetSlice = createSlice({
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

export const { updateCurrentTime, setTimezone, toggleClockMode } = dateTimeWidgetSlice.actions;

export default dateTimeWidgetSlice.reducer;