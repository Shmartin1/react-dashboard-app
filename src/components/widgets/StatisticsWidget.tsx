import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface StatisticsWidgetProps {
  className?: string;
}

const StatisticsWidget: React.FC<StatisticsWidgetProps> = ({ className }) => {
  const stats = useSelector((state: RootState) => state.statistics.stats);

  return (
    <div className={`widget-card space-y-8 ${className}`}>
      <h2 className="widget-title">Statistics</h2>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center mb-4">
            <p className="stat-val">{stat.value}</p>
            <p className="task-summary-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsWidget;