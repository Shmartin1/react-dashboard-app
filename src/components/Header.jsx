import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-gray-100 p-4 shadow-md">
      <div className="max-w-7x1 mx-auto flex justify-between items-center">
        <h1 className="text-2x1 font-semibold">React Dashboard</h1>

        <div className="space-x-4 flex items-center">
          <Link to="/profile" className="text-gray-200 hover:text-white transition-colors">
            Profile
          </Link>
          <Link to="/settings" className="text-gray-200 hover:text-white transition-colors">
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;