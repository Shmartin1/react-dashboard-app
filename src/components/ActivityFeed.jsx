// src/components/ActivityFeed.jsx
import React, { useState, useEffect } from 'react';

function ActivityFeed() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch activities
    setActivities([
      { id: 1, activity: 'User A completed Task 1' },
      { id: 2, activity: 'User B completed Task 2' },
    ]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
