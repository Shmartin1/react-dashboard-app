import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// Automatically generate all timezones
const timezones = Intl.supportedValuesOf('timeZone');

function DateTimeWidget({ className }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAnalog, setIsAnalog] = useState(false);
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone); // Default to local timezone
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);
  const [isTransitioningIn, setIsTransitioningIn] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time based on the selected timezone
  const formatTime = (date, timezone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(date);
  };

  const formatDate = (date, timezone) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
  
    return formattedDate.map((part, index) => {
      if (part.type === 'month') {
        return (
          <span key={index} className="text-4xl font-semibold">
            {part.value}
          </span>
        );
      }
      return part.value;
    });
  };
  

  const toggleClockMode = () => {
    setIsTransitioningOut(true);

    setTimeout(() => {
      setIsAnalog(!isAnalog);
      setIsTransitioningOut(false);
      setIsTransitioningIn(true);
      setTimeout(() => setIsTransitioningIn(false), 300);
    }, 300);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Current Date & Time
      </h2>

      <div className="flex items-center justify-between">
        <div
          className={`text-gray-700 dark:text-gray-200 text-4xl transition-all duration-300 ease-out transform ${
            isTransitioningOut ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          } ${isTransitioningIn ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontFamily: "'HelveticaNeueRoman', sans-serif",
            height: '160px',
            width: '100%',
          }}
        >
          {isAnalog ? (
            // Display the analog clock
            <div className="flex justify-center items-center">
              <div className="ml-7">
                <Clock value={currentTime} size={150} />
              </div>
            </div>
          ) : (
            // Display the digital clock with formatted time
            <div className="mt-4">
              {formatDate(currentTime, timezone)} <br />
              {formatTime(currentTime, timezone)}
            </div>
          )}
        </div>

        {/* Arrow to toggle between digital and analog */}
        <div className="ml-4 absolute top-1/2 transform -translate-y-1/2 right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-700 dark:text-blue-200 cursor-pointer transform transition-transform duration-300 hover:text-blue-500 hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleClockMode}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Timezone Dropdown */}
      <div className="mt-4">
        <select
          value={timezone}
          onChange={handleTimezoneChange}
          className="bg-gray-800 dark:bg-gray-700 text-gray-100 py-2 px-1 rounded w-52 text-sm"
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DateTimeWidget;
