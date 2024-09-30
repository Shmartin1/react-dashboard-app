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
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3 hover:text-gray-300 transition-colors duration-200"
            aria-label={label}
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;