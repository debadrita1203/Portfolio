import React from 'react';
import '../styles/Layout.css';

function RightSidebar({ onNavigate, currentPath }) {
  const navItems = [
    { label: 'Contact', path: '/contact' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
  ];
 
  return (
    <div className="right-sidebar">
      {navItems.map((item) => (
        <div
          key={item.path}
          className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
          onClick={() => onNavigate(item.path)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default RightSidebar;
