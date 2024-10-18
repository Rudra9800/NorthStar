import React from 'react';
import { ArrowDownUp } from 'lucide-react';

const Swap = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Swap</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">From</label>
        <div className="flex items-center">
          <input type="number" className="w-full p-2 border dark:border-gray-700 rounded" placeholder="0.00" />
          <select className="ml-2 p-2 border dark:border-gray-700 rounded">
            <option>USD</option>
            <option>BTC</option>
            <option>ETH</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <ArrowDownUp className="h-6 w-6" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">To</label>
        <div className="flex items-center">
          <input type="number" className="w-full p-2 border dark:border-gray-700 rounded" placeholder="0.000000" />
          <select className="ml-2 p-2 border dark:border-gray-700 rounded">
            <option>BTC</option>
            <option>USD</option>
            <option>ETH</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded">Swap</button>
    </div>
  );
};

export default Swap;