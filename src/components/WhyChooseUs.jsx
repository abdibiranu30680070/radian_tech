import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { CheckCircle, Clock, Users, Award, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: CheckCircle, title: '100+ Projects Delivered', description: 'Proven track record of successful project deliveries across various industries.' },
  { icon: Users, title: '50+ Happy Clients', description: 'Building long-term relationships with satisfied clients worldwide.' },
  { icon: Award, title: '99% Client Satisfaction', description: 'Consistently exceeding client expectations with quality deliverables.' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock support to ensure your systems run smoothly.' },
  { icon: Zap, title: 'Agile Development', description: 'Flexible and iterative approach for faster time-to-market.' },
  { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing processes to ensure flawless software delivery.' },
];

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="relative overflow-hidden !bg-slate-950" background="none">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0184fa]/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#db0751]/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The RadianTech Advantage"
          description="Discover why businesses trust us to deliver their technology solutions and drive digital transformation."
          className="text-white"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#0184fa]/50 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_30px_rgba(1,132,250,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0184fa]/10 via-transparent to-[#db0751]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0184fa] to-[#db0751] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0184fa]/25 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38a0ff] transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0184fa] via-blue-600 to-[#db0751] rounded-2xl blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm sm:text-base">Let&apos;s discuss how we can help transform your business and build the future together.</p>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-[#0184fa] via-blue-600 to-[#db0751] text-white px-8 py-3.5 rounded-lg font-bold tracking-wide hover:shadow-[0_0_20px_rgba(1,132,250,0.4)] hover:scale-105 transition-all duration-300">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
