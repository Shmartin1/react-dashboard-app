import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/Shmartin1', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/josh-martin-9a861617a/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:joshmartin0212@gmail.com', label: 'Email' },
    { Icon: Instagram, href: 'https://www.instagram.com/joshmartin0212/', label: 'Instagram' },
  ];

  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl justify-center">
        <div className="soft-panel flex min-w-[20rem] items-center justify-center gap-6 px-8 py-3 sm:min-w-[26rem] sm:gap-8 sm:px-10">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 text-[color:var(--text-muted)] transition-all duration-200 hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)]"
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
