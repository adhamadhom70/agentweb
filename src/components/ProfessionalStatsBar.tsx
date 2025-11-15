import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function CountUp({ value, duration = 2, suffix = '', prefix = '' }: { value: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

function StatItem({ icon, value, suffix, prefix, label, duration }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon - Responsive sizing */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4 bg-gradient-to-br from-forest to-forest/80 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all touch-manipulation"
      >
        <div className="scale-75 sm:scale-90 lg:scale-100">
          {icon}
        </div>
      </motion.div>

      {/* Number - Responsive sizing */}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-1 sm:mb-2">
        <CountUp value={value} suffix={suffix} prefix={prefix} duration={duration} />
      </div>

      {/* Label - Responsive sizing */}
      <p className="text-stone font-medium text-xs sm:text-sm lg:text-base px-2">
        {label}
      </p>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-2 sm:mt-3 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-forest to-transparent rounded-full max-w-[80px] sm:max-w-full"
      />
    </motion.div>
  );
}

export default function MobileOptimizedStatsBar() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      value: 500,
      suffix: '+',
      label: 'Successful Placements',
      duration: 2.5
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      value: 150,
      suffix: '+',
      label: 'Partner Companies',
      duration: 2
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      duration: 2.5
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
      duration: 1.5
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-forest/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-forest/10 border border-forest/20 rounded-full mb-3 sm:mb-4"
          >
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-forest" />
            <span className="text-xs sm:text-sm font-semibold text-forest">Proven Track Record</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4 px-4">
            Results That Speak for <span className="text-forest">Themselves</span>
          </h2>
          <p className="text-base sm:text-lg text-stone max-w-2xl mx-auto px-4">
            Over a decade of connecting exceptional talent with leading organizations worldwide
          </p>
        </motion.div>

        {/* Stats Grid - Responsive layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Bottom CTA Strip - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 sm:p-8 bg-gradient-to-r from-forest to-navy rounded-xl sm:rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to Transform Your Team?
              </h3>
              <p className="text-sm sm:text-base text-white/80">
                Join hundreds of satisfied clients who trust us with their talent needs
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-forest text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all shadow-lg whitespace-nowrap touch-manipulation"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}