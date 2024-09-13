// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>React Dashboard</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
};

export default Header;
