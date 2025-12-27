'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Learn',
    description: 'Enhance your skills through workshops and hands-on sessions.',
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20',
    hover: 'hover:border-cyan-400/50',
  },
  {
    title: 'Connect',
    description: 'Meet like-minded individuals and industry professionals.',
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    hover: 'hover:border-purple-400/50',
  },
  {
    title: 'Grow',
    description: 'Take your career to the next level with our resources and network.',
    icon: (
      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-400/50',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-[#e5e7eb] max-w-3xl mx-auto text-lg leading-relaxed">
            <span className="text-cyan-400 font-medium">Code Vimarsh</span> is a vibrant community of passionate developers, designers, and tech enthusiasts 
            dedicated to fostering learning and innovation in the world of technology. We believe in the power of 
            collaboration and knowledge sharing to drive meaningful change in the tech industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`glass-card p-8 rounded-xl border ${feature.border} ${feature.hover} transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-slate-400 text-center">{feature.description}</p>
              <div className="mt-6 text-center">
                <span className="inline-block w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-400 mb-8 text-lg">
            Our mission is to create a platform where knowledge is shared, skills are honed, 
            and meaningful connections are made within the tech community. Join us in shaping 
            the future of technology through collaboration and innovation.
          </p>
          <button className="cyber-button border-cyan-400 hover:before:bg-cyan-400/90 hover:shadow-cyan-400/30">
            <span>Learn More</span>
          </button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
