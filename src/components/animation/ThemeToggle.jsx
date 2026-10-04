import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';


export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className={`theme-toggle-wrapper ${className}`}>
      <button
        className="theme-switch-pill"
        onClick={toggleTheme}
        aria-label={`Toggle Theme. Currently on ${isDark ? 'Dark' : 'Light'} Mode. Click to switch.`}
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        type="button"
      >

        <motion.div
          className="theme-switch-thumb"
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          style={{
            left: isDark ? '3px' : 'calc(100% - 31px)',
          }}
        />


        <span className={`theme-switch-icon-wrap ${isDark ? 'active' : ''}`}>
          <Moon size={15} className="theme-switch-icon moon-icon" />
        </span>


        <span className={`theme-switch-icon-wrap ${!isDark ? 'active' : ''}`}>
          <Sun size={15} className="theme-switch-icon sun-icon" />
        </span>
      </button>

      {showLabel && (
        <span className="theme-toggle-label">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </div>
  );
}
