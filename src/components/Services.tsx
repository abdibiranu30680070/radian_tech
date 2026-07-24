'use client';

import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Users, 
  Cloud, 
  Cpu, 
  Shield, 
  Palette, 
  Link, 
  BarChart, 
  Brain, 
  RefreshCw, 
  MessageSquare, 
  CheckCircle, 
  Wrench 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements and drive operational efficiency.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Professional, responsive business websites that present your brand clearly and help customers reach you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.',
  },
  {
    icon: Database,
    title: 'Odoo ERP Solutions',
    description: 'Odoo setup, customization, and support for sales, inventory, accounting, purchasing, and everyday business operations.',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description: 'Customer Relationship Management systems to enhance customer interactions and drive sales growth.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture, and management services on AWS, Azure, and Google Cloud Platform.',
  },
  {
    icon: RefreshCw,
    title: 'DevOps',
    description: 'CI/CD pipelines, infrastructure automation, and continuous delivery solutions for faster deployments.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
  },
  {
    icon: Link,
    title: 'API Integration',
    description: 'Seamless integration of third-party services and APIs to extend your application capabilities.',
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions to transform data into actionable insights.',
  },
  {
    icon: Brain,
    title: 'Business Intelligence',
    description: 'Strategic BI solutions that empower data-driven decision making across your organization.',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business processes and operations.',
  },
  {
    icon: MessageSquare,
    title: 'IT Consulting',
    description: 'Expert IT advisory services to guide your technology strategy and implementation.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality assurance processes to ensure flawless software delivery.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and 24/7 support services to keep your systems running smoothly.',
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" background="white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Technology Solutions"
          description="From custom software development to enterprise solutions, we offer a full spectrum of technology services to drive your business forward."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 2xl:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl 2xl:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm 2xl:text-base leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section with Generated Brand Background */}
        <div className="mt-16 text-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl p-12 text-white border border-white/20 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/services-bg.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0184fa]/90 via-gray-900/85 to-[#db0751]/90 backdrop-blur-[2px]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how our tailored software solutions powered by RadianTech technology can propel your growth.
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
