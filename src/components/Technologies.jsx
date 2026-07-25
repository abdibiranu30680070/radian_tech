import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

const techCategories = [
  { title: 'Frontend', technologies: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind CSS'], color: 'from-blue-500 to-cyan-500' },
  { title: 'Backend', technologies: ['Python', 'Django', 'FastAPI', 'Node.js', 'Express', 'Java Spring Boot', '.NET'], color: 'from-green-500 to-emerald-500' },
  { title: 'Mobile', technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift'], color: 'from-purple-500 to-pink-500' },
  { title: 'Database', technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Oracle', 'Redis'], color: 'from-orange-500 to-red-500' },
  { title: 'Cloud', technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'], color: 'from-indigo-500 to-blue-500' },
  { title: 'ERP', technologies: ['Odoo', 'SAP', 'Microsoft Dynamics'], color: 'from-teal-500 to-green-500' },
];

export function Technologies() {
  return (
    <Section id="technologies" background="gray">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Tech Stack"
          title="Modern Technologies We Use"
          description="We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="group">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-xl">{category.title.charAt(0)}</span>
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span key={idx} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Ahead with Technology</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We continuously evaluate and adopt emerging technologies to ensure our clients benefit from the latest innovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Agile', 'DevOps', 'CI/CD', 'Microservices', 'Serverless', 'AI/ML', 'IoT', 'Blockchain'].map((tech) => (
              <span key={tech} className="bg-white/20 px-4 py-2 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
