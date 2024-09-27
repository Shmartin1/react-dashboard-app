import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  month: string;
  tasks: number;
}

interface LineChartProps {
  data: ChartData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const isDarkMode = document.body.classList.contains('dark');

  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Tasks Completed',
        data: data.map(item => item.tasks),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3, // For smooth curves
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563',
        },
        grid: {
          color: isDarkMode ? '#374151' : '#E5E7EB',
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563',
        },
        grid: {
          color: isDarkMode ? '#374151' : '#E5E7EB',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#E5E7EB' : '#4B5563',
        },
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="widget-title">Task Completion Trends</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;