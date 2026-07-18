import React from 'react';
import { Hammer, Leaf, Palette, ShieldCheck, Truck, Headset } from 'lucide-react';
import { features } from '../data';

const iconMap = {
  'Quality Craftsmanship': Hammer,
  'Sustainable Wood': Leaf,
  'Custom Designs': Palette,
  'Durable & Reliable': ShieldCheck,
  'Timely Delivery': Truck,
  'Customer Support': Headset,
};

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.title];
            return (
              <div
                key={feature.id}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-timbercraft-green/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5 w-16 h-16 rounded-full bg-timbercraft-cream flex items-center justify-center text-timbercraft-wood group-hover:bg-timbercraft-wood group-hover:text-white transition-colors duration-300">
                  {Icon && <Icon size={30} strokeWidth={1.5} />}
                </div>
                <h3 className="text-lg font-display font-semibold text-timbercraft-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
