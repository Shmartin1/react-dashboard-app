// src/components/widgets/StatisticsWidget.js
import React from 'react';
import { useSelector } from 'react-redux';

function StatisticsWidget({ className }) {
  const stats = useSelector((state) => state.statistics.stats);

  return (
    <div className={`widget-card space-y-8 ${className}`}>
      <h2 className="widget-title">Statistics</h2>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center mb-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">{stat.value}</p>
            <p className="text-gray-500 dark:text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsWidget;