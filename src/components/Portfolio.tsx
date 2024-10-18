import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
  const data = {
    labels: ['BTC', 'ETH', 'EUR', 'XCM'],
    datasets: [
      {
        data: [27273.07, 26333.08, 1084.71, 407.52],
        backgroundColor: ['#F7931A', '#627EEA', '#0F8FF8', '#1E90FF'],
        borderColor: ['#F7931A', '#627EEA', '#0F8FF8', '#1E90FF'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  const assets = [
    { name: 'BTC - Bitcoin', amount: '0.5', price: '54,547.79 USD', value: '27,273.07 USD' },
    { name: 'ETH - Ethereum', amount: '10', price: '2,633.38 USD', value: '26,333.08 USD' },
    { name: 'EUR - Euro', amount: '1,000', price: '1.08 USD', value: '1,084.71 USD' },
    { name: 'XCM - Coinmetro Token', amount: '10,000', price: '0.04 USD', value: '407.52 USD' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Portfolio</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">Overview</button>
          <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">History</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Doughnut data={data} options={options} />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Asset</th>
                <th className="text-right">Amount</th>
                <th className="text-right">Current Price</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index} className="border-t dark:border-gray-700">
                  <td className="py-2">{asset.name}</td>
                  <td className="text-right">{asset.amount}</td>
                  <td className="text-right">{asset.price}</td>
                  <td className="text-right">{asset.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;