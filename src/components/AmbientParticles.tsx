import React, { CSSProperties } from 'react';
import { useMotionPreferences } from './MotionPreferences';
import '../styles/components/ambient-particles.css';

// Stable positions keep the background continuous across rerenders and routes.
const fraction = (index: number, salt: number) => {
  const value = Math.sin((index + 1) * salt) * 43758.5453;
  return value - Math.floor(value);
};

const particles = Array.from({ length: 78 }, (_, index) => {
  const duration = 14 + fraction(index, 8.37) * 12;
  return {
    left: `${2 + fraction(index, 12.99) * 96}%`,
    top: `${fraction(index, 78.23) * 100}%`,
    '--particle-size': `${1.8 + fraction(index, 24.17) * 2}px`,
    '--particle-alpha': 0.3 + fraction(index, 53.41) * 0.35,
    '--drift-x': `${(fraction(index, 41.83) - 0.5) * 150}px`,
    '--drift-y': `${120 + fraction(index, 19.31) * 130}px`,
    '--particle-duration': `${duration}s`,
    '--particle-delay': `${-fraction(index, 67.73) * duration}s`
  } as CSSProperties;
});

const AmbientParticles: React.FC = () => {
  const { motionEnabled } = useMotionPreferences();

  return <div className="ambient-particles" data-animate={motionEnabled} aria-hidden="true">
    {particles.map((style, index) => <span className="ambient-particle" key={index} style={style} />)}
  </div>;
};

export default AmbientParticles;
