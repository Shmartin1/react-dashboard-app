import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
    isDarkMode: boolean;
}

const initialState: SettingsState = {
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
    },
});

export const { toggleDarkMode, setIsDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;