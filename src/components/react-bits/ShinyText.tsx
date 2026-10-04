// Adapted from the React Bits CSS shine effect by David Haz. See THIRD_PARTY_NOTICES.md.
import React from 'react';
import './effects.css';

const ShinyText: React.FC<{ text: string; className?: string; speed?: number }> = ({ text, className = '', speed = 5 }) => (
  <span className={`shiny-text ${className}`} style={{ animationDuration: `${speed}s` }}>{text}</span>
);

export default ShinyText;
