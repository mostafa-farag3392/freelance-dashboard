import React, { useState } from 'react';
import { Bell, Menu, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Header = () => {
  const { sidebarOpen, setSidebarOpen, notifications, markNotificationAsRead } = useApp();
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNotificationClick = (id) => {
    markNotificationAsRead(id);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Bell size={20} className="text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.slice(0, 3).map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id)}
                    className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer ${
                      notification.unread ? 'bg-blue-50' : ''
                    }`}
                  >
                    <p className="text-sm text-gray-900 mb-1">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                    {notification.unread && (
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">MF</span>
        </div>
      </div>
    </header>
  );
};

export default Header;