import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { HomeHighlights } from '@/components/HomeHighlights';
import { Portfolio } from '@/components/Portfolio';
import { Technologies } from '@/components/Technologies';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <HomeHighlights />
      <Portfolio />
      <Technologies />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
