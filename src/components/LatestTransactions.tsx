import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const LatestTransactions = () => {
  const transactions = [
    { type: 'Received', asset: 'BTC', amount: '0.0025', value: '$125.00' },
    { type: 'Sent', asset: 'ETH', amount: '0.5', value: '$1,000.00' },
    { type: 'Received', asset: 'XCM', amount: '500', value: '$200.00' },
    { type: 'Sent', asset: 'USDT', amount: '1000', value: '$1,000.00' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Type</th>
            <th>Asset</th>
            <th className="text-right">Amount</th>
            <th className="text-right">Value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="border-t dark:border-gray-700">
              <td className="py-2 flex items-center">
                {tx.type === 'Received' ? (
                  <ArrowDownLeft className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-red-500 mr-2" />
                )}
                {tx.type}
              </td>
              <td>{tx.asset}</td>
              <td className="text-right">{tx.amount}</td>
              <td className="text-right">{tx.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 text-blue-500 hover:underline">See More</button>
    </div>
  );
};

export default LatestTransactions;