import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Activity {
  id: number;
  text: string;
  timestamp: string;
}

interface RecentActivityState {
  activities: Activity[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Simulating an API call
const fetchActivitiesAPI = (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "User John Doe completed task A", timestamp: "2 hours ago" },
        { id: 2, text: "Server update deployed successfully", timestamp: "4 hours ago" },
        { id: 3, text: "Meeting scheduled for tomorrow", timestamp: "6 hours ago" }
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

const initialState: RecentActivityState = {
  activities: [],
  status: 'idle',
  error: null,
};

export const recentActivitySlice = createSlice({
  name: 'recentActivity',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Omit<Activity, 'id'>>) => {
      state.activities.unshift({ id: Date.now(), ...action.payload });
      if (state.activities.length > 5) {
        state.activities.pop();
      }
    },
    removeActivity: (state, action: PayloadAction<number>) => {
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
      .addCase(fetchActivities.fulfilled, (state, action: PayloadAction<Activity[]>) => {
        state.status = 'succeeded';
        state.activities = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { addActivity, removeActivity, clearActivities } = recentActivitySlice.actions;

export default recentActivitySlice.reducer;