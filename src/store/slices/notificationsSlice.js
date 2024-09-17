// src/store/slices/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [
    { id: 1, text: 'Critical: Disk space low...', time: '10 minutes ago', type: 'critical' },
    { id: 2, text: 'Warning: High memory usage detected', time: '38 minutes ago', type: 'warning' },
    { id: 3, text: 'Info: New login from IP 192.168.1.1', time: '59 minutes ago', type: 'info' },
  ],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push({ id: Date.now(), ...action.payload });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;