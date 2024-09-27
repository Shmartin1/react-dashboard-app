import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from '../store/slices/recentActivitySlice';
import { RootState, AppDispatch } from '../store'; // Make sure to create these types in your store file

interface ActivityFeedProps {
  className?: string;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { activities, status, error } = useSelector((state: RootState) => state.recentActivity);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivities());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className={className}>Loading...</div>;
  }

  if (status === 'failed') {
    return <div className={className}>Error: {error}</div>;
  }

  return (
    <div className={`p-5 ${className}`}>
      <h2 className="text-3xl font-bold mb-4">Recent Activities</h2>
      {activities.length === 0 ? (
        <p>No recent activities.</p>
      ) : (
        <ul className="space-y-3">
          {activities.map((activity) => (
            <li key={activity.id} className="recent-message shadow">
              <p className="message-text">{activity.text}</p>
              <span className="timestamp-label">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityFeed;