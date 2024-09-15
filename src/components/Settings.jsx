import React, { useState, useEffect } from 'react';

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    const shouldBeDarkMode = darkModePreference === 'enabled';
    setIsDarkMode(shouldBeDarkMode);
    if (shouldBeDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
      if (newMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return newMode;
    });
  };

  if (!isLoaded) {
    return null; // or a loading indicator
  }

  return (
    <div className="p-6">
      <h1 className="widget-title">Settings Page</h1>
      
      {/* Dark Mode Toggle */}
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