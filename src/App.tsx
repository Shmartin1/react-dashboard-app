import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import TaskManager from './components/TaskManager';
import LineChart from './components/LineChart';
import ActivityFeed from './components/ActivityFeed';
import Settings from './components/Settings'
import { UserProvider } from './context/UserContext';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <Header />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/tasks" element={<TaskManager />} />
                  {/* <Route path="/charts" element={<LineChart data={data} />} /> */}
                  <Route path="/activities" element={<ActivityFeed />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;