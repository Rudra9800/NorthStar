import React from 'react';

const XCMEcosystem = () => {
  const ecosystemItems = [
    { name: 'XCM', value: '$0.40' },
    { name: 'XCMX/USDT', value: '$0.41/$1.00' },
    { name: 'XCMX/EURO', value: '$0.41/€0.92' },
    { name: 'XCMX/GBP', value: '$0.41/£0.80' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">XCM Ecosystem</h2>
      <ul>
        {ecosystemItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
        Trade Now
      </button>
    </div>
  );
};

export default XCMEcosystem;