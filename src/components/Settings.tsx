import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { toggleDarkMode, setIsDarkMode } from '../store/slices/settingsSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.settings.isDarkMode);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    if(darkModePreference === 'enabled') {
      dispatch(setIsDarkMode(true));
    }
  }, [dispatch]);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

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
            onChange={handleToggleDarkMode} 
            className="toggle-checkbox"
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;