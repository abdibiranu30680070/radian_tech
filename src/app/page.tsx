import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { HomeHighlights } from '@/components/HomeHighlights';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HomeHighlights />
      <Footer />
    </main>
  );
}
