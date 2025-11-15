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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 mb-4 bg-gradient-to-br from-forest to-forest/80 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
      >
        {icon}
      </motion.div>

      {/* Number */}
      <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
        <CountUp value={value} suffix={suffix} prefix={prefix} duration={duration} />
      </div>

      {/* Label */}
      <p className="text-stone font-medium text-sm md:text-base">
        {label}
      </p>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-3 h-1 bg-gradient-to-r from-transparent via-forest to-transparent rounded-full"
      />
    </motion.div>
  );
}

export default function ProfessionalStatsBar() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 500,
      suffix: '+',
      label: 'Successful Placements',
      duration: 2.5
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: 150,
      suffix: '+',
      label: 'Partner Companies',
      duration: 2
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      duration: 2.5
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 15,
      suffix: '+',
      label: 'Years of Excellence',
      duration: 1.5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 border border-forest/20 rounded-full mb-4"
          >
            <Award className="w-4 h-4 text-forest" />
            <span className="text-sm font-semibold text-forest">Proven Track Record</span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Results That Speak for <span className="text-forest">Themselves</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Over a decade of connecting exceptional talent with leading organizations worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-forest to-navy rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Your Team?
              </h3>
              <p className="text-white/80">
                Join hundreds of satisfied clients who trust us with their talent needs
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-forest font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg whitespace-nowrap"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}