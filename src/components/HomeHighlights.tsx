import React from 'react';
import Link from 'next/link';
import { ArrowRight, Database, Globe, LifeBuoy, ShoppingCart, Building2, GraduationCap, Star } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const services = [
  {
    icon: Database,
    title: 'Odoo ERP Solutions',
    description: 'Organize sales, inventory, purchasing, accounting, and daily operations in one connected system.',
  },
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional, responsive websites that make your business easier to discover and trust.',
  },
  {
    icon: LifeBuoy,
    title: 'Odoo Support',
    description: 'Practical customization, training, maintenance, and support as your business grows.',
  },
];

const solutions = [
  {
    icon: ShoppingCart,
    title: 'Wholesale & Import',
    description: 'Odoo workflows for products, purchasing, inventory, sales, and customer communication.',
  },
  {
    icon: Building2,
    title: 'Healthcare Businesses',
    description: 'Clearer operations and a professional web presence for healthcare organizations.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Websites that present programs, courses, and the people behind your institution.',
  },
  {
    icon: Globe,
    title: 'Growing Businesses',
    description: 'A practical combination of ERP organization and a strong online presence.',
  },
];

const testimonials = [
  {
    name: 'Pharmakon',
    role: 'Healthcare Partner',
    logo: '/pharmakon.jpg',
    quote: 'RadianTech helped us organize our business operations with Odoo and gave our healthcare business a professional online presence.',
  },
  {
    name: 'Arakele Fashion Design College',
    role: 'Education Partner',
    logo: '/arak.jpg',
    quote: 'RadianTech created a website that presents our college, programs, and creative work in a much clearer way.',
  },
  {
    name: 'Natenael Alemayew Wholesale',
    role: 'Wholesale Partner',
    logo: '/nathy_wholesale.jpg',
    quote: 'Our Odoo ERP and website work together to make our wholesale business easier to manage and understand.',
  },
];

const MoreLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </Link>
);

export const HomeHighlights: React.FC = () => {
  return (
    <>
      <Section id="home-services" background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Do"
            title="Technology That Works for Your Business"
            description="Start with the practical services your business needs most, then explore the full range of solutions we provide."
          />
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <MoreLink href="/services" label="View all services" />
          </div>
        </div>
      </Section>

      <Section id="home-solutions" background="gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Who We Help"
            title="Solutions for Growing Organizations"
            description="Whether you need better internal workflows or a stronger online presence, we build around the way your business works."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.title} className="hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <MoreLink href="/solutions" label="Explore all solutions" />
          </div>
        </div>
      </Section>

      <Section id="home-testimonials" background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Happy Clients"
            title="Trusted by Businesses We Support"
            description="See how our clients use Odoo ERP and professional websites to make their work clearer and more organized."
          />
          <div className="overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="client-marquee-track flex w-max gap-6 sm:gap-8 hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={`${testimonial.name}-${index}`} className="relative w-[min(86vw,380px)] shrink-0">
                  <CardContent className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={testimonial.logo} alt={`${testimonial.name} logo`} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.role}</p>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <MoreLink href="/testimonials" label="Read more client stories" />
          </div>
        </div>
      </Section>
    </>
  );
};
