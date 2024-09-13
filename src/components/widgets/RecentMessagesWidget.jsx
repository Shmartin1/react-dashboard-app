import React from 'react';

function RecentMessageWidget() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Messages</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-700">New update available for the dashboard.</p>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </li>
          <li className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-700">Meeting scheduled at 3 PM today.</p>
            <span className="text-xs text-gray-500">5 hours ago</span>
          </li>
          <li className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-700">New user signup: John Doe</p>
            <span className="text-xs text-gray-500">1 day ago</span>
          </li>
        </ul>
      </div>
    );
}

export default RecentMessageWidget;