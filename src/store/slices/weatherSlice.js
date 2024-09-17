// src/store/slices/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'a0182485c7d1f3c74a26769f6304f312'; // Consider moving this to an environment variable

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ location, unit }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
  }
);

const initialState = {
  weather: null,
  loading: false,
  error: null,
  location: 'Seattle',
  unit: 'imperial',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLocation, setUnit } = weatherSlice.actions;

export default weatherSlice.reducer;