import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function setMetaTags(title, description) {
  document.title = title;

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', description);
}

/**
 * Sets document.title and the <meta name="description"> tag from i18n keys,
 * re-running whenever the active language changes so metadata stays in sync
 * with the rest of the translated page. Use this for static pages.
 */
export function usePageMeta(titleKey, descriptionKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMetaTags(t(titleKey), t(descriptionKey));
  }, [t, i18n.language, titleKey, descriptionKey]);
}

/**
 * Same as usePageMeta, but takes already-resolved literal strings instead of
 * i18n keys. Use this for detail pages (product/service/project) whose title
 * is built from a specific item's translated name rather than a static key,
 * e.g. `${t('products.items.2.title')} | TimberCraft Rwanda`.
 */
export function usePageMetaLiteral(title, description) {
  const { i18n } = useTranslation();

  useEffect(() => {
    setMetaTags(title, description);
  }, [i18n.language, title, description]);
}

export default usePageMeta;
