import React from 'react';

function RecentActivityWidget({ className }) {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-2">
                <li className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-gray-700">User John Doe completed task A</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                </li>
                <li className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-gray-700">Server update deployed successfully</p>
                    <span className="text-xs text-gray-500">4 hours ago</span>
                </li>
                <li className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-gray-700">Meeting scheduled for tomorrow</p>
                    <span className="text-xs text-gray-500">6 hours ago</span>
                </li>
            </ul>
        </div>
    );
}

export default RecentActivityWidget;