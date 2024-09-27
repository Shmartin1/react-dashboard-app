import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store'; // You'll need to create this file
import { fetchChartData } from '../../store/slices/widgetSlices/chartWidgetSlice';
import LineChart from '../LineChart';

interface ChartWidgetProps {
  className?: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.chart);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChartData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className={`widget-card ${className}`}>Loading chart data...</div>;
  }

  if (status === 'failed') {
    return <div className={`widget-card ${className}`}>Error: {error}</div>;
  }

  return (
    <div className={`widget-card ${className}`}>
      <h2 className="widget-title">Activity Chart</h2>
      <div className="flex-justify-center h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="w-full max-w-xs">
          <LineChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default ChartWidget;