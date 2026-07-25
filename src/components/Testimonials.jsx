import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechVentures', company: 'Healthcare', rating: 5, content: 'RadianTech transformed our entire healthcare platform. Their expertise in building scalable solutions is unmatched. The team was professional, responsive, and delivered beyond our expectations.', avatar: 'SJ' },
  { name: 'Michael Chen', role: 'CTO, FinanceFlow', company: 'Banking', rating: 5, content: 'Working with RadianTech was a game-changer for our fintech startup. They understood our complex requirements and delivered a secure, high-performance platform that has scaled beautifully.', avatar: 'MC' },
  { name: 'Emily Rodriguez', role: 'Director, EduWorld', company: 'Education', rating: 5, content: 'The AI-powered learning platform RadianTech built for us has revolutionized how we deliver education. Their attention to detail and commitment to quality is exceptional.', avatar: 'ER' },
  { name: 'David Thompson', role: 'VP Operations, RetailMax', company: 'Retail', rating: 5, content: "RadianTech's omnichannel solution integrated all our systems seamlessly. Our operational efficiency has improved significantly, and customer satisfaction is at an all-time high.", avatar: 'DT' },
  { name: 'Lisa Wang', role: 'CEO, LogiTech Solutions', company: 'Logistics', rating: 5, content: "The fleet management system developed by RadianTech optimized our entire logistics operation. We've seen significant cost savings and improved delivery times.", avatar: 'LW' },
  { name: 'James Miller', role: 'Founder, AgriTech Co', company: 'Agriculture', rating: 5, content: 'RadianTech brought IoT and smart farming technology to our business. Their innovative approach and technical expertise helped us modernize our operations completely.', avatar: 'JM' },
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
                  <div className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
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
