import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleSystem from './components/ParticleSystem';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    catalog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  const handleBookNow = () => {
    scrollToSection('contact');
  };

  const handleBookService = (service: string) => {
    setSelectedService(service);
    scrollToSection('contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [key, ref] of sections) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
{isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            // WAS: #bg-card-light 
            className="fixed inset-0 z-50 bg-background flex items-center justify-center" 
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                // WAS: border-gold/30, border-t-gold
                className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mx-auto mb-6" 
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                // WAS: text-primary-red
                className="font-serif text-4xl text-primary" 
              >
                Welcome
              </motion.h1>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <ParticleSystem />

      <div className="#bg-card-light">
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

        <div ref={sectionRefs.home}>
          <Hero onBookNow={handleBookNow} />
        </div>

        <div ref={sectionRefs.about}>
          <About />
        </div>

        <div ref={sectionRefs.team}>
          <Team />
        </div>

        <div ref={sectionRefs.services}>
          <Services />
        </div>

        <div ref={sectionRefs.catalog}>
          <Catalog onBookService={handleBookService} />
        </div>

        <div ref={sectionRefs.contact}>
          <Contact selectedService={selectedService} />
        </div>

        <footer className="#bg-card-light border-t border-gold/20 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-serif text-primary-red text-xl mb-2">Luxury Hospitality Concierge</p>
            <p className="font-sans text-text-dark/60 text-sm">
              Excellence in Service Since 2010
            </p>
            <div className="mt-6 flex justify-center gap-8">
              <a href="#" className="font-sans text-text-dark/70 hover:text-primary-red transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-text-dark/70 hover:text-primary-red transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="font-sans text-text-dark/70 hover:text-primary-red transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
