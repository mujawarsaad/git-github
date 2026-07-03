import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-panel rounded-lg overflow-hidden">
              <button 
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-400 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
