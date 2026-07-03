import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive DevOps, infrastructure, and IT support services tailored for modern businesses.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <div key={index} className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
              <service.icon size={24} className="text-brand-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
            <div className="space-y-2 text-xs">
              <p><strong className="text-slate-300">Benefits:</strong> <span className="text-slate-500">{service.benefits}</span></p>
              <p><strong className="text-slate-300">Use Cases:</strong> <span className="text-slate-500">{service.useCases}</span></p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="#contact" className="inline-flex items-center text-brand-400 hover:text-brand-300 font-semibold transition-colors">
          Need a custom solution? Let's discuss your requirements <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  );
}
