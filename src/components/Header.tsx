import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header-style">
      <div className="header-container">
        <nav className="flex-justify" aria-label="Primary navigation">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/resume" className="header-link">
            Resume
          </Link>
          <Link to="/projects" className="header-link">
            Projects
          </Link>
          <Link to="/research" className="header-link">
            Research
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
