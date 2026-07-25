import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pharmakon',
    role: 'Healthcare Partner',
    company: 'Healthcare',
    rating: 5,
    content: 'RadianTech helped us organize our business operations with Odoo and gave our healthcare business a professional online presence.',
    logo: '/pharmakon.jpg',
  },
  {
    name: 'SW',
    role: 'Business Partner',
    company: 'Business Services',
    rating: 5,
    content: 'The RadianTech team understood our business and delivered a clear, responsive website that represents us professionally.',
    logo: '/sw.jpg',
  },
  {
    name: 'Arakele Fashion Design College',
    role: 'Education Partner',
    company: 'Education',
    rating: 5,
    content: 'RadianTech created a website that presents our college, programs, and creative work in a much clearer way.',
    logo: '/arak.jpg',
  },
  {
    name: 'Natenael Alemayew Wholesale',
    role: 'Wholesale Partner',
    company: 'Wholesale',
    rating: 5,
    content: 'Our Odoo ERP and website work together to make our wholesale business easier to manage and easier for customers to understand.',
    logo: '/nathy_wholesale.jpg',
  },
  {
    name: 'Zelalem Sebsib Import and Wholesale',
    role: 'Import and Wholesale Partner',
    company: 'Import and Wholesale',
    rating: 5,
    content: 'RadianTech helped us bring our import and wholesale workflows into a more organized digital process.',
    logo: '/zalalem_import&export.jpg',
  },
  {
    name: 'RadianTech',
    role: 'Digital Solutions Team',
    company: 'Technology',
    rating: 5,
    content: 'We build practical digital solutions around Odoo ERP and modern websites so our clients can run and present their businesses better.',
    logo: '/logo.jpg',
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" background="white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from our satisfied clients about their experience working with RadianTech and the impact we've made on their businesses."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} client logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-secondary">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
