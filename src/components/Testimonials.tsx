import React from 'react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Feedback</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((test, index) => (
          <div key={index} className="glass-panel p-8 rounded-2xl relative">
            <div className="absolute top-6 right-8 text-6xl text-slate-800 font-serif leading-none">"</div>
            <p className="text-slate-300 italic mb-6 relative z-10">{test.content}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-900 rounded-full flex items-center justify-center text-brand-400 font-bold mr-4">
                {test.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold">{test.name}</h4>
                <p className="text-slate-500 text-sm">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
