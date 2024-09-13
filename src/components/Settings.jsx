import React, { useState, useEffect } from 'react';

function Settings() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Get user preference
   useEffect(() => {
    const darkModePref = localStorage.getItem('darkMode');
    if(darkModePref === 'enabled') {
        setIsDarkMode(true);
        document.body.classList.add('dark');
    } else {
        setIsDarkMode(false);
        document.body.classList.remove('dark');
    }
   }, []);

   //Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        if(!isDarkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkmode', 'disabled');
        }
   };

   return (
    <div className="p-6">
        <h1 className="text-3x1 font-semibold text-gray-800 dark:text-gray-200">Settings</h1>
    
        <div className="mt-4">
            <label className="flex items-center space-x-2">
                <span className="text-gray-800 dark:text-gray-200">Dark Mode</span>
                <input 
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="toggle-checkbox"
                />
            </label>
        </div>
    </div>
   );
}

export default Settings;