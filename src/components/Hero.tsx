import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import ScrollIndicator from './ScrollIndicator';

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ y: scrollY * 0.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light">
          <div className="absolute inset-0 bg-[url('/agency.png')] bg-cover bg-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

          {/* Subtle texture overlay for fabric effect */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="fabricTexture">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="#1a1a1a" filter="url(#fabricTexture)" />
            </svg>
          </div>

          {/* Subtle shadow gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/40" />
        </div>
      </motion.div>

      {/* Animated shine effects on gold accents */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5,
          }}
          className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-gold/15 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-7xl md:text-9xl text-primary-red mb-2 tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(212, 175, 55, 0.4), 0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            Excellence
          </motion.h1>

          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-serif text-4xl md:text-6xl text-text-dark/90 mb-4 tracking-wide"
          >
            In Service
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          {/* Typewriter tagline with premium styling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-sans text-lg md:text-xl text-text-dark/70 max-w-2xl mx-auto leading-relaxed h-8 md:h-12"
          >
            <TypewriterText
              text="Where refined hospitality meets unparalleled dedication."
              delay={1500}
            />
          </motion.p>
        </motion.div>

        {/* Enhanced Book Button with multiple glow effects */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          {/* Multiple glow layers */}
          <motion.div
            className="absolute inset-0 bg-gold blur-3xl opacity-30 rounded-lg"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 bg-gold blur-xl opacity-20 rounded-lg"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Animated shine on button */}
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ opacity: 0.2 }}
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookNow}
            className="relative px-12 py-5 bg-gradient-to-r from-gold to-gold-dark text-background-light font-serif text-xl tracking-wider rounded-lg shadow-2xl border border-gold-light/50"
            style={{
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            TAP HERE TO BOOK
          </motion.button>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
