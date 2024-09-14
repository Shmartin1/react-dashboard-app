import React from 'react';

function RecentActivityWidget({ className }) {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Recent Activity</h2>
            <ul className="space-y-2">
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">User John Doe completed task A</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">Server update deployed successfully</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</span>
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">Meeting scheduled for tomorrow</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">6 hours ago</span>
                </li>
            </ul>
        </div>
    );
}

export default RecentActivityWidget;