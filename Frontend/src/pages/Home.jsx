import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import About from '../components/About';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta('meta.home.title', 'meta.home.description');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

