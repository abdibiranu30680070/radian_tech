import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section, SectionHeader } from './ui/Section';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [submissionStatus, setSubmissionStatus] = useState('');
  const selectedProject = searchParams.get('project');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = formData.get('subject') === 'project' && selectedProject
      ? `Project inquiry: ${selectedProject}`
      : formData.get('subject') || 'Website inquiry';
    const body = [
      `Name: ${formData.get('firstName')} ${formData.get('lastName')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      '',
      formData.get('message'),
    ].join('\n');

    setSubmissionStatus('Your email app is opening with your message ready to send.');
    window.location.href = `mailto:info@radiantech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" background="gray">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Contact Us"
          title="Get In Touch"
          description="Have a project in mind? Let's discuss how we can help you achieve your business goals."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:info@radiantech.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-300">info@radiantech.com</a>
                  <a href="mailto:support@radiantech.com" className="block text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-300">support@radiantech.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a href="tel:+251911123456" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-300">+251 911 123 456</a>
                  <a href="tel:+15559876543" className="block text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-300">+1 (555) 987-6543</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Addis Ababa, Ethiopia<br />
                    Bole Sub City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h4>
                  <p className="text-gray-600 dark:text-gray-400">Available 24/7</p>
                  <a href="mailto:info@radiantech.com?subject=Live%20chat%20request" className="inline-block text-primary font-semibold mt-1 hover:underline">
                    Start Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 dark:text-gray-400">Interactive Map</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Google Maps Integration</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {selectedProject && (
                <p className="rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary" role="status">
                  You&apos;re enquiring about <strong>{selectedProject}</strong>.
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="+251 911 000 000" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                <select id="subject" name="subject" required defaultValue={selectedProject ? 'project' : ''} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
                  <option value="" disabled>Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="consultation">Consultation</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                <textarea id="message" name="message" rows={5} required defaultValue={selectedProject ? `I would like to learn more about ${selectedProject}.` : ''} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white resize-none" placeholder="Tell us about your project..." />
              </div>

              {submissionStatus && <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">{submissionStatus}</p>}

              <button type="submit" className="w-full bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
