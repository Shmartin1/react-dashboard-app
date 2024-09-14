import React, { useState } from 'react';

function ProgressWidget({ className }) {
  const [progress, setProgress] = useState(0);
  const [isProgressing, setIsProgressing] = useState(false);

  const handleProgress = () => {
    if(!isProgressing && progress !== 100) {
      setIsProgressing(true);
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);

        if(currentProgress >= 100) {
          clearInterval(interval);
          setIsProgressing(false);
        }
      }, 75);
    }
  };

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
      <h2 className="widget-title">Project Progress</h2>
      
      {/* Progress Bar */}
      <p className="text-gray-700 dark:text-gray-200 mb-2">Dashboard Redisgn</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% completed</p>



      <p className="flex flex-row space-x-4">
        {/* Button to start progress */}
        <button
          onClick={handleProgress}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4"
          disabled={isProgressing}
        >
            {
              isProgressing && progress !== 100 ? 'Loading...' :
              !isProgressing && progress === 100 ? 'Done' :
              'Start'
            }
        </button>
        {/* Conditionally render Restart button */}
        {progress === 100 && 
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4"
            onClick={resetProgress}
          >
            Reset
          </button>
        }
        
      </p>
    </div>
  );
}

export default ProgressWidget;