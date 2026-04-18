'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
type Theme = 'light' | 'dark';
type ThemeContextType = { theme: Theme; toggleTheme: () => void; };
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as Theme | null;
    const initial = stored ?? 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);
  const toggleTheme = () => setTheme(current => {
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    window.localStorage.setItem('portfolio-theme', next);
    return next;
  });
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
