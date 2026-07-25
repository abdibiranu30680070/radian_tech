import React, { useState } from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { 
  HeartPulse, Building2, Landmark, GraduationCap, Factory, 
  ShoppingCart, Truck, Sprout, Radio, HeartHandshake,
  ChevronDown, ChevronUp
} from 'lucide-react';

const industries = [
  { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop', title: 'Healthcare', description: 'Electronic health records, telemedicine platforms, and healthcare management systems.', solutions: ['EHR Systems', 'Telemedicine', 'Medical Billing', 'Patient Management'] },
  { image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600&auto=format&fit=crop', title: 'Banking & Finance', description: 'Secure banking applications, trading platforms, and financial management solutions.', solutions: ['Mobile Banking', 'Trading Platforms', 'Risk Management', 'Compliance'] },
  { image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=600&auto=format&fit=crop', title: 'Government', description: 'Digital governance solutions, citizen portals, and public service management systems.', solutions: ['E-Government', 'Citizen Portals', 'Document Management', 'Public Services'] },
  { image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop', title: 'Education', description: 'Learning management systems, educational platforms, and school administration software.', solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Management', 'E-Learning'] },
  { image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', title: 'Manufacturing', description: 'Industry 4.0 solutions, IoT integration, and production management systems.', solutions: ['IoT Solutions', 'Production Management', 'Quality Control', 'Supply Chain'] },
  { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop', title: 'Retail', description: 'E-commerce platforms, POS systems, and customer experience solutions.', solutions: ['E-Commerce', 'POS Systems', 'Inventory Management', 'Customer Loyalty'] },
  { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop', title: 'Logistics', description: 'Fleet management, tracking systems, and supply chain optimization solutions.', solutions: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Warehouse Management'] },
  { image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop', title: 'Agriculture', description: 'Smart farming solutions, crop management systems, and agricultural technology.', solutions: ['Smart Farming', 'Crop Management', 'Weather Integration', 'Market Analysis'] },
  { image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', title: 'Telecommunications', description: 'Network management, billing systems, and customer service platforms.', solutions: ['Network Management', 'Billing Systems', 'Customer Service', 'Network Security'] },
  { image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop', title: 'NGOs', description: 'Donation management, volunteer coordination, and impact tracking systems.', solutions: ['Donation Management', 'Volunteer Coordination', 'Impact Tracking', 'Grant Management'] },
];

const INITIAL_COUNT = 6;

export function Solutions() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? industries : industries.slice(0, INITIAL_COUNT);
  const remaining = industries.length - INITIAL_COUNT;

  return (
    <Section id="solutions" background="gray">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Industry Solutions"
          title="Enterprise Solutions Across Industries"
          description="We deliver tailored technology solutions for diverse industries, understanding the unique challenges and requirements of each sector."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 2xl:gap-10 mb-8">
          {displayed.map((industry, index) => {
            return (
              <Card key={index} className="group hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden p-0">
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0" />
                </div>
                <div className="p-6">
                  <CardHeader className="!mb-2">
                    <CardTitle className="text-xl 2xl:text-2xl">{industry.title}</CardTitle>
                  </CardHeader>

                <CardContent>
                  <p className="text-sm 2xl:text-base mb-4 leading-relaxed">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full border border-primary/20"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* See More / Show Less Button */}
        {industries.length > INITIAL_COUNT && (
          <div className="mb-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gradient-secondary text-white px-8 py-3.5 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 hover:scale-105"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-5 h-5" /></>
              ) : (
                <>See More Industries ({remaining}+) <ChevronDown className="w-5 h-5" /></>
              )}
            </button>
          </div>
        )}

        {/* Enterprise CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl p-10 border border-white/20 text-white group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/solutions-bg.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-[#0184fa]/70 to-[#db0751]/85 backdrop-blur-[1px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block bg-white/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Enterprise Solutions</span>
              <h3 className="text-3xl font-bold mb-3">Custom Enterprise Architecture &amp; Scale</h3>
              <p className="text-gray-200 leading-relaxed text-base">
                We engineer scalable, resilient, and cloud-native solutions customized specifically to your industry compliance standards and operational goals.
              </p>
            </div>
            <a href="#contact">
              <button className="whitespace-nowrap bg-white text-gray-900 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:scale-105">
                Explore Enterprise Plan
              </button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
