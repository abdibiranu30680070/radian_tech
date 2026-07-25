import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { CheckCircle, Clock, Users, Award, Zap, Shield } from 'lucide-react';

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
    <Section id="why-choose-us" background="primary">
      <div className="max-w-7xl mx-auto">
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
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Let&apos;s discuss how we can help transform your business.</p>
            <a href="#contact">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Contact Us Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
