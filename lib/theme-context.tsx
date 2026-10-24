'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type Theme = 'blue' | 'purple';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'blue',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('blue');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    if (stored === 'blue' || stored === 'purple') {
      setThemeState(stored);
    } else if (stored === 'green') {
      setThemeState('blue');
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.dataset.theme = 'blue';
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('portfolio-theme', next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'blue' ? 'purple' : 'blue';
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem('portfolio-theme', next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
