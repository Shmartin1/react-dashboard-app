import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  // Track hover state for each link
  const [hovered, setHovered] = useState(null);

  return (
    <nav style={sidebarStyle}>
      <div className="sidebar-header">
        <h1 style={logoStyle}>Dashboard</h1>
      </div>
      <ul style={menuStyle}>
        {[
          { to: '/', label: 'Dashboard' },
          { to: '/profile', label: 'Profile' },
          { to: '/tasks', label: 'Tasks' },
          { to: '/charts', label: 'Charts' },
          { to: '/activities', label: 'Activities' },
        ].map((item, index) => (
          <li key={index}>
            <NavLink
              exact
              to={item.to}
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeLinkStyle : {}),
                backgroundColor:
                  isActive
                    ? activeLinkStyle.backgroundColor // Active background
                    : hovered === index
                    ? '#5A67D8' // Hover background when not active
                    : linkStyle.backgroundColor, // Default background
              })}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const sidebarStyle = {
  backgroundColor: '#1A202C', // Primary color (dark slate gray)
  color: '#F7FAFC', // Light text
  height: '100vh',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
};

const logoStyle = {
  color: '#F7FAFC', // Light text
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '30px',
};

const menuStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  flexGrow: 1,
};

const linkStyle = {
  color: '#F7FAFC', // Light text
  textDecoration: 'none',
  fontSize: '18px',
  padding: '15px',
  display: 'block',
  borderRadius: '8px',
  backgroundColor: '#2D3748', // Slightly lighter background for links
  marginBottom: '10px',
  border: '1px solid #4A5568',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const activeLinkStyle = {
  backgroundColor: '#3037c2', // Muted Indigo/Slate Blue for the active state
  color: '#F7FAFC', // Keep the text color light
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)', // Stronger shadow for active state
};

export default Sidebar;
