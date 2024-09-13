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
      <StatisticsWidget />

      {/* Task Summary Widget */}
      <TaskSummaryWidget />

      {/* Chart Widget*/}
      <ChartWidget />

      {/* Progress Bar Widget */}
      <ProgressWidget />
    
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Calendar Widget */}
      <DateTimeWidget />

      {/* Recent Messages Widget */}
      <RecentMessageWidget />

      {/* Recent Activity Widget*/}
      <RecentActivityWidget />

      {/* Notification Widget*/}
      <NotificationWidget />
    </div>
  );
}

export default Dashboard;
