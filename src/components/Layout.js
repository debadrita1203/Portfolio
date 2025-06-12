import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Avatar from './Avatar';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Layout.css';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [nextRoute, setNextRoute] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [theme, setTheme] = useState('light');

  // Navigation animation
  const handleNavigate = (path) => {
    if (location.pathname !== '/' || animating) {
      navigate(path);
      return;
    }

    setNextRoute(path);
    setAnimating(true);

    setTimeout(() => {
      navigate(path);
      setAnimating(false);
      setNextRoute(null);
    }, 500);
  };

  // Theme initialization from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Apply theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <div className="layout-container">
        <LeftSidebar />
        <RightSidebar onNavigate={handleNavigate} currentPath={location.pathname} />
        <Avatar isHome={isHome} animating={animating} />

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
