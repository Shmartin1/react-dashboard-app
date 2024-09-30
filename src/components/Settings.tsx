import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from '../store';
import { toggleDarkMode, setIsDarkMode } from '../store/slices/settingsSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state: RootState) => state.settings);

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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 widget-container dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 dark:text-white">Settings</h1>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg widget-card">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="">Theme</h2>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Choose your preferred theme.</p>
            </div>
            <div className="mt-5">
              <label className="flex items-center space-x-2">
                <span className="text-gray-800 dark:text-gray-200">Dark Mode</span>
                <input 
                  type="checkbox" 
                  checked={settings.isDarkMode} 
                  onChange={handleToggleDarkMode} 
                  className="toggle-checkbox"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Add more settings sections as needed */}

      </div>
    </div>
  );
};

export default Settings;