import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateTimeState {
  currentTime: string;
  timezone: string;
  isAnalog: boolean;
}

const initialState: DateTimeState = {
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
    setTimezone: (state, action: PayloadAction<string>) => {
      state.timezone = action.payload;
    },
    toggleClockMode: (state) => {
      state.isAnalog = !state.isAnalog;
    },
  },
});

export const { updateCurrentTime, setTimezone, toggleClockMode } = dateTimeWidgetSlice.actions;

export default dateTimeWidgetSlice.reducer;