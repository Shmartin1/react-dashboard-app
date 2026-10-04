// Adapted from React Bits by David Haz. See THIRD_PARTY_NOTICES.md.
import React, { useState, useEffect, useRef } from 'react';
import { useMotionPreferences } from '../MotionPreferences';

interface MagnetProps extends React.PropsWithChildren {
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({ children, padding = 16, disabled = false, magnetStrength = 12, className = '' }) => {
  const { motionEnabled } = useMotionPreferences();
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reset = () => { setIsActive(false); setPosition(current => current.x === 0 && current.y === 0 ? current : { x: 0, y: 0 }); };

    const handleMouseMove = (e: MouseEvent) => {
      if (disabled || !motionEnabled || !finePointer.matches || !magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      if (Math.abs(centerX - e.clientX) < width / 2 + padding && Math.abs(centerY - e.clientY) < height / 2 + padding) {
        setIsActive(true);
        setPosition({ x: (e.clientX - centerX) / magnetStrength, y: (e.clientY - centerY) / magnetStrength });
      } else reset();
    };

    reset();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('blur', reset);
    document.addEventListener('mouseleave', reset);
    finePointer.addEventListener('change', reset);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('blur', reset);
      document.removeEventListener('mouseleave', reset);
      finePointer.removeEventListener('change', reset);
    };
  }, [padding, disabled, magnetStrength, motionEnabled]);

  return <div ref={magnetRef} className={`magnet ${className}`}><div className="magnet-inner" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, transition: isActive ? 'transform 0.3s ease-out' : 'transform 0.5s ease-in-out' }}>{children}</div></div>;
};

export default Magnet;
