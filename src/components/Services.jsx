import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeader } from './ui/Section';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { 
  Code, Globe, Smartphone, Database, Users, Cloud, 
  Brain, Shield, Palette, BarChart,
  RefreshCw, MessageSquare, CheckCircle, Wrench,
  ChevronDown, ChevronUp
} from 'lucide-react';

const services = [
  { image: '/images/service_software_1784958063143.jpg', title: 'Custom Software Development', description: 'Tailored software solutions designed to meet your unique business requirements and drive operational efficiency.' },
  { image: '/images/service_web_1784958071477.jpg', title: 'Web Development', description: 'Modern, responsive, and high-performance web applications built with cutting-edge technologies.' },
  { image: '/images/service_mobile_1784958082325.jpg', title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.' },
  { image: '/images/service_erp_1784958090909.jpg', title: 'ERP Solutions', description: 'Comprehensive ERP implementations including Odoo, SAP, and Microsoft Dynamics for business optimization.' },
  { image: '/images/service_crm_1784958101204.jpg', title: 'CRM Solutions', description: 'Customer Relationship Management systems to enhance customer interactions and drive sales growth.' },
  { image: '/images/service_cloud_1784958111380.jpg', title: 'Cloud Solutions', description: 'Cloud migration, architecture, and management services on AWS, Azure, and Google Cloud Platform.' },
  { image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop', title: 'DevOps', description: 'CI/CD pipelines, infrastructure automation, and continuous delivery solutions for faster deployments.' },
  { image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop', title: 'AI & Machine Learning', description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop', title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.' },
  { image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop', title: 'UI/UX Design', description: 'User-centered design solutions that create intuitive and engaging digital experiences.' },
  { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop', title: 'API Integration', description: 'Seamless integration of third-party services and APIs to extend your application capabilities.' },
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', title: 'Data Analytics', description: 'Advanced analytics and business intelligence solutions to transform data into actionable insights.' },
  { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', title: 'Business Intelligence', description: 'Strategic BI solutions that empower data-driven decision making across your organization.' },
  { image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop', title: 'Digital Transformation', description: 'End-to-end digital transformation services to modernize your business processes and operations.' },
  { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', title: 'IT Consulting', description: 'Expert IT advisory services to guide your technology strategy and implementation.' },
  { image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', title: 'Quality Assurance', description: 'Rigorous testing and quality assurance processes to ensure flawless software delivery.' },
  { image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop', title: 'Maintenance & Support', description: 'Ongoing maintenance and 24/7 support services to keep your systems running smoothly.' },
];

const INITIAL_COUNT = 6;

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? services : services.slice(0, INITIAL_COUNT);
  const remaining = services.length - INITIAL_COUNT;

  return (
    <Section id="services" background="white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive Technology Solutions"
          description="From custom software development to enterprise solutions, we offer a full spectrum of technology services to drive your business forward."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 2xl:gap-10">
          {displayed.map((service, index) => {
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden p-0">
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0" />
                </div>
                <div className="p-6">
                  <CardHeader className="!mb-2">
                    <CardTitle className="text-xl 2xl:text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                <CardContent>
                  <p className="text-sm 2xl:text-base leading-relaxed">{service.description}</p>
                </CardContent>
                </div>
              </Card>
            );
          })}

        </div>

        {/* See More / Show Less Button */}
        {services.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-5 h-5" /></>
              ) : (
                <>See More Services ({remaining}+) <ChevronDown className="w-5 h-5" /></>
              )}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl p-12 text-white border border-white/20 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/services-bg.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0184fa]/90 via-gray-900/85 to-[#db0751]/90 backdrop-blur-[2px]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how our tailored software solutions powered by RadianTech technology can propel your growth.
              </p>
              <Button as={Link} to="/contact" variant="secondary" size="lg" className="border-0 bg-white px-8 text-lg shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:bg-gray-100">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
