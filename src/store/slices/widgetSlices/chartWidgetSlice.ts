import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ChartData {
  month: string;
  tasks: number;
}

interface ChartState {
  data: ChartData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ChartState = {
  data: [],
  status: 'idle',
  error: null,
};

const fetchChartDataAPI = (): Promise<ChartData[]> => {
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

export const fetchChartData = createAsyncThunk<ChartData[], void, { rejectValue: string }>(
  'chart/fetchChartData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchChartDataAPI();
      return response;
    } catch (error) {
      return rejectWithValue("Failed to fetch chart data");
    }
  }
);

export const chartWidgetSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChartData.fulfilled, (state, action: PayloadAction<ChartData[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'An error occurred';
      });
  },
});

export default chartWidgetSlice.reducer;