'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text, setText] = useState('');
  const [glitch, setGlitch] = useState(false);
  const fullText = '> INITIALIZING CODE VIMARSH...';
  const [cursorVisible, setCursorVisible] = useState(true);

  const teamMembers = [
    { name: 'Krupal Patel', image: '/Krupal_patel.jpeg' },
    { name: 'Mihir Bhavasar', image: '/Mihir_bhavasar.jpeg' },
    { name: 'Shivam Parmar', image: '/Shivam_parmar.jpeg' },
    { name: 'Yesh Solanki', image: '/Yesh_solnki.jpeg' },
    { name: 'Jay Prajapati', image: '/jay_prajapati.jpeg' }
  ];

  useEffect(() => {
    // Typing effect
    let currentIndex = 0;
    const typingSpeed = 50;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start glitch effect after typing
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
        // Start cursor blink
        setInterval(() => {
          setCursorVisible(prev => !prev);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        </div>
      </div>
      
      {/* Glitch effect overlay */}
      {glitch && (
        <div className="absolute inset-0 bg-white mix-blend-overlay opacity-5 animate-pulse"></div>
      )}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="terminal-window border border-cyan-400/30 bg-black/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl shadow-cyan-500/10">
          {/* Terminal header */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-cyan-400 font-mono text-sm">terminal</div>
          </div>
          
          {/* Terminal content */}
          <div className="font-mono text-cyan-400 space-y-4">
            <div className="flex items-start">
              <span className="text-green-400 select-none">$</span>
              <div className="ml-2 flex-1 overflow-hidden">
                <div className={`inline-block ${glitch ? 'text-red-400' : 'text-cyan-400'} transition-colors`}>
                  {text}
                  <span className={`inline-block w-3 h-5 bg-cyan-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-2 text-cyan-300">
              <p className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  CODE VIMARSH
                </span>
              </p>
              <p className="text-cyan-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                {'>'}_ Empowering developers through innovation and collaboration

              </p>
            </div>
            
            <div className="pt-6 mt-8 border-t border-cyan-400/20">
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#about"
                  className="relative px-6 py-3 text-sm font-medium text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    <span>EXPLORE</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors"></span>
                </motion.a>
                
                <motion.a 
                  href="#contact"
                  className="relative px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    JOIN NOW
                    <span className="ml-2 h-3 w-3 rounded-full bg-white/80 group-hover:bg-white transition-colors"></span>
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="inline-block animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
