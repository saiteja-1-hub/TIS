import { useState, useEffect } from 'react';

/**
 * Custom hook to manage Dark / Light theme toggle with localStorage persistence
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('tis-theme');
    if (savedTheme) return savedTheme;
    return 'dark'; // Default to TIS Dark Navy theme
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tis-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
