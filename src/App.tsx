import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Research from './components/Research';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <main className="flex-grow overflow-auto" style={{ maxHeight: 'calc(100vh - 64px - 64px)' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/research" element={<Research />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;