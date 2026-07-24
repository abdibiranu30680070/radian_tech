import { Navigation } from '@/components/Navigation';
import { Solutions } from '@/components/Solutions';
import { Footer } from '@/components/Footer';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <Solutions />
      <Footer />
    </main>
  );
}
