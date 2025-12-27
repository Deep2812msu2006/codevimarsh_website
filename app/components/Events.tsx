'use client';

import { motion } from 'framer-motion';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
  type: 'workshop' | 'hackathon' | 'talk';
};

export default function Events() {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: 'Web Dev Workshop',
      date: 'JAN 15, 2025',
      description: 'Master modern web development with React, Next.js, and TypeScript in this hands-on workshop.',
      location: 'Virtual',
      type: 'workshop'
    },
    {
      id: 2,
      title: 'Hack the Future',
      date: 'FEB 20-21, 2025',
      description: '24-hour hackathon with exciting prizes, mentors, and workshops. Build something amazing!',
      location: 'Tech Hub, City Center',
      type: 'hackathon'
    },
    {
      id: 3,
      title: 'AI & ML Summit',
      date: 'MAR 5, 2025',
      description: 'Exploring cutting-edge developments in Artificial Intelligence and Machine Learning.',
      location: 'Virtual & On-site',
      type: 'talk'
    },
  ];

  const getTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'workshop':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'hackathon':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'talk':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-slate-800/50 text-slate-300 border-slate-700/50';
    }
  };

  const getGlowClass = (index: number) => {
    const glows = ['glow-cyan', 'glow-purple', 'glow-emerald'];
    return glows[index % glows.length];
  };

  return (
    <section id="events" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          >
            Upcoming Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Join us for exciting workshops, hackathons, and tech talks. Level up your skills and connect with like-minded developers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-6 border ${getGlowClass(index)} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${getTypeColor(event.type)}`}>
                  {event.type.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-slate-500">{event.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{event.description}</p>
              
              <div className="flex items-center text-sm text-slate-500 mb-6">
                <svg className="w-4 h-4 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
              
              <button className="w-full cyber-button border-cyan-400 hover:before:bg-cyan-400/90 hover:shadow-cyan-400/30">
                <span>Register Now</span>
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="cyber-button border-cyan-400 hover:before:bg-cyan-400/90 hover:shadow-cyan-400/30">
            <span>View All Events</span>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
