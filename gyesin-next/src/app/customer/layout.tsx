import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[70px] min-h-screen bg-[#0a0a0a] text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
