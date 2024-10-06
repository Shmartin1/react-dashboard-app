import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header-style">
            <div className="header-container">
                <div className="flex-justify">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                    <Link to="/dashboard" className="header-link">
                        Dashboard
                    </Link>
                    <Link to="/resume" className="header-link">
                        Resume
                    </Link>
                    <Link to="/research" className="header-link">
                        Research
                    </Link>
                    <Link to="/settings" className="header-link">
                        Settings
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;