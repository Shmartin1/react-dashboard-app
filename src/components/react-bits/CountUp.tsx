// Adapted from React Bits by David Haz. See THIRD_PARTY_NOTICES.md.
import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useMotionPreferences } from '../MotionPreferences';

export default function CountUp({ to, duration = 1.6, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 20 + 40 / duration, stiffness: 100 / duration });
  const inView = useInView(ref, { once: true });
  const { motionEnabled } = useMotionPreferences();

  useEffect(() => {
    if (!motionEnabled) {
      spring.jump(to);
      if (ref.current) ref.current.textContent = String(to);
      return;
    }
    const unsubscribe = spring.on('change', value => {
      if (ref.current) ref.current.textContent = String(Math.min(to, Math.round(value)));
    });
    if (!inView) {
      if (ref.current) ref.current.textContent = '0';
      return unsubscribe;
    }
    const timer = window.setTimeout(() => motionValue.set(to), delay * 1000);
    return () => { unsubscribe(); window.clearTimeout(timer); };
  }, [to, delay, inView, motionValue, spring, motionEnabled]);

  return <span className="count-up" ref={ref}>{to}</span>;
}
