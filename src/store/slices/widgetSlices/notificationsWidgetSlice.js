import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [
    { id: 1, text: 'Critical: Disk space low...', time: '10 minutes ago', bgColor: 'bg-red-100', textColor: 'text-red-800', isNew: false },
    { id: 2, text: 'Warning: High memory usage detected', time: '38 minutes ago', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', isNew: false },
    { id: 3, text: 'Info: New login from IP 192.168.1.1', time: '59 minutes ago', bgColor: 'bg-blue-100', textColor: 'text-blue-800', isNew: false },
  ],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift({ id: Date.now(), ...action.payload, isNew: true });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    moveNotificationToBottom: (state, action) => {
      const index = state.notifications.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        const [notification] = state.notifications.splice(index, 1);
        state.notifications.push({ ...notification, isNew: true });
      }
    },
    clearNewStatus: (state, action) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.isNew = false;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { 
  addNotification, 
  removeNotification, 
  moveNotificationToBottom, 
  clearNewStatus,
  clearNotifications 
} = notificationsSlice.actions;

export default notificationsSlice.reducer;