// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tasksReducer from './slices/tasksSlice';
import weatherReducer from './slices/weatherSlice';
import notificationsReducer from './slices/widgetSlices/notificationsWidgetSlice';
import statisticsReducer from './slices/statisticsSlice';
import recentMessagesReducer from './slices/recentMessagesSlice';
import recentActivityReducer from './slices/recentActivitySlice';
import progressReducer from './slices/widgetSlices/progressWidgetSlice';
import chartReducer from './slices/widgetSlices/chartWidgetSlice';
import dateTimeReducer from './slices/widgetSlices/dateTimeWidgetSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    weather: weatherReducer,
    notifications: notificationsReducer,
    statistics: statisticsReducer,
    recentMessages: recentMessagesReducer,
    recentActivity: recentActivityReducer,
    progress: progressReducer,
    chart: chartReducer,
    dateTime: dateTimeReducer,
  },
});