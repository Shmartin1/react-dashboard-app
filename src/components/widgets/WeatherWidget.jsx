// src/components/widgets/WeatherWidget.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchWeatherData, 
  fetchCitySuggestions, 
  setSearchTerm, 
  setSelectedLocation, 
  setTemperatureUnit, 
  setIsVisible,
  setIsTransitioning,
  clearSuggestions,
  applyNewWeather
} from '../../store/slices/widgetSlices/weatherWidgetSlice';

import sunnyIcon from '../../assets/images/sunny_icon.png';
import cloudyIcon from '../../assets/images/cloudy_icon.png';
import rainyIcon from '../../assets/images/rainy_icon.png';

const weatherIcons = {
  sunny: sunnyIcon,
  cloudy: cloudyIcon,
  rainy: rainyIcon,
};

function WeatherWidget({ className }) {
  const dispatch = useDispatch();
  const { 
    currentWeather, 
    searchTerm, 
    suggestions, 
    selectedLocation, 
    isVisible,
    isTransitioning,
    temperatureUnit, 
    status 
  } = useSelector((state) => state.weather);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsTransitioning(true));
      dispatch(setIsVisible(false));
      
      await dispatch(fetchWeatherData({ selectedLocation, temperatureUnit }));
      
      setTimeout(() => {
        dispatch(applyNewWeather());
        dispatch(setIsTransitioning(false));
        dispatch(setIsVisible(true));
      }, 500);
    };

    fetchData();
  }, [selectedLocation, temperatureUnit, dispatch]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchTerm(query));
    dispatch(fetchCitySuggestions(query));
  };

  const handleSuggestionClick = (location) => {
    dispatch(setSelectedLocation(location.name));
    dispatch(setSearchTerm(''));
    dispatch(clearSuggestions());
  };

  const handleUnitChange = (e) => {
    dispatch(setTemperatureUnit(e.target.value));
  };

  return (
    <div className={`widget-card ${className}`}>
      <h2 className="widget-title">Current Weather</h2>

      <div className="h-32 relative">
        <div className="absolute right-0 top-0 w-24 h-24 flex items-center justify-center overflow-hidden">
          <img
            src={weatherIcons[currentWeather.icon]}
            alt={currentWeather.condition}
            className={`w-28 h-28 object-cover transition-opacity duration-500 ${
              isVisible && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Weather Info */}
        <div
          className={`absolute left-0 top-0 right-24 transition-opacity duration-500 ${
            isVisible && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {status === 'failed' ? (
            <p>Error loading weather data</p>
          ) : (
            <>
              <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                {currentWeather.temperature}°{temperatureUnit === 'metric' ? 'C' : 'F'}
              </p>
              <p className="text-gray-500 dark:text-gray-300 capitalize">{currentWeather.condition}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {currentWeather.city}, {currentWeather.country}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Celsius/Fahrenheit Dropdown */}
      <div className="mb-4">
        <select
          value={temperatureUnit}
          onChange={handleUnitChange}
          className="bg-gray-800 dark:bg-gray-700 text-gray-100 py-2 px-4 rounded w-full"
        >
          <option value="imperial">Fahrenheit (°F)</option>
          <option value="metric">Celsius (°C)</option>
        </select>
      </div>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 rounded"
          placeholder="Search for a location..."
        />

        {/* Suggestions list */}
        {suggestions.length > 0 && (
          <ul
            className="absolute left-0 right-0 border dark:border-gray-600 rounded bg-white dark:bg-gray-700 mt-1 max-h-32 overflow-y-auto z-10"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {suggestions.map((location, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(location)}
                className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {location.name}, {location.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WeatherWidget;