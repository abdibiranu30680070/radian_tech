import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Target, Eye, Heart, Users, MapPin, Award, Shield } from 'lucide-react';

const coreValues = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our business dealings and client relationships.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster a culture of open communication and mutual respect.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering quality that exceeds expectations.',
  },
];

const leadershipTeam = [
  {
    name: 'Ashenafi Birhanu',
    role: 'CEO & Founder',
    description: 'Visionary tech leader driving digital transformation across Africa and beyond.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    description: 'Expert in cloud architecture and AI systems.',
  },
  {
    name: 'Michael Johnson',
    role: 'COO',
    description: 'Operations and strategy specialist.',
  },
  {
    name: 'Emily Davis',
    role: 'CFO',
    description: 'Financial planning and growth expert.',
  },
];

const timeline = [
  { year: '2025 Q1', event: 'RadianTech Founded by Ashenafi Birhanu' },
  { year: '2025 Q2', event: 'First Enterprise Client Onboarded' },
  { year: '2025 Q3', event: 'Launched Cloud & AI Division' },
  { year: '2025 Q4', event: 'Expanded to Major Regions Nationally' },
  { year: '2026 Q1', event: 'Reached 50+ Projects Milestone' },
  { year: '2026 Q2', event: 'National Presence in Major Cities' },
];

export function About() {
  return (
    <Section id="about" background="gray">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="About Us"
          title="Driving Digital Transformation Since 2025"
          description="From a bold startup vision to a rapidly growing technology company, our journey is defined by innovation, excellence, and unwavering commitment to our clients' success."
        />

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 items-center">
            <div>
              <h3 className="text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg mb-4 leading-relaxed">
                RadianTech was founded in 2025 by Ashenafi Birhanu with a bold vision: to help businesses 
                leverage technology to achieve their full potential. What started as a passionate team of 
                developers has rapidly grown into a global technology powerhouse.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg mb-4 leading-relaxed">
                Today, we serve clients across multiple continents, delivering innovative software solutions 
                that transform businesses and drive digital excellence. Our journey has been marked by 
                continuous growth, technological advancement, and an unwavering commitment to quality.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to make 
                advanced technology accessible and beneficial for businesses of all sizes.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
              <img 
                src="/hero-image.jpg" 
                alt="RadianTech Innovation & Engineering" 
                className="w-full h-80 sm:h-96 2xl:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  <div className="text-center bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-[#0184fa]" />
                    <h4 className="font-bold text-base sm:text-lg mb-1">Mission</h4>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Deliver innovative software solutions that empower global businesses.
                    </p>
                  </div>
                  <div className="text-center bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-[#db0751]" />
                    <h4 className="font-bold text-base sm:text-lg mb-1">Vision</h4>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Global leadership in digital transformation &amp; enterprise excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl 2xl:text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm 2xl:text-base">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="text-center hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-xl 2xl:text-2xl">{member.name}</CardTitle>
                  <p className="text-secondary font-semibold text-sm 2xl:text-base">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm 2xl:text-base text-gray-600 dark:text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline - Our Journey */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg inline-block">
                      <span className="text-2xl font-bold gradient-text">{item.year}</span>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-gray-900" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* National Presence */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-2xl p-12 text-white">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">National Presence</h3>
            <p className="text-xl opacity-90 mb-6">
              Serving clients across Ethiopia with operations in major regional hubs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Addis Ababa', 'Dire Dawa', 'Mekelle', 'Hawassa', 'Adama', 'Bahir Dar', 'Gondar', 'Dessie'].map((city) => (
                <span key={city} className="bg-white/20 px-4 py-2 rounded-full font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
