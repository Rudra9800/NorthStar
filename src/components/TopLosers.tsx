import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TopLosers = () => {
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'XCM',
        data: [25, 20, 18, 15, 13, 10],
        borderColor: '#FF0000',
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
      <h2 className="text-xl font-bold mb-4">Top Loser (24h)</h2>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold">XCM</span>
          <p className="text-red-500">-8.45%</p>
        </div>
        <div className="w-24 h-12">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TopLosers;