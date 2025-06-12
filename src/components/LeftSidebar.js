import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Layout.css';

function LeftSidebar() {
  const links = [
    { icon: <FaEnvelope />, url: 'mailto:debadrita.biswas.1203@gmail.com', label: 'Email' },
    { icon: <FaGithub />, url: 'https://github.com/debadrita1203', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/debadrita-biswas-26a8b6207/', label: 'LinkedIn' },
  ];
 
  return (
    <div className="left-sidebar">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default LeftSidebar;
