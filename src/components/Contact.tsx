import React from 'react';
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Whether you need to containerize an application, set up a CI/CD pipeline, or require reliable Linux server administration, I'm here to help. Drop a message, and let's optimize your infrastructure.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:saadmujawar85@gmail.com" className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors">
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-400"><Mail size={20} /></div>
              <span>saadmujawar85@gmail.com</span>
            </a>
            <a href="https://wa.me/917666898165" className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors">
              <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-400"><Phone size={20} /></div>
              <span>WhatsApp: +91 7666898165</span>
            </a>
            <div className="flex space-x-4 pt-6">
              <a href="https://github.com/mujawarsaad" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-all"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/mujawarsaad/" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
              <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
              <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">WhatsApp / Phone</label>
              <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="+1 234 567 8900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none" placeholder="Tell me about your project or infrastructure needs..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-lg transition-all flex items-center justify-center">
              <MessageSquare size={18} className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
