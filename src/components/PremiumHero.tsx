import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Award } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export default function PremiumHero({ onBookNow }: HeroProps) {
  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "98% Client Satisfaction" },
    { icon: <Award className="w-5 h-5" />, text: "Industry Leading Service" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 Availability" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-forest/10 to-navy/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-navy/10 to-forest/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 border border-forest/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-forest">Premium Recruitment Services</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight"
            >
              Excellence in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-forest">Talent</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-3 bg-forest/20 -z-0"
                />
              </span>
              {' '}Acquisition
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Connecting exceptional talent with world-class organizations. 
              Your trusted partner in building high-performing teams.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-silver rounded-full shadow-sm"
                >
                  <span className="text-forest">{feature.icon}</span>
                  <span className="text-sm font-medium text-navy">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBookNow}
                className="group px-8 py-4 bg-forest hover:bg-forest/90 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white hover:bg-gray-50 text-navy font-semibold rounded-lg transition-all border-2 border-navy/10 hover:border-forest/30 flex items-center justify-center gap-2"
              >
                <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center group-hover:bg-forest/20 transition-colors">
                  <Play className="w-4 h-4 text-forest" fill="currentColor" />
                </div>
                Watch Video
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-silver"
            >
              <p className="text-sm text-stone mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start items-center opacity-60">
                {['Fortune 500', 'Tech Giants', 'Startups', 'Global Brands'].map((company, i) => (
                  <div key={i} className="font-semibold text-navy text-sm">
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-silver"
              >
                <div className="space-y-6">
                  {/* Stat Cards */}
                  {[
                    { label: 'Successful Placements', value: '500+', color: 'forest' },
                    { label: 'Client Satisfaction', value: '98%', color: 'navy' },
                    { label: 'Years Experience', value: '15+', color: 'forest' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-silver hover:shadow-md transition-shadow"
                    >
                      <span className="text-stone font-medium">{stat.label}</span>
                      <span className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-forest text-white px-6 py-3 rounded-full shadow-xl border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">★ 4.9</div>
                  <div className="text-xs opacity-90">Rated</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-navy/5 rounded-full blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-forest/5 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-stone">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-stone/30 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-forest rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}