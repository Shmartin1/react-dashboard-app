import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setTimezone, toggleClockMode } from '../../store/slices/widgetSlices/dateTimeWidgetSlice';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

interface DateTimeWidgetProps {
  className?: string;
}

const timezones = Intl.supportedValuesOf('timeZone');

const DateTimeWidget: React.FC<DateTimeWidgetProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { timezone, isAnalog } = useSelector((state: RootState) => state.dateTime);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isTransitioningOut, setIsTransitioningOut] = useState(false);
  const [isTransitioningIn, setIsTransitioningIn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  const getTimeInTimezone = (date: Date, timeZone: string): Date => {
    const timeString = date.toLocaleString("en-US", { timeZone });
    return new Date(timeString);
  };

  const formatTime = (date: Date, timeZone: string): string =>
    new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    }).format(date);

  const formatDate = (date: Date, timeZone: string): React.ReactNode[] => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      timeZone 
    };
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
              <Clock 
                value={getTimeInTimezone(currentTime, timezone)}
                renderNumbers={true}
                size={150}
                className="custom-clock"
              />
            </div>
          ) : (
            <div className="mt-4">
              {formatDate(currentTime, timezone)} <br />
              {formatTime(currentTime, timezone)}
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
          className="unit-dropdown"
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