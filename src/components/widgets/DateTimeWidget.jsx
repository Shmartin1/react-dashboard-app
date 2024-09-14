import React, { useState, useEffect } from 'react';

function DateTimeWidget({ className }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Date & Time</h2>
      <div className="text-gray-700 text-4xl" style={{ fontFamily: "'HelveticaNeueRoman', sans-serif"}}>
        {currentTime.toLocaleDateString()} <br />
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default DateTimeWidget;
