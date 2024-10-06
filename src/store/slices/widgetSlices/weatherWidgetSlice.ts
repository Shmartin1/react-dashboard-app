import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

interface Weather {
  temperature: string;
  condition: string;
  city: string;
  country: string;
  icon: 'sunny' | 'cloudy' | 'rainy';
}

interface WeatherState {
  currentWeather: Weather;
  newWeather: Weather | null;
  searchTerm: string;
  suggestions: Array<{ name: string; country: string }>;
  selectedLocation: string;
  isVisible: boolean;
  isTransitioning: boolean;
  temperatureUnit: 'imperial' | 'metric';
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
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

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async ({ selectedLocation, temperatureUnit }: { selectedLocation: string; temperatureUnit: 'imperial' | 'metric' }) => {
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
  async (query: string) => {
    if (!API_KEY) {
      throw new Error('Weather API key is not set');
    }
    if (query.length === 0) return [];
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    );
    return response.data;
  }
);

const getWeatherIcon = (condition: string): Weather['icon'] => {
  if (condition.includes('cloud')) {
    return 'cloudy';
  } else if (condition.includes('rain')) {
    return 'rainy';
  } else {
    return 'sunny';
  }
};

export const weatherWidgetSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
    setTemperatureUnit: (state, action: PayloadAction<'imperial' | 'metric'>) => {
      state.temperatureUnit = action.payload;
    },
    setIsVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
    setIsTransitioning: (state, action: PayloadAction<boolean>) => {
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
          temperature: action.payload.main.temp.toString(),
          condition: action.payload.weather[0].description,
          city: action.payload.name,
          country: action.payload.sys.country,
          icon: getWeatherIcon(action.payload.weather[0].description),
        };
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
        state.isTransitioning = false;
      })
      .addCase(fetchCitySuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload.filter(
          (city: any, index: number, self: any[]) =>
            index === self.findIndex(
              (t) => t.name === city.name && t.country === city.country
            )
        );
      });
  },
});

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