import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <ContactSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
