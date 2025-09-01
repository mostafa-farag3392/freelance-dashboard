import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderOpen, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useApp();
  const location = useLocation();
  
  const navigation = [
    { name: 'Overview', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Profile Settings', href: '/profile', icon: User },
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">FreelancePro</h2>
        </div>
        
        <nav className="mt-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center px-6 py-3 text-sm font-medium transition-colors
                  ${isActive(item.href)
                    ? 'bg-blue-600 text-white border-r-2 border-blue-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }
                `}
              >
                <Icon size={20} className="mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;