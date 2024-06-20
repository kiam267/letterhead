import Image from 'next/image';


import Hero from '@/components/hero';
import About from '@/components/about';
import Features from '@/components/features';



export default function Home() {
  return (
    <main className="container flex  flex-col  items-center justify-between">
      <Hero />
      <About />
      <Features />
    </main>
  );
}

// Peerlist logo
