import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Wrench, Gem } from 'lucide-react';
import { cta as ctaData } from '../data';

const iconMap = {
  'Free Consultation': ClipboardList,
  'Custom Solutions': Wrench,
  'Best Quality': Gem,
};

const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="bg-timbercraft-dark-green rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>

          {/* Wood log cross-section decorative image */}
          {ctaData.image && (
            <div className="hidden md:block absolute bottom-0 right-0 w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/10 translate-x-6 translate-y-6">
              <img src={ctaData.image} alt="Timber cross-section" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3 tracking-tight">{ctaData.title}</h2>
            <p className="text-lg mb-10 opacity-90">{ctaData.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {ctaData.points?.map((point) => {
                const Icon = iconMap[point.title];
                return (
                  <div key={point.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-timbercraft-green/30 rounded-full flex items-center justify-center border border-white/20">
                      {Icon && <Icon size={20} strokeWidth={1.75} />}
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-semibold mb-1">{point.title}</h4>
                      <p className="text-xs text-gray-300">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="btn btn-lg border-none bg-timbercraft-wood hover:brightness-110 text-white shadow-lg"
            >
              Contact Us Today →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
