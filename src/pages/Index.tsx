
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Technology from '@/components/Technology';
import Pricing from '@/components/Pricing';
import EnterpriseSection from '@/components/EnterpriseSection';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling for all anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Initialize animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements with the 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(elem => {
      observer.observe(elem);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Technology />
        <Pricing />
        <EnterpriseSection />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
