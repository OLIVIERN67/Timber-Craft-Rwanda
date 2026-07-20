import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Expand, RotateCcw } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../data';
import { usePageMetaLiteral } from '../hooks/usePageMeta';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const service = services.find((s) => String(s.id) === id);

  const title = service ? t(`services.items.${service.id}.title`) : '';
  const description = service ? t(`services.items.${service.id}.description`) : '';
  usePageMetaLiteral(
    service ? `${title} | TimberCraft Rwanda` : 'TimberCraft Rwanda',
    description
  );

  const [activeImage, setActiveImage] = useState(service?.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImage(service?.image);
    window.scrollTo(0, 0);
  }, [id, service]);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="section-padding">
          <div className="container-custom text-center">
            <div role="alert" className="alert alert-error max-w-md mx-auto mb-4">
              <span>{t('serviceDetail.notFound')}</span>
            </div>
            <Link to="/services" className="btn-primary inline-flex gap-2">
              <RotateCcw size={16} /> {t('serviceDetail.backToServices')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <div className="text-sm breadcrumbs mb-6 text-theme-text-secondary">
            <ul>
              <li><Link to="/" className="hover:text-theme-primary-text">{t('common.home')}</Link></li>
              <li><Link to="/services" className="hover:text-theme-primary-text">{t('nav.services')}</Link></li>
              <li className="text-theme-text font-medium">{title}</li>
            </ul>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-semibold text-theme-text mb-2 tracking-tight">{title}</h1>
          <p className="text-theme-text-secondary mb-8 max-w-2xl">{description}</p>

          <button
            onClick={() => setLightboxOpen(true)}
            className="group relative w-full rounded-2xl overflow-hidden shadow-xl mb-4 bg-theme-surface block"
          >
            <img
              src={activeImage}
              alt={title}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand size={14} /> {t('common.viewFullSize')}
            </span>
          </button>

          {service.gallery && service.gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {service.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-theme-primary' : 'border-transparent opacity-80 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${title} ${idx + 1}`} className="w-full h-24 md:h-28 object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary btn-lg inline-flex">{t('common.getInTouch')} →</Link>
          </div>
        </div>
      </main>
      <Footer />

      {lightboxOpen && (
        <div className="modal modal-open" onClick={() => setLightboxOpen(false)}>
          <div className="modal-box max-w-5xl p-2 bg-transparent shadow-none">
            <img src={activeImage} alt={title} className="w-full h-auto rounded-lg" />
          </div>
          <div className="modal-backdrop bg-black/85"></div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
