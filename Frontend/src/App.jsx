import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ContactPage from './pages/ContactPage';

function App() {
  const { i18n } = useTranslation();

  // Keep <html lang="..."> in sync with the active language for screen
  // readers, browser translation prompts, and general accessibility.
  // `resolvedLanguage` is always one of our supported codes (en/rw/fr);
  // `language` can briefly hold a raw, unnormalized navigator locale string
  // (e.g. "en-US@posix" on some systems) before i18next settles.
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
  }, [i18n.language, i18n.resolvedLanguage]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* 404 Not Found Route - Optional */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;