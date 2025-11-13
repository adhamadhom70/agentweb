import { motion } from 'framer-motion';
import { CheckCircle, Users, Briefcase, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Executive Recruitment',
      description: 'We identify and place exceptional leadership talent in luxury hospitality properties, resorts, and F&B establishments.',
      metrics: '150+ placements',
    },
    {
      icon: Briefcase,
      title: 'Specialized Staffing',
      description: 'From sous chefs to sommelier staff, we provide vetted professionals for specialized hospitality roles.',
      metrics: '95%+ retention',
    },
    {
      icon: Award,
      title: 'Talent Vetting',
      description: 'Every candidate undergoes rigorous background checks, skills assessment, and cultural fit evaluation.',
      metrics: '500+ interviews/year',
    },
    {
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'We maintain relationships with both employers and employees, ensuring long-term placement success.',
      metrics: '10+ years average',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-forest" />
            <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">Services</span>
            <div className="w-8 h-px bg-forest" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Expertise Across Every Role
          </h2>
          <p className="text-lg text-stone font-sans">
            Comprehensive recruitment solutions designed for luxury hospitality operators seeking elite talent.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-off-white-warm border border-silver rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-forest group-hover:w-full transition-all duration-500 rounded-t-lg" />

                {/* Icon */}
                <div className="w-16 h-16 bg-forest/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-forest/15 transition-colors">
                  <Icon className="w-8 h-8 text-forest" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-stone font-sans leading-relaxed mb-6">{service.description}</p>

                {/* Metric */}
                <div className="flex items-center gap-2 pt-6 border-t border-silver">
                  <CheckCircle className="w-4 h-4 text-forest" />
                  <span className="text-sm font-sans font-semibold text-navy">{service.metrics}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-silver"
        >
          {[
            { number: '500+', label: 'Successful Placements' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '85%', label: 'Retained After 2yrs' },
            { number: '24/7', label: 'Dedicated Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">{stat.number}</p>
              <p className="text-sm text-stone font-sans">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
