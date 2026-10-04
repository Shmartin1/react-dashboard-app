import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SmoothAnchor, { scrollToTop } from './SmoothAnchor';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const handleCurrentPage = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      window.history.replaceState(window.history.state, '', path);
      scrollToTop();
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Joshua Martin home" onClick={event => handleCurrentPage(event, '/')}>&lt;<span>jm</span>/&gt;</Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          {[['/', 'Home'], ['/projects', 'Projects'], ['/resume', 'Resume'], ['/research', 'Research'], ['/music', 'Music']].map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={event => handleCurrentPage(event, path)}>{label}</NavLink>
          ))}
        </nav>
        <SmoothAnchor className="header-contact" href="#contact">Let’s connect <ArrowUpRight size={16} aria-hidden="true" /></SmoothAnchor>
      </div>
    </header>
  );
};

export default Header;
