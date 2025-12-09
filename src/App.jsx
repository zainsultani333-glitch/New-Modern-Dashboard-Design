import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components_temp/layout_temp.jsx';
import AnalyticsPage from './Pages/AnalyticsPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import UsersPage from './Pages/UsersPage.jsx';
import SettingsPage from './Pages/SettingsPage.jsx';
import CalendarPage from './Pages/CalendarPage.jsx';
import MessagesPage from './Pages/MessagesPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import ReportsPage from './Pages/ReportsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard Layout with Sidebar */}
        <Route path="/" element={<Layout />}>
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