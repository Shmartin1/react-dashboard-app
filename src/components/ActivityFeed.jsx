import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from '../store/slices/recentActivitySlice';

function ActivityFeed() {
  const dispatch = useDispatch();
  const { activities, status, error } = useSelector((state) => state.recentActivity);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivities());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-3xl widget-title">Recent Activities</h2>
      {activities.length === 0 ? (
        <p>No recent activities.</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="mb-2">
              <span className="font-medium">{activity.text}</span>
              <span className="text-sm text-gray-500 ml-2">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivityFeed;