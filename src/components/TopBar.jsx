import React from 'react';
import { 
    Bars3Icon, 
    BellIcon, 
    MagnifyingGlassIcon, 
    ChevronDownIcon,
    QuestionMarkCircleIcon,
    SunIcon,
    MoonIcon,
    HandRaisedIcon
} from '@heroicons/react/24/outline';

const TopBar = ({ setSidebarOpen }) => {
    const [darkMode, setDarkMode] = React.useState(false);
    
    // Get current time for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };
    
    return (
        <div className="sticky top-0 z-50 bg-white border-b items-center justify-center border-gray-200 shadow-sm">
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Welcome Section */}
                <div className="flex items-center space-x-4">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                    
                    {/* Welcome Message with Icon */}
                    <div className="flex items-center space-x-3">
                        <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                            <HandRaisedIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">
                                {getGreeting()}, <span className="text-blue-600">Muhammad Zain</span>
                            </h1>
                            <p className="text-sm text-gray-500 hidden md:block">
                                Welcome back to your dashboard
                            </p>
                            <p className="text-sm text-gray-500 md:hidden">
                                Welcome back!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-1 max-w-2xl mx-4 hidden lg:block">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            id="search"
                            name="search"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
                            placeholder="Search anything..."
                            type="search"
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center space-x-2">
                    {/* Mobile Search */}
                    <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </button>
                    
                    {/* Help */}
                    <button
                        className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors hidden md:inline-flex"
                        title="Help"
                    >
                        <QuestionMarkCircleIcon className="h-5 w-5" />
                    </button>
                    
                    {/* Notifications */}
                    <div className="relative">
                        <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                            <BellIcon className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                    
                    {/* Profile */}
                    <div className="relative group pl-2 border-l border-gray-300">
                        <button className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-white">MZ</span>
                            </div>
                            <ChevronDownIcon className="h-4 w-4 text-gray-500 hidden md:block" />
                        </button>
                        
                        {/* Dropdown */}
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                            <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                            <div className="border-t my-2"></div>
                            <a href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;