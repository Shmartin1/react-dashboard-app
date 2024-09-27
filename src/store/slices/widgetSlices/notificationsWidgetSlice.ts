import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: number;
  text: string;
  time: string;
  bgColor: string;
  textColor: string;
  isNew: boolean;
}

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [
    { id: 1, text: 'Critical: Disk space low...', time: '10 minutes ago', bgColor: 'bg-red-100', textColor: 'text-red-800', isNew: false },
    { id: 2, text: 'Warning: High memory usage detected', time: '38 minutes ago', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', isNew: false },
    { id: 3, text: 'Info: New login from IP 192.168.1.1', time: '59 minutes ago', bgColor: 'bg-blue-100', textColor: 'text-blue-800', isNew: false },
  ],
};

export const notificationsWidgetSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'isNew'>>) => {
      state.notifications.unshift({ id: Date.now(), ...action.payload, isNew: true });
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    moveNotificationToBottom: (state, action: PayloadAction<number>) => {
      const index = state.notifications.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        const [notification] = state.notifications.splice(index, 1);
        state.notifications.push({ ...notification, isNew: true });
      }
    },
    clearNewStatus: (state, action: PayloadAction<number>) => {
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
} = notificationsWidgetSlice.actions;

export default notificationsWidgetSlice.reducer;