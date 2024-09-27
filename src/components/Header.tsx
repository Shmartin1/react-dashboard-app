import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-gray-100 p-4 shadow-md">
            <div className="max-w-7x1 mx-auto flex-justify-center">
                <h1 className="text-2x1 font-semibold">React Dashboard</h1>
        
                <div className="space-x-4 flex items-center">
                    <Link to="/profile" className="header-link">
                        Profile
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