import { Navigation } from '@/components/Navigation';
import { Technologies } from '@/components/Technologies';
import { Footer } from '@/components/Footer';

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Technologies />
      <Footer />
    </main>
  );
}
