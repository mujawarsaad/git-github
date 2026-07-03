import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
