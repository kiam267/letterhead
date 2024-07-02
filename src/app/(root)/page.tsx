import Header from '@/layout/header';
import Footer from '@/layout/footer';

import Hero from '@/features/home/components/hero';
import About from '@/features/home/components/about';
import Features from '@/features/home/components/features';
import Testimonials from '@/features/home/components/testimonials';

export default async function Home() {
  return (
    <>
      <Header />
      <main className="container flex  flex-col  items-center justify-between">
        <Hero />
        <About />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

// Peerlist logo
