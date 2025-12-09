import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    HomeIcon,
    ChartBarIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    InboxIcon,
    ChartPieIcon,
    CogIcon,
    ChevronRightIcon,
    ArrowRightOnRectangleIcon,
    UserCircleIcon,
    BellIcon,
    QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, notification: false },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, notification: true },
    { name: 'Users', href: '/users', icon: UsersIcon, count: 24 },
    { name: 'Projects', href: '/projects', icon: FolderIcon, count: 12 },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon, notification: true },
    { name: 'Messages', href: '/messages', icon: InboxIcon, count: 8 },
    { name: 'Reports', href: '/reports', icon: ChartPieIcon, notification: false },
    { name: 'Settings', href: '/settings', icon: CogIcon, notification: false },
];

const Sidebar = ({ closeSidebar }) => {
    return (
        <div className="flex h-full flex-col bg-white shadow-xl border-r border-gray-200">
            {/* Logo Section */}
            <div className="flex h-20 shrink-0 items-center px-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">Infinitybyte</h1>
                        <p className="text-xs text-gray-500">Solutions</p>
                    </div>
                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={closeSidebar}
                    >
                        {({ isActive }) => (
                            <div
                                className={`group flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <div className="flex items-center">
                                    <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-gray-100'} group-hover:bg-blue-100 transition-colors`}>
                                        <item.icon
                                            className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="ml-3 font-medium">{item.name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  
                                    <ChevronRightIcon className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        )}
                    </NavLink>

                ))}
            </nav>

            {/* User Profile Section */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                                <UserCircleIcon className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">M Zain</p>
                            <p className="text-xs text-gray-500">zain@gmail.com</p>
                        </div>
                    </div>
                    <button
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Logout"
                    >
                        <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;