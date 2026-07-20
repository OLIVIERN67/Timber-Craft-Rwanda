/* eslint-disable react-refresh/only-export-components -- Provider and its
   companion useTheme() hook are intentionally colocated, matching every
   other context in this codebase (see also react-i18next's own pattern). */
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const THEME_STORAGE_KEY = 'tc_theme';
const LIGHT = 'light';
const DARK = 'dark';

// Maps our simple 'light' | 'dark' theme value to the actual daisyUI
// theme name applied via <html data-theme="...">.
const DAISYUI_THEME = {
  [LIGHT]: 'timbercraft',
  [DARK]: 'timbercraft-dark',
};

function getSystemPreference() {
  if (typeof window === 'undefined' || !window.matchMedia) return LIGHT;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

function getStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === LIGHT || stored === DARK ? stored : null;
  } catch {
    // localStorage can throw in private-browsing/blocked-storage contexts.
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', DAISYUI_THEME[theme]);
  // Also toggle a plain 'dark' class, so any one-off `dark:` Tailwind
  // utility (see darkMode selector config) works without extra wiring.
  document.documentElement.classList.toggle('dark', theme === DARK);
  document.documentElement.style.colorScheme = theme;
}

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Initializer runs once, synchronously, before first paint — this is
  // also mirrored by the inline script in index.html so there is zero
  // flash of the wrong theme even before React hydrates.
  const [theme, setThemeState] = useState(() => getStoredTheme() ?? getSystemPreference());

  // Apply on mount and on every change.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // If the visitor has never explicitly chosen a theme (no localStorage
  // value yet), keep following the OS-level setting live — e.g. if they
  // switch their OS to dark mode at sunset, the site follows automatically.
  // The moment they use the toggle, their explicit choice takes over and
  // this listener stops overriding it.
  useEffect(() => {
    if (getStoredTheme() !== null) return undefined;
    if (!window.matchMedia) return undefined;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (getStoredTheme() !== null) return; // an explicit choice was made since
      setThemeState(e.matches ? DARK : LIGHT);
    };

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const setTheme = useCallback((next) => {
    if (next !== LIGHT && next !== DARK) return;
    setThemeState(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Ignore — theme still applies for this session even if it can't persist.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === DARK ? LIGHT : DARK;
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Ignore.
      }
      return next;
    });
  }, []);

  // Memoized so consumers that only read `theme` don't re-render on every
  // provider re-render unless the theme itself actually changed.
  const value = useMemo(
    () => ({ theme, isDark: theme === DARK, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

export default ThemeContext;
