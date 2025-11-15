import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  
  const team = [
    { name: t('team.members.0.name'), title: t('team.members.0.title'), specialty: t('team.members.0.specialty') },
    { name: t('team.members.1.name'), title: t('team.members.1.title'), specialty: t('team.members.1.specialty') },
    { name: t('team.members.2.name'), title: t('team.members.2.title'), specialty: t('team.members.2.specialty') },
    { name: t('team.members.3.name'), title: t('team.members.3.title'), specialty: t('team.members.3.specialty') },
    { name: t('team.members.4.name'), title: t('team.members.4.title'), specialty: t('team.members.4.specialty') },
    { name: t('team.members.5.name'), title: t('team.members.5.title'), specialty: t('team.members.5.specialty') },
    { name: t('team.members.6.name'), title: t('team.members.6.title'), specialty: t('team.members.6.specialty') },
    { name: t('team.members.7.name'), title: t('team.members.7.title'), specialty: t('team.members.7.specialty') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="team" className="relative py-24 md:py-32 bg-off-white">
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
            <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">{t('team.overline')}</span>
            <div className="w-8 h-px bg-forest" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            {t('team.title')}
          </h2>
          <p className="text-lg text-stone font-sans">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-off-white-warm border border-silver rounded-lg overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-forest/50 to-transparent" />

              {/* Avatar placeholder */}
              <div className="aspect-square bg-gradient-to-br from-silver/20 to-stone/10 flex items-center justify-center overflow-hidden relative">
                <motion.div
                  className="w-24 h-24 rounded-full bg-forest/10 border-2 border-forest/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-forest/30 to-forest/5 rounded-full" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-sm font-sans font-semibold text-forest mb-3">{member.title}</p>
                <div className="flex items-center gap-2 text-xs text-stone font-sans pt-3 border-t border-silver">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                  {member.specialty}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto bg-off-white-warm border border-silver rounded-lg p-8"
        >
          <p className="text-lg text-navy font-serif leading-relaxed">
            {t('team.quote')}
          </p>
          <p className="text-sm text-stone font-sans mt-4">{t('team.quoteAuthor')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
