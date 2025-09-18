import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Home, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Award,
  TrendingUp,
  FileText,
  Bell
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Profile Settings', href: '/settings/profile', icon: User },
    { name: 'Security Settings', href: '/settings/security', icon: Shield },
  ];

  const hackerNavigation = [
    { name: 'My Reports', href: '/reports', icon: FileText },
    { name: 'Programs', href: '/programs', icon: Award },
    { name: 'Leaderboard', href: '/leaderboard', icon: TrendingUp },
  ];

  const companyNavigation = [
    { name: 'Manage Programs', href: '/manage-programs', icon: Award },
    { name: 'Review Reports', href: '/review-reports', icon: FileText },
    { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  ];

  const roleSpecificNav = user?.role === 'hacker' ? hackerNavigation : companyNavigation;

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-dark-700">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary-500" />
          <span className="text-xl font-bold text-white">BugBountyPro</span>
        </div>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 px-4 py-6">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={user?.avatar}
              alt={user?.username}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-white">{user?.username}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.href)
                  ? 'bg-primary-500/20 text-primary-400'
                  : 'text-gray-300 hover:text-white hover:bg-dark-700'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}

          <div className="pt-4">
            <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {user?.role === 'hacker' ? 'Bug Hunting' : 'Program Management'}
            </p>
            {roleSpecificNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-gray-300 hover:text-white hover:bg-dark-700'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-dark-700">
        <Button
          variant="ghost"
          onClick={logout}
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-xl"
            >
              <SidebarContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex h-full">
        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="bg-dark-900 border-r border-dark-700 h-full">
            <SidebarContent />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:pl-64">
          {/* Top bar */}
          <header className="bg-dark-800 border-b border-dark-700 px-4 py-3 lg:px-8">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <div className="flex items-center space-x-4 ml-auto">
                <button className="p-2 text-gray-400 hover:text-primary-400 transition-colors">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-300">
                    {user?.role === 'hacker' ? `${user?.reputation} pts` : `${user?.companyName}`}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-dark-950 min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};