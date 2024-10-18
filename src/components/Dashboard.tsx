import React from 'react';
import Portfolio from './Portfolio';
import TopMovers from './TopMovers';
import LatestTransactions from './LatestTransactions';
import TwitterSentiment from './TwitterSentiment';
import Swap from './Swap';
import { Menu, PlusCircle, ArrowDownToLine, ArrowUpFromLine, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DashboardProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex-1 p-4 md:p-7 overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <Menu className="h-6 w-6 mr-4 cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-xl font-semibold">$55,098.4 USD</span>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-2 rounded flex items-center">
              <PlusCircle className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Add Cash</span>
            </button>
            <button className="bg-green-500 text-white px-3 py-2 rounded flex items-center">
              <ArrowDownToLine className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Deposit</span>
            </button>
            <button className="bg-red-500 text-white px-3 py-2 rounded flex items-center">
              <ArrowUpFromLine className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Withdraw</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Portfolio />
          <TopMovers />
          <LatestTransactions />
        </div>
        <div>
          <Swap />
          <TwitterSentiment />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;