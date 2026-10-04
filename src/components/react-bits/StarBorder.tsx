// Adapted from React Bits by David Haz. See THIRD_PARTY_NOTICES.md.
import React from 'react';
import './effects.css';

const StarBorder: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <span className={`star-border-container ${className}`}>
    <span className="border-gradient-bottom" aria-hidden="true" />
    <span className="border-gradient-top" aria-hidden="true" />
    <span className="star-border-content">{children}</span>
  </span>
);

export default StarBorder;
