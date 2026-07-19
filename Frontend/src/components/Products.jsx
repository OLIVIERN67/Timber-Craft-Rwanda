import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-timbercraft-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center">{t('productsSection.eyebrow')}</p>
          <h2 className="section-title mb-0">{t('productsSection.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <figure className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(`products.items.${product.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-xl text-timbercraft-dark">
                  {t(`products.items.${product.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {t(`products.items.${product.id}.description`)}
                </p>
                <div className="card-actions">
                  <Link to={`/products/${product.id}`} className="text-timbercraft-green font-semibold hover:underline inline-flex items-center gap-1 group/link">
                    {t('common.viewMore')} <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
