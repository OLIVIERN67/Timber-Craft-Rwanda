import React from 'react';
import { Eye, Target } from 'lucide-react';
import { about } from '../data';

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={about.image} 
                alt="TimberCraft Workshop" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-timbercraft-green text-white p-8 rounded-2xl hidden md:block shadow-xl">
              <p className="text-4xl font-display font-bold">{about.yearsBadge}</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-timbercraft-dark mb-6 tracking-tight">{about.title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {about.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-timbercraft-cream p-6 rounded-xl border border-black/5">
                <Eye size={22} strokeWidth={1.75} className="text-timbercraft-green mb-3" />
                <h4 className="font-display font-semibold text-timbercraft-dark mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.vision}</p>
              </div>
              <div className="bg-timbercraft-cream p-6 rounded-xl border border-black/5">
                <Target size={22} strokeWidth={1.75} className="text-timbercraft-green mb-3" />
                <h4 className="font-display font-semibold text-timbercraft-dark mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{about.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
