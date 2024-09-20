import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulating an API call
const fetchChartDataAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: 'January', tasks: 10 },
        { month: 'February', tasks: 20 },
        { month: 'March', tasks: 30 },
        { month: 'April', tasks: 40 },
        { month: 'May', tasks: 50 },
      ]);
    }, 1000);
  });
};

export const fetchChartData = createAsyncThunk(
  'chart/fetchChartData',
  async () => {
    const response = await fetchChartDataAPI();
    return response;
  }
);

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const chartWidgetSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default chartWidgetSlice.reducer;