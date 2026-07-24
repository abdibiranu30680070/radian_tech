import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Solutions } from '@/components/Solutions';
import { Portfolio } from '@/components/Portfolio';
import { Technologies } from '@/components/Technologies';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Portfolio />
      <Technologies />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
