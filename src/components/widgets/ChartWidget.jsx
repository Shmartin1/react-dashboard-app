import React from 'react';
import LineChart from '../LineChart';

function ChartWidget({ className }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Activity Chart</h2>
      <div className="flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="w-full max-w-xs">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default ChartWidget;
