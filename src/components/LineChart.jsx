import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const isDarkMode = document.body.classList.contains('dark');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [10, 20, 30, 40, 50],
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
      <h2 className="text-gray-800 dark:text-gray-200">Task Completion Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
