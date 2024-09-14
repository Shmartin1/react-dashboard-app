import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function DateTimeWidget({ className }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAnalog, setIsAnalog] = useState(false);
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);
  const [isTransitioningIn, setIsTransitioningIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleClockMode = () => {
    setIsTransitioningOut(true);

    setTimeout(() => {
      setIsAnalog(!isAnalog);
      setIsTransitioningOut(false);
      setIsTransitioningIn(true);
      setTimeout(() => setIsTransitioningIn(false), 300);
    }, 300);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
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
            // Display the digital clock
            <div className="mt-4">
              {currentTime.toLocaleDateString()} <br />
              {currentTime.toLocaleTimeString()}
            </div>
          )}
        </div>

        {/* Arrow to toggle between digital and analog */}
        <div className="ml-15 -mt-10">
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
    </div>
  );
}

export default DateTimeWidget;
