// src/store/slices/recentActivitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [
    { id: 1, text: "User John Doe completed task A", timestamp: "2 hours ago" },
    { id: 2, text: "Server update deployed successfully", timestamp: "4 hours ago" },
    { id: 3, text: "Meeting scheduled for tomorrow", timestamp: "6 hours ago" }
  ],
};

export const recentActivitySlice = createSlice({
  name: 'recentActivity',
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.activities.unshift({ id: Date.now(), ...action.payload });
      if (state.activities.length > 5) {
        state.activities.pop();
      }
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter(activity => activity.id !== action.payload);
    },
    clearActivities: (state) => {
      state.activities = [];
    },
  },
});

export const { addActivity, removeActivity, clearActivities } = recentActivitySlice.actions;

export default recentActivitySlice.reducer;