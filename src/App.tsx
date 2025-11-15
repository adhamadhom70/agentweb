import SEO from './components/SEO';
import StructuredData from './components/StructuredData';
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'; // Added lazy, Suspense
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppContactButton from './components/WhatsAppContactButton';
import ReactGA from 'react-ga4';

import Navigation from './components/Navigation';
import ParticleSystem from './components/ParticleSystem';

import About from './components/About';
import Team from './components/Team';
// import Testimonials from './components/Testimonials'; // REMOVED: Replaced by lazy import
import Services from './components/Services';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import PremiumHero from './components/PremiumHero';
import ProfessionalStatsBar from './components/ProfessionalStatsBar';
// import TrustBadgesSection from './components/TrustBadgesSection'; // REMOVED: Replaced by lazy import
import ProfessionalFooter from './components/ProfessionalFooter';

import PullToRefresh from 'react-simple-pull-to-refresh';

 

// --- START: NEW LAZY IMPORTS ---
const LazyTestimonials = lazy(() => import('./components/Testimonials'));
const LazyTrustBadgesSection = lazy(() => import('./components/TrustBadgesSection'));

// Simple placeholder for the Loading Spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);
// --- END: NEW LAZY IMPORTS ---


function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    team: useRef<HTMLDivElement | null>(null),
    testimonials: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    catalog: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    try {
      ReactGA.initialize('YOUR-GA4-MEASUREMENT-ID');
      ReactGA.send('pageview');
    } catch {
      // ignore in dev if GA not configured
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };


  const handleBookNow = () => scrollToSection('contact');

  const handleBookService = (service: string) => {
    setSelectedService(service);
    scrollToSection('contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      const entries = Object.entries(sectionRefs) as [string, React.RefObject<HTMLDivElement>][];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [key, ref] of entries) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO />
      <StructuredData />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mx-auto mb-6"
              />
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl text-primary"
              >
                Welcome
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ParticleSystem />

  <PullToRefresh onRefresh={async () => window.location.reload()}>
      <div className="bg-card-light">
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

        <div ref={sectionRefs.home}>
          <PremiumHero onBookNow={handleBookNow} />
        </div>

        <div ref={sectionRefs.about}>
          <About />
        </div>

        <div ref={sectionRefs.team}>
          <Team />
        </div>

        {/* --- START: Testimonials section with Suspense --- */}
        <div ref={sectionRefs.testimonials}>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyTestimonials />
          </Suspense>
        </div>
        {/* --- END: Testimonials section with Suspense --- */}

        <ProfessionalStatsBar />

        {/* --- START: TrustBadgesSection section with Suspense --- */}
        <Suspense fallback={<LoadingSpinner />}>
          <LazyTrustBadgesSection />
        </Suspense>
        {/* --- END: TrustBadgesSection section with Suspense --- */}


        <div ref={sectionRefs.services}>
          <Services />
        </div>

        <div ref={sectionRefs.catalog}>
          <Catalog onBookService={handleBookService} />
        </div>

        <div ref={sectionRefs.contact}>
          <Contact selectedService={selectedService} />
        </div>


        <ProfessionalFooter />

        <WhatsAppContactButton
          phoneNumber="1234567890"
          message="Hello! I'm interested in your luxury concierge services."
          position="bottom-right"
        />
      </div>

      
      </PullToRefresh>
      
    </>
  );
}

export default App;