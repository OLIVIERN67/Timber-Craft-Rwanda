import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { contactInfo } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-timbercraft-dark text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-xs">
          <div className="flex gap-5">
            {contactInfo?.phone && (
              <span className="flex items-center gap-1.5">
                <Phone size={13} /> {contactInfo.phone}
              </span>
            )}
            {contactInfo?.email && (
              <span className="flex items-center gap-1.5">
                <Mail size={13} /> {contactInfo.email}
              </span>
            )}
            {contactInfo?.address && (
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {contactInfo.address}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a href="#" aria-label="Facebook" className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-timbercraft-green transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-timbercraft-green transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-timbercraft-green transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.08 20.45H3.55V8.97h3.53v11.48zM5.31 7.35c-1.13 0-2.04-.92-2.04-2.04s.91-2.04 2.04-2.04c1.13 0 2.04.91 2.04 2.04s-.91 2.04-2.04 2.04zm15.14 13.1h-3.52v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68h-3.52V8.97h3.38v1.57h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.22 2.34 4.22 5.39v6.35z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-timbercraft-green rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
              TC
            </div>
            <div>
              <span className="text-xl font-display font-semibold text-timbercraft-dark leading-none">TimberCraft</span>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">Rwanda</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors hover:text-timbercraft-green py-1 ${
                  isActive(link.path)
                    ? 'text-timbercraft-green after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-timbercraft-green after:rounded-full'
                    : 'text-timbercraft-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn btn-ghost btn-square text-timbercraft-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(link.path) ? 'bg-timbercraft-green text-white' : 'text-timbercraft-dark hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
