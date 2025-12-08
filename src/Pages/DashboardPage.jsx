import { useState } from 'react';
import React from 'react';
import {
    CurrencyDollarIcon,
    UsersIcon,
    ShoppingCartIcon,
    ArrowUpIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';

const DashboardPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to get days in month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Function to get first day of month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    // Navigation functions
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Helper variables
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const today = new Date();
    const isToday = currentYear === today.getFullYear() &&
        currentMonth === today.getMonth() &&
        currentDay === today.getDate();

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    // Generate calendar days
    const calendarDays = [];
    const totalCells = 42; // 6 weeks * 7 days

    for (let i = 0; i < totalCells; i++) {
        const day = i - firstDayOfMonth + 1;
        const isCurrentMonth = day > 0 && day <= daysInMonth;
        const isTodayDate = isCurrentMonth &&
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            day === today.getDate();
        const dayOfWeek = i % 7;
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        calendarDays.push({
            day: isCurrentMonth ? day : '',
            isCurrentMonth,
            isToday: isTodayDate,
            isWeekend,
            date: isCurrentMonth ? new Date(currentYear, currentMonth, day) : null
        });
    }

    // Stats without background colors
    const stats = [
        {
            name: "Total Revenue",
            NameColor: "text-blue-700",
            value: "$45,231.89",
            icon: CurrencyDollarIcon,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-100",
            infoColor: "bg-blue-200",
        },
        {
            name: "New Users",
            NameColor: "text-green-700",
            value: "2,350",
            icon: UsersIcon,
            iconColor: "text-green-600",
            iconBg: "bg-green-100",
            infoColor: "bg-green-200",
        },
        {
            name: "Active Projects",
            NameColor: "text-purple-700",
            value: "12",
            icon: ShoppingCartIcon,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-100",
            infoColor: "bg-purple-200",
        },
        {
            name: "Conversion Rate",
            NameColor: "text-amber-700",
            value: "4.75%",
            icon: ArrowUpIcon,
            iconColor: "text-amber-600",
            iconBg: "bg-amber-100",
            infoColor: "bg-amber-200",
        },
    ];

    // Manually assigned backgrounds inside JSX
    const cardBackgrounds = [
        "#EBF5FF",  // light blue
        "#ECFDF5",  // light green
        "#F5F3FF",  // light purple
        "#FFFBEB"   // light amber
    ];

    const recentActivity = [
        { id: 1, user: 'Alex Johnson', action: 'created new project', time: '2 hours ago' },
        { id: 2, user: 'Sam Wilson', action: 'updated profile', time: '4 hours ago' },
        { id: 3, user: 'Taylor Swift', action: 'completed task', time: '6 hours ago' },
        { id: 4, user: 'Chris Evans', action: 'uploaded document', time: '1 day ago' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome back! Here's what's happening today.</p>

            {/* Stats Grid */}
            <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={stat.name}
                        className="rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-40"
                        style={{ backgroundColor: cardBackgrounds[index] }}
                    >
                        {/* Content */}
                        <div className="flex items-start justify-between h-full p-6">

                            {/* Left */}
                            <div className="flex-1">
                                <div className={`text-3xl font-bold ${stat.NameColor}`}>{stat.value}</div>
                                <h3 className={`text-lg font-semibold mt-2 ${stat.NameColor}`}>
                                    {stat.name}
                                </h3>
                            </div>

                            {/* Icon */}
                            <div className="ml-4">
                                <div className={`p-3 ${stat.iconBg} rounded-lg`}>
                                    <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                                </div>
                            </div>

                        </div>

                        {/* More Info */}
                        <div
                            className={`p-2 w-full border-t border-gray-200/70 rounded-b-xl ${stat.infoColor}`}
                        >

                            <button
                                className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:text-gray-900 group"
                                onClick={() => console.log(`More info clicked for ${stat.name}`)}
                            >
                                <span>More info</span>
                                <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            {/* Charts and Tables Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 1. Sales Chart (8 Months View) */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
                            <p className="text-sm text-gray-500">February to August 2024</p>
                        </div>
                        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
                            <option>Last 7 months</option>
                            <option>Last 8 months</option>
                            <option>This year</option>
                        </select>
                    </div>

                    {/* Chart Container with Y-axis */}
                    <div className="h-64">
                        <div className="flex items-start h-48">
                            {/* Y-axis Labels */}
                            <div className="w-8 mr-2 flex flex-col justify-between h-full text-xs text-gray-400">
                                <span>100K</span>
                                <span>75K</span>
                                <span>50K</span>
                                <span>25K</span>
                                <span>0</span>
                            </div>

                            {/* Chart Area */}
                            <div className="flex-1 flex items-end justify-between h-full">
                                {[
                                    { month: 'Feb', value: 65, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'Mar', value: 80, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'Apr', value: 75, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'May', value: 55, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'Jun', value: 90, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'Jul', value: 60, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
                                    { month: 'Aug', value: 85, color: 'bg-gradient-to-t from-blue-600 to-blue-500' }
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center flex-1 h-full">
                                        {/* Bar Container */}
                                        <div className="h-full flex flex-col justify-end items-center relative group">
                                            {/* Bar Value Label (shown on hover) */}
                                            <div className="mb-1 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${item.value}K
                                            </div>

                                            {/* Bar */}
                                            <div
                                                className={`${item.color} lg:w-9 rounded-t-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer`}
                                                style={{ height: `${item.value}%` }}
                                            ></div>
                                        </div>

                                        {/* Month Label */}
                                        <span className="text-xs font-medium text-gray-600 mt-2">{item.month}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chart Stats */}
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                            <div>
                                <p className="text-sm text-gray-600">Total Sales</p>
                                <p className="text-xl font-bold text-gray-900">$510K</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Average Monthly</p>
                                <p className="text-lg font-bold text-gray-900">$72.9K</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Growth</p>
                                <p className="text-lg font-semibold text-green-600">+12.8%</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 2. Summary with Circle Progress */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-blue-100 items-center justify-center">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b border-blue-200/50 pb-3">Project Summary</h2>

                    <div className="flex items-center justify-center mt-10">
                        {/* Left: Circular Progress with Gradient */}
                        <div className="relative w-50 h-50">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                {/* Background Circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#e0e7ff"
                                    strokeWidth="10"
                                />
                                {/* Progress Circle with Gradient */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeDasharray="251.2"
                                    strokeDashoffset="75.36"
                                    transform="rotate(-90 50 50)"
                                />
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-gray-900">70%</span>
                                <span className="text-sm text-gray-600">Completed</span>
                            </div>
                        </div>

                        {/* Right: Status List */}
                        <div className="ml-6 flex-1">
                            {[
                                { label: 'In Progress', value: 12, color: 'bg-gradient-to-r from-blue-500 to-blue-600', textColor: 'text-blue-700' },
                                { label: 'Completed', value: 28, color: 'bg-gradient-to-r from-green-500 to-emerald-600', textColor: 'text-green-700' },
                                { label: 'Pending', value: 8, color: 'bg-gradient-to-r from-yellow-500 to-amber-600', textColor: 'text-amber-700' },
                                { label: 'On Hold', value: 4, color: 'bg-gradient-to-r from-red-500 to-rose-600', textColor: 'text-rose-700' },
                                { label: 'Not Started', value: 6, color: 'bg-gradient-to-r from-gray-400 to-gray-500', textColor: 'text-gray-700' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between hover:bg-white/50 rounded-lg transition-colors">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 ${item.color} rounded-full mr-3 shadow-sm`}></div>
                                        <span className={`text-sm font-medium ${item.textColor}`}>{item.label}</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 px-2 py-1 rounded">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-6 pt-4 border-t border-blue-200/50">
                        <p className="text-sm text-gray-700">
                            <span className="font-bold text-gray-900 text-lg">58</span> total projects
                        </p>
                    </div>
                </div>

                {/* 3. Customer Progress */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex justify-start items-center mb-6 border-b border-blue-200/50 pb-3">
                        <h2 className="text-lg font-semibold text-gray-900">Customer Progress</h2>
                    </div>

                    <div className="space-y-5">
                        {[
                            {
                                name: 'Nestle Pakistan',
                                progress: 85,
                                status: 'Order fulfillment in progress',
                                color: 'bg-blue-500'
                            },
                            {
                                name: 'Unilever Ltd',
                                progress: 65,
                                status: 'Product delivery scheduled',
                                color: 'bg-green-500'
                            },
                            {
                                name: 'PepsiCo Inc',
                                progress: 45,
                                status: 'Contract negotiation phase',
                                color: 'bg-yellow-500'
                            },
                            {
                                name: 'Engro Foods',
                                progress: 92,
                                status: 'Project nearing completion',
                                color: 'bg-purple-500'
                            }
                        ].map((customer, index) => (
                            <div key={index} className=" border-gray-100 last:border-0 last:pb-0">
                                {/* Customer Name */}
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-medium text-gray-900">{customer.name}</h3>
                                    <span className="text-sm font-semibold text-gray-700">{customer.progress}%</span>
                                </div>

                                {/* Progress Line */}
                                <div className="w-full bg-white rounded-full h-2.5 mb-2 shadow-inner">
                                    <div
                                        className={`${customer.color} h-2.5 rounded-full shadow-md`}
                                        style={{ width: `${customer.progress}%` }}
                                    ></div>
                                </div>


                            </div>
                        ))}
                    </div>

                    {/* Customer Stats */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-sm">
                            <div>
                                <p className="text-gray-600">Active Customers</p>
                                <p className="font-semibold text-gray-900">24</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-600">Satisfaction</p>
                                <p className="font-semibold text-green-600">94%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Bottom Section - Working Log & Calendar */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Working Log Table - 1 parts */}
                <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-3 border border-gray-200">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="w-2 h-5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></div>
                                <h2 className="text-lg font-semibold text-gray-900">Working Log</h2>
                            </div>
                            <p className="text-sm text-gray-500 ml-5">Recent activities and audit trails</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all shadow-sm hover:shadow flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Export
                            </button>
                            <button className="px-4 py-2 text-sm bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all shadow-sm hover:shadow flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Filter
                            </button>
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                <tr>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                        <div className="flex items-center">
                                            <span>Date</span>
                                            <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                        <div className="flex items-center">
                                            <span>Time</span>
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                        <div className="flex items-center">
                                            <span>Customer/Auditor</span>
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                        <div className="flex items-center">
                                            <span>Status</span>
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                        <div className="flex items-center">
                                            <span>Description</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    {
                                        date: '2024-03-15',
                                        time: '09:30 AM',
                                        customer: 'Nestle Pakistan',
                                        status: 'Completed',
                                        description: 'Order fulfillment processed successfully',
                                        statusColor: 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200'
                                    },
                                    {
                                        date: '2024-03-15',
                                        time: '11:45 AM',
                                        customer: 'Alex Johnson',
                                        status: 'In Progress',
                                        description: 'System audit in progress',
                                        statusColor: 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 border border-blue-200'
                                    },
                                    {
                                        date: '2024-03-14',
                                        time: '02:15 PM',
                                        customer: 'Unilever Ltd',
                                        status: 'Pending',
                                        description: 'Waiting for client approval',
                                        statusColor: 'bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 border border-yellow-200'
                                    },
                                    {
                                        date: '2024-03-14',
                                        time: '04:30 PM',
                                        customer: 'Sarah Wilson',
                                        status: 'Completed',
                                        description: 'Monthly report generated and sent',
                                        statusColor: 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 border border-green-200'
                                    },
                                    {
                                        date: '2024-03-13',
                                        time: '10:00 AM',
                                        customer: 'PepsiCo Inc',
                                        status: 'On Hold',
                                        description: 'Contract negotiation paused',
                                        statusColor: 'bg-gradient-to-r from-red-100 to-red-50 text-red-800 border border-red-200'
                                    },
                                    {
                                        date: '2024-03-14',
                                        time: '10:40 PM',
                                        customer: 'PepsiCo Inc',
                                        status: 'On Hold',
                                        description: 'Contract negotiation paused',
                                        statusColor: 'bg-gradient-to-r from-red-100 to-red-50 text-red-800 border border-red-200'
                                    },
                                ].map((log, index) => (
                                    <tr key={index} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mr-3 border border-blue-100">
                                                    <div className="text-center">
                                                        <div className="text-sm font-bold text-blue-700">{new Date(log.date).getDate()}</div>
                                                        <div className="text-xs text-blue-500">{new Date(log.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{new Date(log.date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                                    <div className="text-xs text-gray-500">{new Date(log.date).getFullYear()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
                                                <span className="text-sm font-medium text-gray-700">{log.time}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-xs font-bold text-gray-700">{log.customer.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900">{log.customer}</div>
                                                    <div className="text-xs text-gray-500 flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></span>
                                                        Customer
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold ${log.statusColor}`}>
                                                {log.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-sm text-gray-700 max-w-xs">{log.description}</div>
                                            <div className="text-xs text-gray-400 mt-1 flex items-center">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Updated just now
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer - Enhanced */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                            Showing 1 to 6 of 12 entries
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>
                            <button className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                Next
                                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Calendar - 2 part */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 lg:col-span-1 border border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
                            <p className="text-xs text-gray-500 mt-1">
                                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <button
                                onClick={goToPreviousMonth}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors group"
                                title="Previous month"
                            >
                                <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goToToday}
                                className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                                Today
                            </button>
                            <button
                                onClick={goToNextMonth}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors group"
                                title="Next month"
                            >
                                <svg className="h-4 w-4 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Current Date Highlight - Enhanced */}
                    <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold text-lg">{today.getDate()}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Today</p>
                                        <p className="text-md font-bold text-gray-900">
                                            {today.toLocaleDateString('en-US', { weekday: 'short' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-500">Week {Math.ceil(today.getDate() / 7)}</p>
                                <p className="text-sm font-bold text-blue-600">
                                    {today.toLocaleDateString('en-US', { month: 'short' })} {today.getFullYear()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Week Days - Enhanced */}
                    <div className="grid grid-cols-7 gap-1 mb-3">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
                            const isWeekend = index === 0 || index === 6;
                            return (
                                <div key={index} className="text-center">
                                    <span className={`text-xs font-medium ${isWeekend ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {day}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Calendar Days - Enhanced */}
                    <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((dayData, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    if (dayData.date) {
                                        setCurrentDate(dayData.date);
                                    }
                                }}
                                className={`h-7 flex items-center justify-center rounded-lg text-sm transition-all relative ${dayData.isCurrentMonth
                                    ? dayData.isToday
                                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold shadow-sm transform scale-105'
                                        : `${dayData.isWeekend ? 'text-gray-400' : 'text-gray-700'} hover:bg-blue-50 hover:scale-105`
                                    : 'text-gray-300'
                                    } ${dayData.isCurrentMonth && !dayData.isToday ? 'cursor-pointer' : ''}`}
                            >
                                {dayData.day}
                                {dayData.isToday && (
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="mt-4 flex items-center justify-center space-x-4 text-xs">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                            <span className="text-gray-500">Today</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-1"></div>
                            <span className="text-gray-500">Weekend</span>
                        </div>
                    </div>

                    {/* Upcoming Events - Enhanced */}
                    <div className="mt-6 pt-5 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-semibold text-gray-900">Upcoming Events</h3>
                            <span className="text-xs text-blue-600 font-medium">View all</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center p-3 bg-gradient-to-r from-green-50/80 to-green-100/30 rounded-lg border border-green-200/50 group hover:shadow-sm transition-shadow">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Team Meeting</p>
                                    <p className="text-xs text-gray-500">Daily standup</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-gray-700">2:00 PM</p>
                                    <p className="text-xs text-gray-400">Conference Rm</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 bg-gradient-to-r from-blue-50/80 to-blue-100/30 rounded-lg border border-blue-200/50 group hover:shadow-sm transition-shadow">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Client Review</p>
                                    <p className="text-xs text-gray-500">Quarterly presentation</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-medium text-gray-700">4:30 PM</p>
                                    <p className="text-xs text-gray-400">Zoom Call</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default DashboardPage;
