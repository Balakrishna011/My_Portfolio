'use client';
import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from './theme-provider';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" onClick={toggleTheme} className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105" aria-label="Toggle theme">{theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}</button>;
}
