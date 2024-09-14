import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import your weather icons
import sunnyIcon from '../../assets/images/sunny_icon.png';
import cloudyIcon from '../../assets/images/cloudy_icon.png';
import rainyIcon from '../../assets/images/rainy_icon.png';

// Map weather conditions to icons
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
  const [searchTerm, setSearchTerm] = useState(''); // Track search input
  const [suggestions, setSuggestions] = useState([]); // Track auto-suggestions
  const [selectedLocation, setSelectedLocation] = useState('Seattle'); // Default location
  const [isVisible, setIsVisible] = useState(true); // Control fade in/out of weather data
  const apiKey = 'a0182485c7d1f3c74a26769f6304f312';

  // Fetch weather data based on selected location
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // First, fade out the weather data
        setIsVisible(false);

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&units=metric&appid=${apiKey}`
        );
        const data = response.data;

        // Extract values
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const city = data.name;
        const country = data.sys.country;

        // Update state with weather data after a delay to allow the fade-out
        setTimeout(() => {
          setWeather({ temperature, condition, city, country });
          setIcon(getWeatherIcon(condition));
          setIsVisible(true); // Fade in after updating the data
        }, 500); // 500ms delay for smooth fade-out
      } catch (error) {
        console.error('Error fetching weather data.', error);
      }
    };

    fetchWeatherData();
  }, [selectedLocation]); // Refetch weather data when location is updated

  // Fetch city suggestions from OpenWeatherMap Geocoding API
  const fetchCitySuggestions = async (query) => {
    try {
      if (query.length === 0) {
        setSuggestions([]); // Clear suggestions if the search is empty
        return;
      }

      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
      );
      const cities = response.data;

      // Remove duplicates by checking for unique city + country combinations
      const uniqueCities = cities.filter(
        (city, index, self) =>
          index ===
          self.findIndex(
            (t) => t.name === city.name && t.country === city.country
          )
      );

      setSuggestions(uniqueCities); // Set filtered, unique city suggestions
    } catch (error) {
      console.error('Error fetching city suggestions.', error);
    }
  };

  // Handle search input changes and fetch suggestions
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    // Fetch suggestions regardless of input length
    fetchCitySuggestions(query);
  };

  // Handle location selection from suggestions
  const handleSuggestionClick = (location) => {
    setSelectedLocation(location.name); // Update selected location with city name
    setSearchTerm(''); // Clear the search bar
    setSuggestions([]); // Clear the suggestions list
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Weather</h2>

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
        className={`text-gray-700 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-2xl font-bold">{weather.temperature}°C</p>
        <p className="text-gray-500 capitalize">{weather.condition}</p>
        <p className="text-gray-500">
          {weather.city}, {weather.country}
        </p>
      </div>

      {/* Search bar */}
      <div className="mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
          placeholder="Search for a location..."
        />

        {/* Suggestions list */}
        {suggestions.length > 0 && (
          <ul
            className="border rounded bg-white mt-2 max-h-32 overflow-y-scroll"
            style={{ maxHeight: '8rem' }} // Limit the height and enable scrolling
          >
            {suggestions.map((location, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(location)}
                className="p-2 cursor-pointer hover:bg-gray-200"
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
