import Treact, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startProgress,
  stopProgress,
  resetProgress,
  incrementProgress
} from '../../store/slices/widgetSlices/progressWidgetSlice';
import { RootState } from '../../store';

interface ProgressWidgetProps {
  className?: string;
}

const ProgressWidget: React.FC<ProgressWidgetProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { progress, isProgressing } = useSelector((state: RootState) => state.progress);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isProgressing) {
      intervalId = setInterval(() => {
        dispatch(incrementProgress());
      }, 75);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isProgressing, dispatch]);

  const handleProgress = () => {
    if (!isProgressing && progress !== 100) {
      dispatch(startProgress());
    }
  };

  const handleReset = () => {
    dispatch(resetProgress());
  };

  return (
    <div className={`widget-card ${className}`}>
      <h2 className="widget-title">Project Progress</h2>
      
      {/* Progress Bar */}
      <p className="text-gray-700 dark:text-gray-200 mb-2">Dashboard Redesign</p>
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
            onClick={handleReset}
          >
            Reset
          </button>
        }
      </p>
    </div>
  );
}

export default ProgressWidget;