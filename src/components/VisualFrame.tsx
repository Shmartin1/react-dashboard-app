import React, { useRef } from 'react';
import { useInView } from 'motion/react';
import { useMotionPreferences } from './MotionPreferences';

const VisualFrame: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const { motionEnabled } = useMotionPreferences();
  return <div ref={ref} className={`animated-visual ${className}`} data-animate={visible && motionEnabled}>{children}</div>;
};

export default VisualFrame;
