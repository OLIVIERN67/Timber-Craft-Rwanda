import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { services } from '../data';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Comprehensive wood manufacturing and timber solutions for all your needs</p>

          {!services || services.length === 0 ? (
            <p className="text-center text-gray-500">No services available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  {service.image && (
                    <figure className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </figure>
                  )}
                  <div className="card-body p-6 text-center items-center">
                    <h3 className="card-title text-xl text-timbercraft-dark">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="card-actions">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-timbercraft-green font-semibold hover:underline inline-flex items-center gap-1 mt-2 group/link"
                      >
                        View More <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
