import React, { useEffect, useRef } from 'react';
import { useMotionPreferences } from './MotionPreferences';

/** Progressive enhancement: content stays visible without animation support. */
const Reveal: React.FC<React.PropsWithChildren<{ className?: string; delay?: number }>> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { motionEnabled } = useMotionPreferences();

  useEffect(() => {
    const element = ref.current;
    if (!element || !motionEnabled || !('IntersectionObserver' in window)) return;

    const reveal = () => {
      element.classList.remove('reveal-pending');
      observer.disconnect();
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal();
    }, { threshold: 0.08 });

    element.classList.add('reveal-pending');
    observer.observe(element);
    // Keyboard users should never focus an invisible link.
    element.addEventListener('focusin', reveal);
    return () => {
      observer.disconnect();
      element.classList.remove('reveal-pending');
      element.removeEventListener('focusin', reveal);
    };
  }, [motionEnabled]);

  return <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}>{children}</div>;
};

export default Reveal;
