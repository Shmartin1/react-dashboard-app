import React from 'react';

function RecentActivityWidget({ className }) {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="widget-title">Recent Activity</h2>
            <ul className="space-y-2">
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">User John Doe completed task A</p>
                    <span className="timestamp-label">2 hours ago</span>
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">Server update deployed successfully</p>
                    <span className="timestamp-label">4 hours ago</span>
                </li>
                <li className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">Meeting scheduled for tomorrow</p>
                    <span className="timestamp-label">6 hours ago</span>
                </li>
            </ul>
        </div>
    );
}

export default RecentActivityWidget;