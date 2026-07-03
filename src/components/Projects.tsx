import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real-world implementations of automation, deployment, and infrastructure management.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="glass-panel rounded-xl overflow-hidden flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover border-b border-slate-700" loading="lazy" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-brand-400 text-xs font-mono mb-4">{project.tech}</p>
                <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Github size={16} className="mr-2" /> Code
                  </a>
                  <a href={project.live} className="flex items-center text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
