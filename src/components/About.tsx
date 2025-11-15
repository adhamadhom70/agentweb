import { motion } from 'framer-motion';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: CheckCircle,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
    },
    {
      icon: Users,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
    },
    {
      icon: Zap,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Target,
      title: t('about.values.precision.title'),
      description: t('about.values.precision.description'),
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
              <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">{t('about.overline')}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy leading-tight">
              {t('about.title')}
            </h2>

            <p className="text-lg text-stone font-sans leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-lg text-stone font-sans leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="flex gap-4 pt-4">
              <div>
                <p className="text-3xl font-serif font-bold text-navy">500+</p>
                <p className="text-sm text-stone font-sans">{t('about.stats.placements')}</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">98%</p>
                <p className="text-sm text-stone font-sans">{t('about.stats.satisfaction')}</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-navy">10</p>
                <p className="text-sm text-stone font-sans">{t('about.stats.experience')}</p>
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
                <p className="text-xl font-serif font-semibold text-navy">{t('about.badge.title')}</p>
                <p className="text-sm text-stone font-sans">{t('about.badge.subtitle')}</p>
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
          <h3 className="text-3xl font-serif font-bold text-navy mb-12 text-center">{t('about.coreValuesTitle')}</h3>
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
          <h3 className="text-3xl font-serif font-bold text-navy mb-12 text-center">{t('about.processTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: t('about.process.step1.title'),
                description: t('about.process.step1.description'),
              },
              {
                number: '02',
                title: t('about.process.step2.title'),
                description: t('about.process.step2.description'),
              },
              {
                number: '03',
                title: t('about.process.step3.title'),
                description: t('about.process.step3.description'),
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
