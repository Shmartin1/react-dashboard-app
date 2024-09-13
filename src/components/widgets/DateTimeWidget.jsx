import React from 'react';

function DateTimeWidget({ className }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Date & Time</h2>
      <div className="text-gray-700 text-xl">
        {new Date().toLocaleDateString()} <br />
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}

export default DateTimeWidget;
