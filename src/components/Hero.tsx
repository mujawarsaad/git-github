import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm font-medium text-slate-300">Available for Freelance Projects</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        DevOps, Cloud & Automation<br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-600">IT Support Solutions</span>
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Helping businesses deploy, automate, monitor, and manage applications efficiently. I bridge the gap between development and operations.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <a href="#contact" className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center">
          Schedule a Consultation
          <ArrowRight size={18} className="ml-2" />
        </a>
        <a href="#projects" className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all flex items-center justify-center">
          View Projects
        </a>
      </div>
    </section>
  );
}
