import { motion } from 'framer-motion';
import { ChefHat, Home, Sparkles, Wine, Music, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Premium Catering',
      icon: ChefHat,
      items: [
        'Michelin-Starred Chef Collaborations',
        'Bespoke Menu Curation',
        'Wine Pairing & Sommelier Service',
        'Private Dining Experiences',
        'Corporate Event Catering',
        'Seasonal Tasting Menus',
      ],
    },
    {
      category: 'Luxury Hostel Services',
      icon: Home,
      items: [
        'Boutique Accommodation Management',
        'Personalized Guest Experiences',
        '24/7 Concierge Assistance',
        'Premium Amenities Coordination',
        'Local Experience Curation',
        'VIP Airport Transfers',
      ],
    },
    {
      category: 'Event Management',
      icon: Sparkles,
      items: [
        'Exclusive Venue Selection',
        'Complete Event Orchestration',
        'Luxury Décor & Styling',
        'Entertainment Booking',
        'Photography & Videography',
        'Post-Event Services',
      ],
    },
  ];

  const additionalServices = [
    { icon: Wine, text: 'Private Tastings' },
    { icon: Music, text: 'Live Entertainment' },
    { icon: Users, text: 'Group Experiences' },
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
          <h2 className="font-serif text-6xl md:text-7xl text-primary-red mb-6">Our Services</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-sans text-xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive hospitality solutions tailored to your exacting standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative #bg-card-light-light/50 backdrop-blur-md border border-gold/20 rounded-lg p-8 h-full">
                <service.icon className="w-12 h-12 text-primary-red mb-6" />
                <h3 className="font-serif text-3xl text-text-dark mb-6">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-primary-red mr-3 mt-1">•</span>
                      <span className="font-sans text-text-dark/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.text}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-md border border-gold/30 rounded-lg px-8 py-4 flex items-center gap-3"
            >
              <service.icon className="w-6 h-6 text-primary-red" />
              <span className="font-sans text-text-dark">{service.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
