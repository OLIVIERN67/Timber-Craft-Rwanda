import React from 'react';
import { Leaf, Recycle, TreePine, HeartHandshake } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sustainability } from '../data';

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">Sustainability</h1>
          <p className="section-subtitle">Our commitment to sustainable practices and environmental responsibility</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-timbercraft-green/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-timbercraft-cream flex items-center justify-center text-timbercraft-green mb-5">
                <Leaf size={26} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-timbercraft-dark mb-4">Sustainable Sourcing</h3>
              <p className="text-gray-600 leading-relaxed">{sustainability.sourcing}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-timbercraft-green/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-timbercraft-cream flex items-center justify-center text-timbercraft-green mb-5">
                <Recycle size={26} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-timbercraft-dark mb-4">Eco-Friendly Production</h3>
              <p className="text-gray-600 leading-relaxed">{sustainability.production}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-timbercraft-green/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-timbercraft-cream flex items-center justify-center text-timbercraft-green mb-5">
                <TreePine size={26} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-timbercraft-dark mb-4">Reforestation</h3>
              <p className="text-gray-600 leading-relaxed">{sustainability.reforestation}</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-timbercraft-green/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-timbercraft-cream flex items-center justify-center text-timbercraft-green mb-5">
                <HeartHandshake size={26} strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-display font-semibold text-timbercraft-dark mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">{sustainability.community}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;
