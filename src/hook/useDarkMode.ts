import { useState, useEffect } from 'react';

type UseDarkModeReturn = [boolean, () => void];

export const useDarkMode = (): UseDarkModeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.theme = newMode ? 'dark' : 'light';
      return newMode;
    });
  };

  return [isDarkMode, toggleDarkMode];
};