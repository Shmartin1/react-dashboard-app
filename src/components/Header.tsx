import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-gray-100 p-4 shadow-md">
            <div className="max-w-7x1 mx-auto flex-justify-center">
                <Link to='/'>
                    <h1 className="text-2x1 font-semibold">Joshua Martin</h1>
                </Link>
        
                <div className="space-x-4 flex items-center">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                    <Link to="/dashboard" className="header-link">
                        Dashboard
                    </Link>
                    {/* <Link to="/profile" className="header-link">
                        Profile
                    </Link> */}
                    <Link to="/settings" className="header-link">
                        Settings
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;