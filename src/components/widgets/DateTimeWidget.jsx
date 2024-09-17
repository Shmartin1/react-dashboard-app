// src/components/widgets/DateTimeWidget.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentTime, setTimezone, toggleClockMode } from '../../store/slices/widgetSlices/dateTimeWidgetSlice';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const timezones = Intl.supportedValuesOf('timeZone');

function DateTimeWidget({ className }) {
  const dispatch = useDispatch();
  const { currentTime, timezone, isAnalog } = useSelector((state) => state.dateTime);
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);
  const [isTransitioningIn, setIsTransitioningIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => dispatch(updateCurrentTime()), 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const handleTimezoneChange = (e) => {
    dispatch(setTimezone(e.target.value));
  };

  const handleClockModeToggle = () => {
    setIsTransitioningOut(true);
    setTimeout(() => {
      dispatch(toggleClockMode());
      setIsTransitioningOut(false);
      setIsTransitioningIn(true);
      setTimeout(() => setIsTransitioningIn(false), 300);
    }, 300);
  };

  const formatTime = (date, timeZone) =>
    new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(date);

  const formatDate = (date, timeZone) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone };
    return new Intl.DateTimeFormat('en-US', options)
      .formatToParts(date)
      .map((part, index) =>
        part.type === 'month' ? (
          <span key={index} className="text-4xl font-semibold">
            {part.value}
          </span>
        ) : (
          part.value
        )
      );
  };

  const timeInSelectedTimezone = new Date(currentTime);

  return (
    <div className={`widget-card ${className}`}>
      <h2 className="widget-title mb-1">Current Date & Time</h2>

      <div className="flex-justify-center relative">
        <div
          className={`text-gray-700 dark:text-gray-200 text-4xl transition-all duration-300 ease-out transform ${
            isTransitioningOut ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          } ${isTransitioningIn ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: "'HelveticaNeueRoman', sans-serif", height: '160px', width: 'calc(100% - 40px)' }}
        >
          {isAnalog ? (
            <div className="flex justify-center items-center h-full">
              <Clock value={timeInSelectedTimezone} size={150} />
            </div>
          ) : (
            <div className="mt-4">
              {formatDate(timeInSelectedTimezone, timezone)} <br />
              {formatTime(timeInSelectedTimezone, timezone)}
            </div>
          )}
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-10 h-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-700 dark:text-blue-200 cursor-pointer transition-colors duration-300 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClockModeToggle}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="mt-6">
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