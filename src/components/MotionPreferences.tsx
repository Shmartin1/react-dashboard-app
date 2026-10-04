import React, { createContext, useContext, useEffect, useState } from 'react';

const MotionContext = createContext({ motionEnabled: true, paused: false, toggleMotion: () => {} });

export const MotionPreferences: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [preference, setPreference] = useState<'on' | 'off' | null>(() => {
    try { const value = localStorage.getItem('portfolio-motion-preference'); return value === 'on' || value === 'off' ? value : null; } catch { return null; }
  });
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const motionEnabled = preference === null ? !reduced : preference === 'on';
  const paused = !motionEnabled;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? 'enabled' : 'paused';
    try { if (preference !== null) localStorage.setItem('portfolio-motion-preference', preference); } catch { /* Storage is optional. */ }
  }, [motionEnabled, preference]);

  return <MotionContext.Provider value={{ motionEnabled, paused, toggleMotion: () => setPreference(motionEnabled ? 'off' : 'on') }}>{children}</MotionContext.Provider>;
};

export const useMotionPreferences = () => useContext(MotionContext);
