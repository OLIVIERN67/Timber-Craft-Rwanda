import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import usePageMeta from '../hooks/usePageMeta';

const ProductsPage = () => {
  const { t } = useTranslation();
  usePageMeta('meta.products.title', 'meta.products.description');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-16 pb-4 container-custom text-center">
          <h1 className="section-title mb-0">{t('productsPage.title')}</h1>
          <p className="section-subtitle mb-0">{t('productsPage.subtitle')}</p>
        </div>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
