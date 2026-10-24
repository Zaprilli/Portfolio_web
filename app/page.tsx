import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Achievements />
      <Skills />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}
