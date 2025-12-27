'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Smooth scroll to section
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      // Scroll to section with smooth behavior
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without page reload
      window.history.pushState({}, '', sectionId);
    }
  }, []);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add passive: true for better scroll performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Touch event for better mobile interaction
  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent scrolling when touching the nav links on mobile
    if (isMenuOpen) {
      e.preventDefault();
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <>
      {/* Add viewport meta tag for proper mobile rendering */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg' 
            : 'bg-transparent'
        }`}
        onTouchMove={handleTouchMove}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState({}, '', '/');
              }}
            >
              {'</>'} CodeVimarsh
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 select-none ${
                    pathname === link.href 
                      ? 'bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-400/30' 
                      : 'text-slate-300 active:bg-slate-800/50 active:scale-95 hover:text-cyan-400 hover:bg-slate-800/30'
                  }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="ml-4 cyber-button select-none active:scale-95"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                }}
              >
                <span>Contact Us</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-3 -mr-2 rounded-lg active:bg-slate-800/50 active:scale-95 text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 touch-manipulation"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Toggle menu"
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
              }}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu-container md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 mt-4 pb-4' : 'max-h-0'
          }`}>
            <div className="flex flex-col space-y-2 bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-slate-800/50">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-3.5 rounded-lg text-base font-medium active:bg-slate-800/50 active:scale-95 transition-transform ${
                    pathname === link.href 
                      ? 'bg-cyan-500/10 text-cyan-400' 
                      : 'text-slate-300'
                  }`}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-2 cyber-button w-full text-center active:scale-95 transition-transform"
                style={{
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                }}
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Add space for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
