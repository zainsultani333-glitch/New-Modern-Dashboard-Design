import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LayoutOfDashboard from "./components/LayoutOfDashboard.jsx";
import AnalyticsPage from './pages/AnalyticsPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard Layout with Sidebar */}
        <Route path="/" element={<LayoutOfDashboard />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;