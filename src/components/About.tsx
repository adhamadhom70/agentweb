import { motion } from 'framer-motion';
import { Award, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising standards in every service we deliver',
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'Passionate commitment to exceeding expectations',
    },
    {
      icon: Shield,
      title: 'Discretion',
      description: 'Your privacy and trust are our highest priority',
    },
    {
      icon: Star,
      title: 'Refinement',
      description: 'Sophisticated attention to the finest details',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-charcoal-dark to-charcoal py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-6xl md:text-7xl text-primary-red mb-6">Our Ethos</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-sans text-xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Founded on principles of impeccable service and unwavering professionalism,
            we are a collective of distinguished hospitality agents dedicated to crafting
            extraordinary experiences for our clientele.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative #bg-card-light-light/50 backdrop-blur-md border border-gold/20 rounded-lg p-8 h-full">
                <value.icon className="w-12 h-12 text-primary-red mb-4" />
                <h3 className="font-serif text-2xl text-text-dark mb-3">{value.title}</h3>
                <p className="font-sans text-text-dark/60 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-md border border-gold/30 rounded-2xl p-12 text-center"
        >
          <p className="font-serif text-3xl text-primary-red mb-6 italic">
            "Service is not just what we do—it is who we are."
          </p>
          <p className="font-sans text-text-dark/70 text-lg">
            Every interaction is an opportunity to demonstrate the artistry of refined hospitality
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
