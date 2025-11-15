import { motion } from 'framer-motion';
import { CheckCircle, MapPin, DollarSign, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CatalogProps {
  onBookService: (position: string) => void;
}

const Catalog = ({ onBookService }: CatalogProps) => {
  const { t } = useTranslation();
  const positions = [
    {
      title: t('catalog.positions.0.title'),
      location: t('catalog.positions.0.location'),
      type: t('catalog.positions.0.type'),
      salary: t('catalog.positions.0.salary'),
      description: t('catalog.positions.0.description'),
      featured: true,
    },
    {
      title: t('catalog.positions.1.title'),
      location: t('catalog.positions.1.location'),
      type: t('catalog.positions.1.type'),
      salary: t('catalog.positions.1.salary'),
      description: t('catalog.positions.1.description'),
      featured: true,
    },
    {
      title: t('catalog.positions.2.title'),
      location: t('catalog.positions.2.location'),
      type: t('catalog.positions.2.type'),
      salary: t('catalog.positions.2.salary'),
      description: t('catalog.positions.2.description'),
      featured: false,
    },
    {
      title: t('catalog.positions.3.title'),
      location: t('catalog.positions.3.location'),
      type: t('catalog.positions.3.type'),
      salary: t('catalog.positions.3.salary'),
      description: t('catalog.positions.3.description'),
      featured: false,
    },
    {
      title: t('catalog.positions.4.title'),
      location: t('catalog.positions.4.location'),
      type: t('catalog.positions.4.type'),
      salary: t('catalog.positions.4.salary'),
      description: t('catalog.positions.4.description'),
      featured: false,
    },
    {
      title: t('catalog.positions.5.title'),
      location: t('catalog.positions.5.location'),
      type: t('catalog.positions.5.type'),
      salary: t('catalog.positions.5.salary'),
      description: t('catalog.positions.5.description'),
      featured: false,
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
    <section id="catalog" className="relative py-24 md:py-32 bg-off-white">
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
            <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">
              {t('catalog.overline')}
            </span>
            <div className="w-8 h-px bg-forest" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            {t('catalog.title')}
          </h2>
          <p className="text-lg text-stone font-sans">
            {t('catalog.subtitle')}
          </p>
        </motion.div>

        {/* Featured Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-navy mb-8">{t('catalog.featuredTitle')}</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {positions
              .filter((p) => p.featured)
              .map((position, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-off-white-warm to-silver/10 border-2 border-forest/30 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  {/* Featured badge */}
                  <div className="absolute -top-3 -right-3 bg-forest text-off-white px-4 py-1 rounded-full text-xs font-sans font-semibold">
                    {t('catalog.featuredBadge')}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-navy mb-2">{position.title}</h3>
                      <p className="text-stone font-sans leading-relaxed">{position.description}</p>
                    </div>

                    {/* Position details grid */}
                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-silver">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs text-stone font-sans uppercase tracking-widest mb-1">{t('catalog.labels.location')}</p>
                          <p className="text-sm font-sans font-semibold text-navy">{position.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-4 h-4 text-forest flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-xs text-stone font-sans uppercase tracking-widest mb-1">{t('catalog.labels.salary')}</p>
                          <p className="text-sm font-sans font-semibold text-navy">{position.salary}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onBookService(position.title)}
                      className="w-full mt-4 px-6 py-3 bg-forest hover:bg-forest-dark text-off-white font-sans font-semibold rounded transition-colors"
                    >
                      {t('catalog.learnMoreButton')}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* All Positions */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-navy mb-8">{t('catalog.allPositionsTitle')}</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-off-white-warm border border-silver rounded-lg p-6 hover:border-forest/50 hover:shadow-md transition-all cursor-pointer"
                onClick={() => onBookService(position.title)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-serif font-semibold text-navy mb-2 group-hover:text-forest transition-colors">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-stone font-sans">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-forest" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} className="text-forest" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={16} className="text-forest" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-forest font-sans font-semibold"
                  >
                    {t('catalog.viewDetailsButton')}
                    <CheckCircle size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-off-white-warm border border-silver rounded-lg p-12"
        >
          <h3 className="text-3xl font-serif font-semibold text-navy mb-4">
            {t('catalog.cta.title')}
          </h3>
          <p className="text-lg text-stone font-sans mb-8 max-w-2xl mx-auto">
            {t('catalog.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onBookService('consultation')}
            className="px-8 py-4 bg-navy hover:bg-navy-dark text-off-white font-sans font-semibold rounded transition-colors"
          >
            {t('catalog.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;
