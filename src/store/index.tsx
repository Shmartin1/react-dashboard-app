import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/widgetSlices/weatherWidgetSlice';
import notificationsReducer from './slices/widgetSlices/notificationsWidgetSlice';
import statisticsReducer from './slices/widgetSlices/statisticsWidgetSlice';
import recentMessagesReducer from './slices/widgetSlices/recentMessagesWidgetSlice';
import recentActivityReducer from './slices/recentActivitySlice';
import progressReducer from './slices/widgetSlices/progressWidgetSlice';
import chartReducer from './slices/widgetSlices/chartWidgetSlice';
import dateTimeReducer from './slices/widgetSlices/dateTimeWidgetSlice';
import taskSummaryReducer from './slices/widgetSlices/taskSummaryWidgetSlice';
import taskManagerReducer from './slices/taskManagerSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
    notifications: notificationsReducer,
    statistics: statisticsReducer,
    recentMessages: recentMessagesReducer,
    recentActivity: recentActivityReducer,
    progress: progressReducer,
    chart: chartReducer,
    dateTime: dateTimeReducer,
    taskSummary: taskSummaryReducer,
    taskManager: taskManagerReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;