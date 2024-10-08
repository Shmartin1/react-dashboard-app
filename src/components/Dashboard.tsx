import React from 'react';
import StatisticsWidget from './widgets/StatisticsWidget';
import TaskSummaryWidget from './widgets/TaskSummaryWidget';
import RecentMessageWidget from './widgets/RecentMessagesWidget';
import ProgressWidget from './widgets/ProgressWidget';
import DateTimeWidget from './widgets/DateTimeWidget';
import ChartWidget from './widgets/ChartWidget';
import WeatherWidget from './widgets/WeatherWidget';
import RecentActivityWidget from './widgets/RecentActivityWidget';
import NotificationWidget from './widgets/NotificationWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Statistics Widget */}
      <StatisticsWidget className="widget-container" />

      {/* Task Summary Widget */}
      <TaskSummaryWidget className="widget-container" />

      {/* Chart Widget */}
      <ChartWidget className="widget-container" />

      {/* Progress Bar Widget */}
      <ProgressWidget className="widget-container" />
    
      {/* Weather Widget */}
      <WeatherWidget className="widget-container" />

      {/* Calendar Widget */}
      <DateTimeWidget className="widget-container" />

      {/* Recent Messages Widget */}
      <RecentMessageWidget className="widget-container" />

      {/* Recent Activity Widget */}
      <RecentActivityWidget className="widget-container" />

      {/* Notification Widget */}
      <NotificationWidget className="widget-container" />
    </div>
  );
}

export default Dashboard;
