import React from 'react';

function NotificationWidget({ className }) {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Notifications</h2>
            <ul className="space-y-2">
                <li className="bg-red-100 text-red-800 p-3 rounded-lg">
                    <p>Critical: Disk space low...</p>
                    <span className="text-xs text-gray-800">10 minutes ago</span>
                </li>
                <li className="bg-yellow-100 text-yellow-800 p-3 rounded-lg">
                    <p>Warning: High memory usage detected</p>
                    <span className="text-xs text-gray-800">38 minutes ago</span>
                </li>
                <li className="bg-blue-100 text-blue-800 p-3 rounded-lg">
                    <p>Info: New login from IP 192.168.1.1</p>
                    <span className="text-xs text-gray-800">59 minutes ago</span>
                </li>
            </ul>
        </div>
    );
}

export default NotificationWidget;