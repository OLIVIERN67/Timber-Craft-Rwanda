import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Recycle, TreePine, HeartHandshake } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const pillars = [
  { key: 'sourcing', Icon: Leaf },
  { key: 'production', Icon: Recycle },
  { key: 'reforestation', Icon: TreePine },
  { key: 'community', Icon: HeartHandshake },
];

const SustainabilityPage = () => {
  const { t } = useTranslation();
  usePageMeta('meta.sustainability.title', 'meta.sustainability.description');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">{t('sustainabilityPage.title')}</h1>
          <p className="section-subtitle">{t('sustainabilityPage.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map(({ key, Icon }) => (
              <div
                key={key}
                className="bg-theme-surface rounded-xl p-8 shadow-md border border-theme-border hover:border-theme-primary/40 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-theme-surface-alt flex items-center justify-center text-theme-primary-text mb-5">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-theme-text mb-4">
                  {t(`sustainabilityPage.pillars.${key}.title`)}
                </h3>
                <p className="text-theme-text-secondary leading-relaxed">
                  {t(`sustainabilityPage.pillars.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
