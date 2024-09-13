import React from 'react';

function ProgressWidget({ className }) {
    return (
      <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Progress</h2>
        <p className="text-gray-700 mb-2">Dashboard Redesign</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-gray-500 text-sm mt-2">75% completed</p>
      </div>
    );
}

export default ProgressWidget;