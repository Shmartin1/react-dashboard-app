// src/components/Dashboard.jsx
import React from 'react';

function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <h2>Dashboard Overview</h2>
      <p>This is the main dashboard area where widgets will be displayed.</p>
    </div>
  );
}

const dashboardStyle = {
  padding: '20px',
};

export default Dashboard;
