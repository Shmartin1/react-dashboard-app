// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import TaskManager from './components/TaskManager';
import ChartWidget from './components/ChartWidget';
import ActivityFeed from './components/ActivityFeed';
import { UserProvider } from './context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
      <Router>
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1 }}>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/tasks" element={<TaskManager />} />
                    <Route path="/charts" element={<ChartWidget />} />
                    <Route path="/activities" element={<ActivityFeed />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
    </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
