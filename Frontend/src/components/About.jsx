import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Target } from 'lucide-react';
import { about } from '../data';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-theme-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={about.image}
                alt={t('about.title')}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-timbercraft-green text-white p-8 rounded-2xl hidden md:block shadow-xl">
              <p className="text-4xl font-display font-bold">{about.yearsBadge}</p>
              <p className="text-sm">{t('common.yearsOfExcellence')}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t('about.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-theme-text mb-6 tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-theme-text-secondary mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-theme-surface p-6 rounded-xl border border-theme-border">
                <Eye size={22} strokeWidth={1.75} className="text-theme-primary-text mb-3" />
                <h4 className="font-display font-semibold text-theme-text mb-2">{t('about.visionLabel')}</h4>
                <p className="text-sm text-theme-text-secondary leading-relaxed">{t('about.vision')}</p>
              </div>
              <div className="bg-theme-surface p-6 rounded-xl border border-theme-border">
                <Target size={22} strokeWidth={1.75} className="text-theme-primary-text mb-3" />
                <h4 className="font-display font-semibold text-theme-text mb-2">{t('about.missionLabel')}</h4>
                <p className="text-sm text-theme-text-secondary leading-relaxed">{t('about.mission')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
