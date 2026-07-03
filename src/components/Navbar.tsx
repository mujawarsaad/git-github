import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tight">
          Saad<span className="text-brand-500">Mujawar</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-brand-400 transition-colors">About</a>
          <a href="#services" className="hover:text-brand-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-400 transition-colors">Projects</a>
          <a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a>
          <a href="#contact" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-brand-500/20">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full flex flex-col space-y-4 px-6 py-6 border-t border-slate-800">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-brand-400 font-bold">Contact</a>
        </div>
      )}
    </nav>
  );
}
