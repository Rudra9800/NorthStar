import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TopMovers = () => {
  const createChartData = (data: number[]) => ({
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        data,
        borderColor: data[0] < data[data.length - 1] ? '#00FF00' : '#FF0000',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  const gainers = [
    { name: 'DOGE', change: '+8.41%', price: '0.1329 USD', data: [10, 15, 13, 18, 20, 25] },
  ];

  const losers = [
    { name: 'XCM', change: '-7.12%', price: '0.0407 USD', data: [25, 20, 18, 15, 13, 10] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Top gainer (24h)</h2>
        {gainers.map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">{coin.name}</span>
              <p className="text-green-500">{coin.change}</p>
              <p>{coin.price}</p>
            </div>
            <div className="w-24 h-12">
              <Line data={createChartData(coin.data)} options={options} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Top loser (24h)</h2>
        {losers.map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">{coin.name}</span>
              <p className="text-red-500">{coin.change}</p>
              <p>{coin.price}</p>
            </div>
            <div className="w-24 h-12">
              <Line data={createChartData(coin.data)} options={options} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovers;