import React, { useState } from 'react';
import { Github, Linkedin, Mail, Instagram, ArrowUpRight, Copy, Check, Pause, Play } from 'lucide-react';
import { useMotionPreferences } from './MotionPreferences';
import ShinyText from './react-bits/ShinyText';

const email = 'joshmartin0212@gmail.com';
const socialLinks = [
  { Icon: Github, href: 'https://github.com/Shmartin1', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/josh-martin-9a861617a/', label: 'LinkedIn' },
  { Icon: Mail, href: `mailto:${email}`, label: 'Email' },
  { Icon: Instagram, href: 'https://www.instagram.com/joshmartin0212/', label: 'Instagram' },
];

const Footer: React.FC = () => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const { paused, toggleMotion } = useMotionPreferences();
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopyState('copied'); }
    catch { setCopyState('failed'); }
  };

  return (
    <footer className="site-footer" id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="footer-connect">
        <div><p className="eyebrow">Get in touch</p><h2 id="contact-title"><ShinyText text="Let’s connect." /></h2></div>
        <div className="contact-options">
          <a href={`mailto:${email}`} className="contact-link">{email} <ArrowUpRight size={22} aria-hidden="true" /></a>
          <div className="contact-actions">
            <button type="button" onClick={copyEmail} className="contact-copy">{copyState === 'copied' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{copyState === 'copied' ? 'Email copied' : 'Copy email'}</button>
            <a href={socialLinks[1].href} target="_blank" rel="noopener noreferrer" className="text-link">Connect on LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <p role="status" className="contact-status">{copyState === 'copied' ? 'Email address copied to your clipboard.' : copyState === 'failed' ? 'Copy is unavailable in this browser. Select the email address above to copy it.' : ''}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Joshua Martin</p>
        <button type="button" className="motion-toggle" onClick={toggleMotion} aria-pressed={paused}>{paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}{paused ? 'Resume animations' : 'Pause animations'}</button>
        <nav className="social-links" aria-label="Social links">
          {socialLinks.map(({ Icon, href, label }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'} aria-label={label}><Icon size={17} aria-hidden="true" /><span>{label}</span></a>)}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
