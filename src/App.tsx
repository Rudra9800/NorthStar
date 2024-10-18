import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-200">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <Dashboard sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </ThemeProvider>
  );
}

export default App;