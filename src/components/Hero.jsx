import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ArrowRight, Code, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';

const floatingIcons = [
  { icon: Code, position: 'top-20 left-10', delay: 0 },
  { icon: Cloud, position: 'top-40 right-20', delay: 200 },
  { icon: Smartphone, position: 'bottom-40 left-20', delay: 400 },
  { icon: Database, position: 'bottom-20 right-10', delay: 600 },
  { icon: Shield, position: 'top-60 left-1/4', delay: 800 },
  { icon: Zap, position: 'bottom-60 right-1/4', delay: 1000 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`absolute ${item.position} opacity-10 dark:opacity-20 animate-float`}
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <Icon className="w-16 h-16 text-primary" />
            </div>
          );
        })}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0184fa]/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#db0751]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 2xl:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-left animate-fade-in">
            <div className="inline-flex max-w-full items-center justify-center gap-2 bg-[#0184fa]/10 text-[#0184fa] dark:bg-[#0184fa]/20 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-2xl sm:rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider leading-relaxed text-center mb-6 border border-[#0184fa]/20 shadow-sm">
              <Zap className="w-4 h-4 shrink-0 text-[#db0751]" />
              Leading Enterprise Software &amp; AI Innovation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              Building{' '}
              <span className="bg-gradient-to-r from-[#0184fa] via-blue-500 to-[#db0751] bg-clip-text text-transparent">
                Intelligent Software
              </span>
              <br />
              Solutions for Tomorrow&apos;s Business
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We design, develop, and deliver high-performance digital solutions that help enterprises scale, 
              automate workflows, and maintain competitive technology dominance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-12">
              <Button as={Link} to="/contact" variant="primary" size="lg" className="w-full sm:w-auto group shadow-xl shadow-[#0184fa]/25 font-bold text-base px-6 sm:px-8 py-4">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button as={Link} to="/services" variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg shadow-gray-200 dark:shadow-none font-semibold text-base px-6 sm:px-8 py-4">
                  Explore Services
              </Button>
            </div>

            {/* Inline Stats */}
            <div className="pt-8 border-t border-gray-200/80 dark:border-gray-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: '100+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '10+', label: 'Countries Served' },
                { value: '99%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#0184fa] to-[#db0751] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-3xl p-3 bg-gradient-to-tr from-[#0184fa]/30 via-transparent to-[#db0751]/30 border border-white/40 dark:border-gray-700/50 shadow-2xl backdrop-blur-md group">
              <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-xl opacity-25 group-hover:opacity-60 transition duration-500 -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-950">
                <img 
                  src="/hero-image.jpg" 
                  alt="RadianTech Digital Technology Illustration" 
                  className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-950/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex items-center justify-between text-white shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-xs font-bold text-gray-200">Next-Gen Architecture</div>
                      <div className="text-[11px] text-gray-400">Powered by RadianTech Engine</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-[#db0751] text-white px-2.5 py-1 rounded-md shadow-md">
                    2025 Edition
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
