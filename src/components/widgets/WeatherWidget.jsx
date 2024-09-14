import React, { useState, useEffect } from 'react';
import axios from 'axios';

import sunnyIcon from '../../assets/images/sunny_icon.png';
import cloudyIcon from '../../assets/images/cloudy_icon.png';
import rainyIcon from '../../assets/images/rainy_icon.png';

const weatherIcons = {
  sunny: sunnyIcon,
  cloudy: cloudyIcon,
  rainy: rainyIcon,
};

const getWeatherIcon = (condition) => {
  if (condition.includes('cloud')) {
    return weatherIcons.cloudy;
  } else if (condition.includes('rain')) {
    return weatherIcons.rainy;
  } else {
    return weatherIcons.sunny;
  }
};

function WeatherWidget({ className }) {
  const [weather, setWeather] = useState({
    temperature: '',
    condition: '',
    city: '',
    country: '',
  });

  const [icon, setIcon] = useState(weatherIcons.sunny);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]); 
  const [selectedLocation, setSelectedLocation] = useState('Seattle');
  const [isVisible, setIsVisible] = useState(true);
  const apiKey = 'a0182485c7d1f3c74a26769f6304f312';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsVisible(false);

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&units=metric&appid=${apiKey}`
        );
        const data = response.data;

        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const city = data.name;
        const country = data.sys.country;

        setTimeout(() => {
          setWeather({ temperature, condition, city, country });
          setIcon(getWeatherIcon(condition));
          setIsVisible(true);
        }, 500);
      } catch (error) {
        console.error('Error fetching weather data.', error);
      }
    };

    fetchWeatherData();
  }, [selectedLocation]);

  const fetchCitySuggestions = async (query) => {
    try {
      if (query.length === 0) {
        setSuggestions([]);
        return;
      }

      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
      );
      const cities = response.data;

      const uniqueCities = cities.filter(
        (city, index, self) =>
          index === self.findIndex(
            (t) => t.name === city.name && t.country === city.country
          )
      );

      setSuggestions(uniqueCities);
    } catch (error) {
      console.error('Error fetching city suggestions.', error);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    fetchCitySuggestions(query);
  };

  const handleSuggestionClick = (location) => {
    setSelectedLocation(location.name);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Current Weather</h2>

      {/* Weather Icon */}
      <div className="flex justify-center mb-4 relative">
        <img
          src={icon}
          alt={weather.condition}
          className={`w-20 h-20 absolute right-1 top-2 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Weather Info with fade-in/out */}
      <div
        className={`text-gray-700 dark:text-gray-200 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-2xl font-bold dark:text-gray-300">{weather.temperature}°C</p>
        <p className="text-gray-500 dark:text-gray-300 capitalize">{weather.condition}</p>
        <p className="text-gray-500 dark:text-gray-300">
          {weather.city}, {weather.country}
        </p>
      </div>

      {/* Search bar */}
      <div className="mt-6">
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
            className="border dark:border-gray-600 rounded bg-white dark:bg-gray-700 mt-2 max-h-32 overflow-y-scroll"
            style={{ maxHeight: '8rem' }} // Limit the height and enable scrolling
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
