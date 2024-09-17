// src/store/slices/statisticsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: [
    { id: 1, value: '1,245', label: 'Users' },
    { id: 2, value: '563', label: 'Tasks' },
    { id: 3, value: '87%', label: 'Completion' },
    { id: 4, value: '150', label: 'Projects' },
    { id: 5, value: '24', label: 'Signups' },
    { id: 6, value: '98%', label: 'Satisfaction' },
  ],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateStatistic: (state, action) => {
      const { id, value } = action.payload;
      const statToUpdate = state.stats.find(stat => stat.id === id);
      if (statToUpdate) {
        statToUpdate.value = value;
      }
    },
  },
});

export const { updateStatistic } = statisticsSlice.actions;

export default statisticsSlice.reducer;