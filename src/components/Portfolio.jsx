import React, { useState } from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { ExternalLink, Star, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'HealthCare Pro',
    category: 'Healthcare',
    image: '/portfolio-healthcare.jpg',
    description: 'Comprehensive hospital management system with EHR, telemedicine, and patient portal.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    impact: '40% reduction in patient wait times',
    metrics: '50+ hospitals, 1M+ patients',
    testimonial: 'Transformed our entire healthcare delivery process.',
  },
  {
    title: 'FinTech Hub',
    category: 'Banking',
    image: '/portfolio-fintech.jpg',
    description: 'Digital banking platform with real-time transactions and advanced security features.',
    technologies: ['Next.js', 'Python', 'MongoDB', 'Azure'],
    impact: '200% increase in mobile transactions',
    metrics: '500K+ users, $2B+ processed',
    testimonial: 'Most secure and user-friendly banking app we have used.',
  },
  {
    title: 'EduLearn Platform',
    category: 'Education',
    image: '/services-bg.jpg',
    description: 'AI-powered learning management system with personalized learning paths.',
    technologies: ['Vue.js', 'Django', 'Redis', 'Google Cloud'],
    impact: '60% improvement in student engagement',
    metrics: '100K+ students, 500+ courses',
    testimonial: 'Revolutionized how we deliver online education.',
  },
  {
    title: 'RetailMax',
    category: 'Retail',
    image: '/solutions-bg.jpg',
    description: 'Omnichannel retail platform with inventory management and customer analytics.',
    technologies: ['React Native', 'Java Spring Boot', 'MySQL', 'Docker'],
    impact: '35% increase in sales',
    metrics: '200+ stores, 2M+ customers',
    testimonial: 'Seamless integration across all our sales channels.',
  },
  {
    title: 'LogiTrack',
    category: 'Logistics',
    image: '/hero-image.jpg',
    description: 'Real-time fleet management and route optimization system.',
    technologies: ['Angular', '.NET', 'SQL Server', 'Kubernetes'],
    impact: '25% reduction in fuel costs',
    metrics: '1000+ vehicles, 50+ countries',
    testimonial: 'Optimized our entire logistics operation.',
  },
  {
    title: 'AgriSmart',
    category: 'Agriculture',
    image: '/services-bg.jpg',
    description: 'Smart farming solution with IoT sensors and crop management analytics.',
    technologies: ['Flutter', 'Python FastAPI', 'InfluxDB', 'AWS IoT'],
    impact: '30% increase in crop yield',
    metrics: '5000+ farms, 10M+ hectares',
    testimonial: 'Precision farming made accessible and affordable.',
  },
];

const INITIAL_COUNT = 3;

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <Section id="portfolio" background="white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Success Stories & Case Studies"
          description="Explore our portfolio of successful projects that have transformed businesses across various industries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10">
          {displayed.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="h-52 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
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
                      <span key={idx} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
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
                  <p className="text-xs italic text-gray-600 dark:text-gray-300">&quot;{project.testimonial}&quot;</p>
                </div>

                <button className="w-full mt-4 text-primary font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More / Show Less */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-5 h-5" /></>
              ) : (
                <>View All Projects ({remaining}+) <ChevronDown className="w-5 h-5" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
