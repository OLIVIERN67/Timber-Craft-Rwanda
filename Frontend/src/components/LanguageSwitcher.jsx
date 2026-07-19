import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../i18n/i18n';

const LANGUAGE_META = {
  en: { flag: '🇬🇧', code: 'EN' },
  rw: { flag: '🇷🇼', code: 'RW' },
  fr: { flag: '🇫🇷', code: 'FR' },
};

const LanguageSwitcher = ({ variant = 'light' }) => {
  const { t, i18n } = useTranslation();
  const current = SUPPORTED_LANGUAGES.includes(i18n.language) ? i18n.language : 'en';

  const handleSelect = (lng) => {
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
    // Close the dropdown after selection (daisyUI dropdown pattern)
    document.activeElement?.blur();
  };

  const textClass = variant === 'dark' ? 'text-white' : 'text-timbercraft-dark';

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        aria-label={t('language.switchLabel')}
        className={`flex items-center gap-1.5 text-sm font-medium ${textClass} hover:opacity-70 transition-opacity px-2 py-1 rounded-md`}
      >
        <Globe size={16} strokeWidth={1.75} />
        <span>{LANGUAGE_META[current].flag} {LANGUAGE_META[current].code}</span>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[60] menu mt-2 p-2 shadow-lg bg-white rounded-lg w-40 border border-gray-100"
      >
        {SUPPORTED_LANGUAGES.map((lng) => (
          <li key={lng}>
            <button
              type="button"
              onClick={() => handleSelect(lng)}
              className="flex items-center justify-between text-timbercraft-dark hover:bg-timbercraft-cream rounded-md"
            >
              <span className="flex items-center gap-2">
                <span>{LANGUAGE_META[lng].flag}</span>
                <span>{t(`language.${lng}`)}</span>
              </span>
              {current === lng && <Check size={14} className="text-timbercraft-green" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
