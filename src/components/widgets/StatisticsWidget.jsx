import React from 'react';

function StatisticsWidget({ className }) {
    return (
      <div className={`bg-white shadow-md rounded-lg p-6 space-y-8 ${className}`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistics</h2>

        {/* First Row*/}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">1,245</p>
            <p className="text-gray-500">Users</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">563</p>
            <p className="text-gray-500">Tasks</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">87%</p>
            <p className="text-gray-500">Completion</p>
          </div>
        </div>

        {/* Second Row*/}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">150</p>
            <p className="text-gray-500">Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-gray-500 items-center">Signups</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-gray-900">98%</p>
            <p className="text-gray-500">Satisfaction</p>
          </div>
        </div>
      </div>
    );
}

export default StatisticsWidget;
