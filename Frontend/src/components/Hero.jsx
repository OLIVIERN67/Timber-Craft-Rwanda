import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Award } from 'lucide-react';
import { hero } from '../data';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="hero min-h-[620px] relative overflow-hidden"
      style={{
        backgroundImage: `url('${hero.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-black/75 via-black/55 to-black/25"></div>

      <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-start text-left">
        <div className="max-w-2xl animate-slide-up">
          <div className="badge badge-outline border-white/40 text-white gap-2 py-3 mb-6 backdrop-blur-sm bg-white/5">
            <Award size={14} className="text-timbercraft-light-green" />
            <span className="text-xs tracking-wide">{t('hero.badge')}</span>
          </div>

          <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08] tracking-tight">
            {t('hero.titleLine1')}
            <br />
            <span className="text-timbercraft-light-green">{t('hero.titleLine2')}</span>
          </h1>

          <p className="text-base md:text-lg mb-9 text-gray-200 max-w-lg leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn btn-lg border-none bg-timbercraft-green hover:bg-timbercraft-dark-green text-white shadow-lg hover:shadow-xl transition-all gap-2">
              {t('hero.ctaPrimary')} <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-lg btn-outline text-white border-white/70 hover:bg-white hover:text-timbercraft-dark hover:border-white">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
