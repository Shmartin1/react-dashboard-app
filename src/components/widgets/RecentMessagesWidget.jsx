import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

function RecentMessageWidget({ className }) {
  const handleTrashClick = () => {
    console.log('hi');
  };

    return (
      <div className={`widget-card ${className}`}>
         <div className="flex justify-between items-center">
              <h2 className="widget-title select-none">Recent Messages</h2>
              <TrashIcon
                className="h-5 w-5 text-gray-700 dark:text-gray-400 cursor-pointer hover:text-red-500 mb-4"
                onClick={handleTrashClick}
              />
          </div>
        <ul className="space-y-2">
          <li className="recent-message">
            <p className="message-text">New update available for the dashboard.</p>
            <span className="timestamp-label">2 hours ago</span>
          </li>
          <li className="recent-message">
            <p className="message-text">Meeting scheduled at 3 PM today.</p>
            <span className="timestamp-label">5 hours ago</span>
          </li>
          <li className="recent-message">
            <p className="message-text">New user signup: John Doe</p>
            <span className="timestamp-label">1 day ago</span>
          </li>
        </ul>
      </div>
    );
}

export default RecentMessageWidget;