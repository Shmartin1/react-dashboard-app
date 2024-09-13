// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={sidebarStyle}>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/activities">Activities</Link></li>
      </ul>
    </nav>
  );
}

const sidebarStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '15px',
  height: '100vh',
};

export default Sidebar;
