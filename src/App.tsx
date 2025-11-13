import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';

function App() {
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
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    scrollToSection('contact');
  };

  const handleBookService = (service: string) => {
    setSelectedService(service);
    scrollToSection('contact');
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-off-white flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 border-4 border-silver border-t-forest rounded-full mx-auto mb-6"
              />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl text-navy"
              >
                REFINED
              </motion.h1>
              <p className="text-sm text-stone font-sans mt-2">Recruitment</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-off-white">
        <Navigation scrollToSection={scrollToSection} />

        <div ref={sectionRefs.home}>
          <Hero onBookNow={handleBookNow} />
        </div>

        <div ref={sectionRefs.about}>
          <About />
        </div>

        <div ref={sectionRefs.services}>
          <Services />
        </div>

        <div ref={sectionRefs.team}>
          <Team />
        </div>

        <div ref={sectionRefs.catalog}>
          <Catalog onBookService={handleBookService} />
        </div>

        <div ref={sectionRefs.contact}>
          <Contact selectedService={selectedService} />
        </div>

        <footer className="bg-navy text-off-white py-16 border-t border-silver">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-silver/20">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
                    <span className="text-off-white font-serif font-bold">R</span>
                  </div>
                  <span className="font-serif font-semibold">REFINED</span>
                </div>
                <p className="text-off-white/70 font-sans text-sm leading-relaxed">
                  Excellence in hospitality recruitment since 2014.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm font-sans text-off-white/70">
                  <li><a href="#about" className="hover:text-off-white transition-colors">About</a></li>
                  <li><a href="#services" className="hover:text-off-white transition-colors">Services</a></li>
                  <li><a href="#catalog" className="hover:text-off-white transition-colors">Opportunities</a></li>
                  <li><a href="#contact" className="hover:text-off-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-semibold mb-4">Contact</h4>
                <p className="text-sm font-sans text-off-white/70">hello@refined-recruitment.com</p>
                <p className="text-sm font-sans text-off-white/70">+1 (800) 555-0123</p>
              </div>
            </div>
            <div className="text-center text-sm font-sans text-off-white/50">
              <p>© 2024 REFINED Recruitment. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
