import React from 'react';

function RecentMessageWidget({ className }) {
    return (
        <div className={`widget-card ${className}`}>
        <h2 className="widget-title">Recent Messages</h2>
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