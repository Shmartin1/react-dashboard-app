import React from 'react';
import LineChart from '../LineChart';

function ChartWidget({ className }) {
  return (
    <div className={`widget-card transition-colors duration-300 ${className}`}>
      <h2 className="widget-title">Activity Chart</h2>
      <div className="flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="w-full max-w-xs">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default ChartWidget;
