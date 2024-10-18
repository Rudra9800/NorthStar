import React from 'react';

const TwitterSentiment = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Twitter Sentiment</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 dark:text-gray-700 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-blue-500 progress-ring stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset="50"
              transform="rotate(-90 50 50)"
            ></circle>
            <text x="50" y="50" fontFamily="Verdana" fontSize="20" textAnchor="middle" alignmentBaseline="middle" fill="currentColor">
              0
            </text>
          </svg>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-blue-500 font-bold">Neutral</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Based on BTC tweets</p>
      </div>
    </div>
  );
};

export default TwitterSentiment;