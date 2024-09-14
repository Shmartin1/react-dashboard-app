import React from 'react';

function StatisticsWidget({ className }) {
  const stats = [
    { value: '1,245', label: 'Users' },
    { value: '563', label: 'Tasks' },
    { value: '87%', label: 'Completion' },
    { value: '150', label: 'Projects' },
    { value: '24', label: 'Signups' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-8 ${className}`}>
      <h2 className="dark:text-gray-200 text-2xl font-semibold text-gray-800 mb-4">Statistics</h2>

      {/* Statistics Rows */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">{stat.value}</p>
            <p className="text-gray-500 dark:text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticsWidget;
