import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const skills = [
    'Linux Administration', 
    'Git & GitHub Actions', 
    'Docker Containerization', 
    'Jenkins CI/CD', 
    'AWS Fundamentals', 
    'Python / Bash Scripting'
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              I am a BSc Computer Science Graduate and a passionate DevOps enthusiast. My mission is to help startups and enterprises streamline their software delivery lifecycle through robust automation and scalable infrastructure.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              With a strong foundation in problem-solving and IT support, I don't just set up servers—I build resilient environments that scale with your business needs. 
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-brand-500" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-blue-900 blur-3xl opacity-20 rounded-full"></div>
            <div className="glass-panel p-8 rounded-2xl relative">
              <h3 className="text-xl font-semibold text-white mb-4">Core Philosophy</h3>
              <blockquote className="text-lg italic text-slate-300 border-l-4 border-brand-500 pl-4 mb-4">
                "Automation is not just about saving time; it's about reducing human error and creating predictable, scalable systems."
              </blockquote>
              <p className="text-sm text-slate-400 text-right">- Saad Mujawar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
