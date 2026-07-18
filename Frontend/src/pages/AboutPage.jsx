import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-16 pb-4 container-custom text-center">
          <h1 className="section-title mb-0">About TimberCraft Rwanda</h1>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

