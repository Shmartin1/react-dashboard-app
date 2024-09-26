import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async ({ selectedLocation, temperatureUnit }) => {
    if (!API_KEY) {
      throw new Error('Weather API key is not set');
    }
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&units=${temperatureUnit}&appid=${API_KEY}`
    );
    return response.data;
  }
);

export const fetchCitySuggestions = createAsyncThunk(
  'weather/fetchCitySuggestions',
  async (query) => {
    if (!API_KEY) {
      throw new Error('Weather API key is not set');
    }
    if (query.length === 0) return [];
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    );
    return response.data;
  }
);

const initialState = {
  currentWeather: {
    temperature: '',
    condition: '',
    city: '',
    country: '',
    icon: 'sunny',
  },
  newWeather: null,
  searchTerm: '',
  suggestions: [],
  selectedLocation: 'Seattle',
  isVisible: true,
  isTransitioning: false,
  temperatureUnit: 'imperial',
  status: 'idle',
  error: null,
};

const weatherWidgetSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    setTemperatureUnit: (state, action) => {
      state.temperatureUnit = action.payload;
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
    setIsTransitioning: (state, action) => {
      state.isTransitioning = action.payload;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
    applyNewWeather: (state) => {
      if (state.newWeather) {
        state.currentWeather = state.newWeather;
        state.newWeather = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading';
        state.isTransitioning = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newWeather = {
          temperature: action.payload.main.temp,
          condition: action.payload.weather[0].description,
          city: action.payload.name,
          country: action.payload.sys.country,
          icon: getWeatherIcon(action.payload.weather[0].description),
        };
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.isTransitioning = false;
      })
      .addCase(fetchCitySuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload.filter(
          (city, index, self) =>
            index === self.findIndex(
              (t) => t.name === city.name && t.country === city.country
            )
        );
      });
  },
});

const getWeatherIcon = (condition) => {
  if (condition.includes('cloud')) {
    return 'cloudy';
  } else if (condition.includes('rain')) {
    return 'rainy';
  } else {
    return 'sunny';
  }
};

export const { 
  setSearchTerm, 
  setSelectedLocation, 
  setTemperatureUnit, 
  setIsVisible,
  setIsTransitioning,
  clearSuggestions,
  applyNewWeather
} = weatherWidgetSlice.actions;

export default weatherWidgetSlice.reducer;