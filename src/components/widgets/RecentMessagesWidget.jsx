import React from 'react';

function RecentMessageWidget({ className }) {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Recent Messages</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">New update available for the dashboard.</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
          </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">Meeting scheduled at 3 PM today.</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</span>
          </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">New user signup: John Doe</p>
            <span className="text-xs text-gray-500 dark:text-gray-400">1 day ago</span>
          </li>
        </ul>
      </div>
    );
}

export default RecentMessageWidget;