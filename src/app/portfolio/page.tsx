import { Navigation } from '@/components/Navigation';
import { Portfolio } from '@/components/Portfolio';
import { Footer } from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <Portfolio />
      <Footer />
    </main>
  );
}
