import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AmbientParticles from './components/AmbientParticles';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Research from './components/Research';
import Projects from './components/Projects';
import { MotionPreferences } from './components/MotionPreferences';
import SmoothAnchor, { scrollToTop } from './components/SmoothAnchor';

const RouteContent: React.FC = () => {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const titles: Record<string, string> = { '/': 'Software Engineer', '/projects': 'Projects', '/research': 'Research', '/resume': 'Resume' };
    document.title = `Joshua Martin — ${titles[pathname] || 'Software Engineer'}`;
    if (previousPath.current !== pathname) {
      scrollToTop();
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return <main id="main-content" ref={mainRef} tabIndex={-1}>
    <div key={pathname} className="route-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  </main>;
};

const App: React.FC = () => (
  <MotionPreferences><Router><div className="app-shell"><AmbientParticles /><SmoothAnchor className="skip-link" href="#main-content">Skip to content</SmoothAnchor><Header /><RouteContent /><Footer /></div></Router></MotionPreferences>
);

export default App;
