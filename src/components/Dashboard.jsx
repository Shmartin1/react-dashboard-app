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

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Statistics Widget */}
      <StatisticsWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Task Summary Widget */}
      <TaskSummaryWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Chart Widget */}
      <ChartWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Progress Bar Widget */}
      <ProgressWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />
    
      {/* Weather Widget */}
      <WeatherWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Calendar Widget */}
      <DateTimeWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Recent Messages Widget */}
      <RecentMessageWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Recent Activity Widget */}
      <RecentActivityWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />

      {/* Notification Widget */}
      <NotificationWidget className="shadow-md hover:shadow-xl transition-shadow duration-300" />
    </div>
  );
}

export default Dashboard;
