import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-6xl mx-auto transition-all duration-500 rounded-2xl px-3 sm:px-6 ${
          scrolled
            ? 'bg-white/85 dark:bg-gray-950/90 backdrop-blur-xl border border-white/40 dark:border-gray-800/80 shadow-2xl shadow-primary/10 py-2.5'
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/40 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <img src="/logo.jpg" alt="RadianTech Logo" className="relative w-9 h-9 rounded-xl object-cover border border-white/30" />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#0184fa] via-blue-600 to-[#db0751] bg-clip-text text-transparent">
                RadianTech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
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

            <Button as={Link} to="/contact" variant="primary" size="sm" className="shadow-lg shadow-[#0184fa]/25 font-bold tracking-wide">
                Get Started
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex shrink-0 items-center space-x-1.5 sm:space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden mt-4 pt-4 border-t border-gray-200/80 dark:border-gray-800/80 animate-fade-in">
            <div className="space-y-2 pb-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2.5 text-base font-semibold rounded-xl transition-colors ${
                      isActive 
                        ? 'bg-[#0184fa]/10 text-[#0184fa]' 
                        : 'text-gray-800 dark:text-gray-200 hover:bg-[#0184fa]/10 hover:text-[#0184fa]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button as={Link} to="/contact" variant="primary" className="w-full py-3 font-bold shadow-lg shadow-primary/20">
                    Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
