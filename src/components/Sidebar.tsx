import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: '/', label: 'Dashboard' },
  { to: '/tasks', label: 'Tasks' },
  // { to: '/charts', label: 'Charts' },
  { to: '/activities', label: 'Activity Feed' },
];

const Sidebar: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav style={sidebarStyle}>
      <div className="sidebar-header">
        <h1 style={logoStyle}>Dashboard</h1>
      </div>
      <ul style={menuStyle}>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              end={item.to === '/'}
              to={item.to}
              style={({ isActive }) => ({
                ...linkStyle,
                ...(isActive ? activeLinkStyle : {}),
                backgroundColor:
                  isActive
                    ? activeLinkStyle.backgroundColor
                    : hovered === index
                    ? '#5A67D8'
                    : linkStyle.backgroundColor,
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
};

const sidebarStyle: React.CSSProperties = {
  backgroundColor: '#1A202C',
  color: '#F7FAFC',
  height: '100vh',
  width: '175px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
};

const logoStyle: React.CSSProperties = {
  color: '#F7FAFC',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '30px',
};

const menuStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  flexGrow: 1,
};

const linkStyle: React.CSSProperties = {
  color: '#F7FAFC',
  textDecoration: 'none',
  fontSize: '18px',
  padding: '15px',
  display: 'block',
  borderRadius: '8px',
  backgroundColor: '#2D3748',
  marginBottom: '10px',
  border: '1px solid #4A5568',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const activeLinkStyle: React.CSSProperties = {
  backgroundColor: '#3037c2',
  color: '#F7FAFC',
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
};

export default Sidebar;