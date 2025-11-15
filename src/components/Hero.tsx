import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen w-full bg-off-white pt-24 pb-12 md:pb-20">
      {/* Decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-dark to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-forest" />
              <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">
                {t('hero.overline')}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold text-navy leading-tight"
            >
              {t('hero.title')}
              <span className="text-forest"> {t('hero.titleHighlight')}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-stone leading-relaxed max-w-md font-sans"
            >
              {t('hero.description')}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 py-8 border-t border-b border-silver"
            >
              <div>
                <p className="text-3xl font-serif font-bold text-navy">500+</p>
                <p className="text-sm text-stone font-sans">{t('hero.stats.placements')}</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">98%</p>
                <p className="text-sm text-stone font-sans">{t('hero.stats.retention')}</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">10yrs</p>
                <p className="text-sm text-stone font-sans">{t('hero.stats.experience')}</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookNow}
              className="inline-flex items-center gap-3 px-8 py-4 bg-forest hover:bg-forest-dark text-off-white font-sans font-semibold rounded transition-colors w-fit"
            >
              {t('hero.cta')}
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-screen flex items-center justify-center"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background circles */}
              <motion.div
                className="absolute w-96 h-96 rounded-full border border-silver opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-64 h-64 rounded-full border border-silver opacity-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central card */}
              <motion.div
                className="relative z-10 bg-off-white-warm border border-silver rounded-lg p-8 shadow-lg max-w-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-forest rounded-full" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-navy">{t('hero.testimonial.name')}</p>
                      <p className="text-sm text-stone">{t('hero.testimonial.role')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-navy leading-relaxed">
                    {t('hero.testimonial.quote')}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-forest">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-dark to-transparent" />
    </section>
  );
};

export default Hero;
