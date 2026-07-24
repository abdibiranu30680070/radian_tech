'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-6xl mx-auto transition-all duration-500 rounded-2xl ${
          scrolled
            ? 'bg-white/85 dark:bg-gray-950/90 backdrop-blur-xl border border-white/40 dark:border-gray-800/80 shadow-2xl shadow-primary/10 py-2.5 px-6'
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/40 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <img src="/logo.jpg" alt="RadianTech Logo" className="relative w-9 h-9 rounded-xl object-cover border border-white/30" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#0184fa] via-blue-600 to-[#db0751] bg-clip-text text-transparent">
                RadianTech
              </span>
            </Link>
          </div>

          {/* Desktop Streamlined Page Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-[#0184fa] dark:text-[#38a0ff]' 
                      : 'text-gray-700 dark:text-gray-200 hover:text-[#0184fa] dark:hover:text-[#38a0ff]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
            
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1" />

            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:scale-105 transition-all duration-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <Link href="/contact">
              <Button variant="primary" size="sm" className="shadow-lg shadow-[#0184fa]/25 font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200/80 dark:border-gray-800/80 animate-fade-in">
            <div className="space-y-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-[#0184fa]/10 hover:text-[#0184fa] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full py-3 font-bold shadow-lg shadow-primary/20">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
