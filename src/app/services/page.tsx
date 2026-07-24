import { Navigation } from '@/components/Navigation';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <Services />
      <Footer />
    </main>
  );
}
