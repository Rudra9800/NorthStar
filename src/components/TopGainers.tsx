import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TopGainers = () => {
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'DOGE',
        data: [10, 15, 13, 18, 20, 25],
        borderColor: '#00FF00',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Top Gainer (24h)</h2>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold">DOGE</span>
          <p className="text-green-500">+15.23%</p>
        </div>
        <div className="w-24 h-12">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TopGainers;