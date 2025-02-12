import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductShowcase />
      <ContactSection />
      <AboutSection />
    </main>
  );
}
