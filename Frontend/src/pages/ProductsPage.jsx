import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-16 pb-4 container-custom text-center">
          <h1 className="section-title mb-0">Our Products</h1>
          <p className="section-subtitle mb-0">Quality wooden products crafted for every space</p>
        </div>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

