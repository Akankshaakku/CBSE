import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
    >
      <div className="toggle-slider">
        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <span className="toggle-label">
        {isDarkMode ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default DarkModeToggle;

