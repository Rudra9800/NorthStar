import React from 'react';
import { Home, Wallet, FileText, BarChart2, Repeat, Zap, CreditCard, Copy, Coins, User, Bell, AlertTriangle, Moon, Users, Smartphone, HelpCircle, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Wallet, label: 'Wallets' },
    { icon: FileText, label: 'Transactions' },
    { icon: BarChart2, label: 'Markets' },
    { icon: Repeat, label: 'Exchange' },
    { icon: Zap, label: 'Margin' },
    { icon: CreditCard, label: 'Staking' },
    { icon: Copy, label: 'Copy Trading' },
    { icon: Coins, label: 'XCM token' },
  ];

  const accountItems = [
    { icon: User, label: 'Account' },
    { icon: Bell, label: 'Notifications', badge: '2' },
    { icon: AlertTriangle, label: 'Price Alerts' },
    { icon: Moon, label: 'Dark mode', onClick: toggleTheme },
    { icon: Users, label: 'Refer a Friend' },
    { icon: Smartphone, label: 'Mobile App' },
    { icon: HelpCircle, label: 'Support & FAQ' },
    { icon: LogOut, label: 'Logout' },
  ];

  return (
    <div className={`${open ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 h-screen p-5 pt-8 relative duration-300 transition-all`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6">
          <Zap className="h-8 w-8 text-blue-500 mr-2" />
          <div className={`flex flex-col ${!open && "hidden"}`}>
            <h1 className="text-blue-500 font-medium text-xl">Coinmetro</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">Demo</span>
              <span className="font-bold">55,080.48 USD</span>
            </div>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className={`ml-3 ${!open && "hidden"}`}>{item.label}</span>
                {item.label === 'Staking' && <span className={`ml-auto text-xs bg-blue-500 text-white px-1 rounded ${!open && "hidden"}`}>New</span>}
                {item.label === 'XCM token' && <span className={`ml-auto text-xs bg-blue-500 text-white px-1 rounded ${!open && "hidden"}`}>New</span>}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className={`text-xs font-semibold text-gray-500 mb-2 ${!open && "hidden"}`}>ACCOUNT</h2>
            <ul className="space-y-2">
              {accountItems.map((item, index) => (
                <li key={index} className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" onClick={item.onClick}>
                  <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className={`ml-3 ${!open && "hidden"}`}>{item.label}</span>
                  {item.badge && <span className={`ml-auto text-xs bg-red-500 text-white px-1 rounded ${!open && "hidden"}`}>{item.badge}</span>}
                  {item.label === 'Refer a Friend' && <span className={`ml-auto text-xs text-green-500 ${!open && "hidden"}`}>EARN $10</span>}
                  {item.label === 'Support & FAQ' && <span className={`ml-auto text-xs bg-blue-500 text-white px-1 rounded ${!open && "hidden"}`}>24/7</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;