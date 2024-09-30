import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  theme: 'light' | 'dark' | 'system';
  isDarkMode: boolean;
}

const initialState: SettingsState = {
  theme: 'light',
  isDarkMode: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
        state.isDarkMode = !state.isDarkMode;
        localStorage.setItem('darkMode', state.isDarkMode ? 'enabled' : 'disabled');
        if (state.isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
        state.isDarkMode = action.payload;
        localStorage.setItem('darkMode', state.isDarkMode ? 'enabled' : 'disabled');
        if (state.isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },
    updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { toggleDarkMode, setIsDarkMode, updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;