// src/store/slices/recentActivitySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulating an API call
const fetchActivitiesAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "User A completed Task 1", timestamp: "10 minutes ago" },
        { id: 2, text: "User B completed Task 2", timestamp: "15 minutes ago" },
      ]);
    }, 1000);
  });
};

export const fetchActivities = createAsyncThunk(
  'recentActivity/fetchActivities',
  async () => {
    const response = await fetchActivitiesAPI();
    return response;
  }
);

const initialState = {
  activities: [],
  status: 'idle',
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activities = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addActivity, removeActivity, clearActivities } = recentActivitySlice.actions;

export default recentActivitySlice.reducer;