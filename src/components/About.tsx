import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Every placement reflects our commitment to honesty and transparency with candidates and employers alike.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We view our relationships as long-term partnerships dedicated to mutual success and growth.',
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'Rigorous vetting and continuous development ensure we place only the most capable professionals.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'We match talent with opportunity through detailed analysis and deep industry knowledge.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-forest" />
              <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">About Us</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy leading-tight">
              Redefining Hospitality Recruitment
            </h2>

            <p className="text-lg text-stone font-sans leading-relaxed">
              Since 2014, REFINED Recruitment has been connecting exceptional hospitality professionals with the world's most prestigious establishments. We understand that great hospitality isn't just about service—it's about finding the right people who embody your organization's values and culture.
            </p>

            <p className="text-lg text-stone font-sans leading-relaxed">
              Our rigorous vetting process ensures that every candidate placed has been thoroughly assessed for technical skill, cultural alignment, and commitment to excellence. We don't just fill positions; we build teams that deliver transformative guest experiences.
            </p>

            <div className="flex gap-4 pt-4">
              <div>
                <p className="text-3xl font-serif font-bold text-navy">500+</p>
                <p className="text-sm text-stone font-sans">Placements Made</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">98%</p>
                <p className="text-sm text-stone font-sans">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">10</p>
                <p className="text-sm text-stone font-sans">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-forest/10 to-silver/20 rounded-lg border border-silver p-12 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-forest/20 rounded-lg"
              />
              <div className="relative z-10 text-center space-y-4">
                <div className="text-6xl font-serif font-bold text-forest">✓</div>
                <p className="text-xl font-serif font-semibold text-navy">Vetted. Trusted. Placed.</p>
                <p className="text-sm text-stone font-sans">Excellence in every placement</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 pb-20 border-b border-silver"
        >
          <h3 className="text-3xl font-serif font-bold text-navy mb-12 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-off-white-warm border border-silver rounded-lg p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-forest/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-forest" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-navy mb-3">{value.title}</h4>
                  <p className="text-sm text-stone font-sans leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Section */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-navy mb-12 text-center">Our Placement Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Candidate Assessment',
                description: 'Thorough interviews, background checks, and skills testing to ensure quality.',
              },
              {
                number: '02',
                title: 'Employer Alignment',
                description: 'We match your needs with candidates who fit your culture and requirements.',
              },
              {
                number: '03',
                title: 'Ongoing Support',
                description: 'Continued partnership to ensure long-term success and satisfaction.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-off-white-warm border border-silver rounded-lg p-8">
                  <div className="text-5xl font-serif font-bold text-forest/20 mb-4">{step.number}</div>
                  <h4 className="text-xl font-serif font-semibold text-navy mb-3">{step.title}</h4>
                  <p className="text-stone font-sans">{step.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-forest transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
