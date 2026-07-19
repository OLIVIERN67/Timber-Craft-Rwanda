import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import usePageMeta from '../hooks/usePageMeta';

const AboutPage = () => {
  const { t } = useTranslation();
  usePageMeta('meta.about.title', 'meta.about.description');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-16 pb-4 container-custom text-center">
          <h1 className="section-title mb-0">{t('aboutPage.title')}</h1>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
