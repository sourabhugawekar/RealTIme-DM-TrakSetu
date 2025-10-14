'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Shield,
  LayoutDashboard,
  Users,
  GraduationCap,
  MapPin,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Trainings',
    href: '/trainings',
    icon: GraduationCap,
  },
  {
    name: 'Participants',
    href: '/participants',
    icon: Users,
  },
  {
    name: 'Locations',
    href: '/locations',
    icon: MapPin,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
  },
  {
    name: 'Feedback',
    href: '/feedback',
    icon: MessageSquare,
  },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Enhanced Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-[#003366] via-[#004080] to-[#002244] text-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Enhanced Logo */}
          <div className="relative overflow-hidden px-6 py-6 border-b border-blue-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <Shield className="h-7 w-7" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    ResiSphere
                  </h1>
                  <p className="text-xs text-blue-300">NDMA Dashboard</p>
                </div>
              </div>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-blue-800/50 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto sidebar-scroll">
            <p className="px-4 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Main Menu
            </p>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                      : 'text-blue-100 hover:bg-blue-800/50 hover:text-white hover:scale-102'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/20'
                      : 'bg-blue-800/30 group-hover:bg-blue-700/50'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-white animate-pulse"></div>
                  )}
                </Link>
              );
            })}
            
            {/* Settings Link */}
            <div className="pt-4 mt-4 border-t border-blue-800/50">
              <p className="px-4 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
                System
              </p>
              <Link
                href="/settings"
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  pathname === '/settings'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'text-blue-100 hover:bg-blue-800/50 hover:text-white hover:scale-102'
                }`}
              >
                <div className={`p-2 rounded-lg transition-all ${
                  pathname === '/settings'
                    ? 'bg-white/20'
                    : 'bg-blue-800/30 group-hover:bg-blue-700/50'
                }`}>
                  <Settings className="h-5 w-5" />
                </div>
                <span className="font-medium">Settings</span>
              </Link>
            </div>
          </nav>

          {/* Enhanced User Profile */}
          <div className="px-4 py-4 border-t border-blue-800/50 bg-gradient-to-r from-blue-900/30 to-transparent">
            <div className="flex items-center space-x-3 px-4 py-3 mb-2 rounded-xl bg-blue-900/30 backdrop-blur-sm">
              <Avatar className="ring-2 ring-blue-400/50">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold">
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Admin User</p>
                <p className="text-xs text-blue-300 truncate">admin@ndma.gov.in</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-blue-100 hover:bg-red-600/20 hover:text-red-200 transition-all duration-200 rounded-xl"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="font-medium">Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Enhanced Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            
            {/* Page Title - Optional, can be removed if redundant */}
            <div className="flex-1 lg:block hidden">
              <p className="text-sm text-gray-500">
                Welcome back, <span className="font-semibold text-gray-900">Admin</span>
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3">
              <Link href="/settings">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 content-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
