'use client';

import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Pharmakon Healthcare Platform',
    category: 'Healthcare',
    image: '/pharmakon.jpg',
    description: 'Odoo ERP configuration and a professional website to support Pharmakon\'s healthcare business operations.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Website'],
    impact: 'Connected daily business operations in one system',
    metrics: 'Sales, inventory, and customer workflows',
    testimonial: 'A clearer digital presence and smoother business operations.',
  },
  {
    title: 'SW Business Platform',
    category: 'Business Services',
    image: '/sw.jpg',
    description: 'A business website and tailored digital tools that give the SW team a stronger online presence.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS'],
    impact: 'Presented the business clearly online',
    metrics: 'Responsive pages and contact workflows',
    testimonial: 'A polished website that represents our business well.',
  },
  {
    title: 'Arakele Fashion College Platform',
    category: 'Education',
    image: '/arak.jpg',
    description: 'A responsive website for Arakele Fashion Design College to showcase its programs and connect with students.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Content Management'],
    impact: 'Made the college and its programs easier to discover',
    metrics: 'Mobile-friendly pages and inquiry forms',
    testimonial: 'Our college now has a website that reflects our creative work.',
  },
  {
    title: 'Natenael Alemayew Wholesale Platform',
    category: 'Wholesale',
    image: '/nathy_wholesale.jpg',
    description: 'Odoo ERP and website support for wholesale operations, product visibility, and customer communication.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Website'],
    impact: 'Organized sales and inventory workflows',
    metrics: 'Wholesale products and customer inquiries',
    testimonial: 'Our website and business processes now work together more smoothly.',
  },
  {
    title: 'Zelalem Sebsib Import Platform',
    category: 'Import and Wholesale',
    image: '/zalalem_import&export.jpg',
    description: 'A business website and Odoo workflow support for import, wholesale, and customer-facing operations.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Website'],
    impact: 'Brought core business information into one organized workflow',
    metrics: 'Import, wholesale, and customer processes',
    testimonial: 'The new digital tools make our business easier to present and manage.',
  },
  {
    title: 'RadianTech Digital Platform',
    category: 'Technology',
    image: '/logo.jpg',
    description: 'Our own Odoo ERP and business website foundation, built to demonstrate practical digital solutions for organizations.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Next.js'],
    impact: 'Combined ERP consulting with modern web delivery',
    metrics: 'ERP implementation and website services',
    testimonial: 'Practical technology that helps businesses work with confidence.',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" background="white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Success Stories & Case Studies"
          description="Explore Odoo ERP implementations and professional business websites built for growing organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="h-52 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain bg-white p-5 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-xs bg-[#db0751] text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-1 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium">{project.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span className="text-xs">{project.metrics}</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-xs italic text-gray-600 dark:text-gray-300">"{project.testimonial}"</p>
                </div>

                <button className="w-full mt-4 text-primary font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </Section>
  );
};
