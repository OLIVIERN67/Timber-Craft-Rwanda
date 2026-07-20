import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Icon shows the theme you'd switch TO, not the one currently active:
 * - Dark mode active -> shows sun (click to go light)
 * - Light mode active -> shows moon (click to go dark)
 */
const ThemeToggle = ({ variant = 'light', className = '' }) => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  const iconColorClass = variant === 'dark' ? 'text-white' : 'text-theme-text';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
      title={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
      className={`relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-theme-surface-alt transition-colors duration-300 ${iconColorClass} ${className}`}
    >
      <Sun
        size={18}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
      />
      <Moon
        size={18}
        strokeWidth={1.75}
        className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
      />
    </button>
  );
};

export default ThemeToggle;
