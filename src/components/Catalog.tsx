import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CatalogProps {
  onBookService: (service: string) => void;
}

const Catalog = ({ onBookService }: CatalogProps) => {
  const packages = [
    {
      name: 'Intimate Gathering',
      price: 'From $2,500',
      description: 'Perfect for private celebrations up to 20 guests',
      features: [
        'Personalized menu consultation',
        '5-course tasting menu',
        'Premium beverage service',
        'Professional wait staff',
        'Table setting & décor',
        'Post-event cleanup',
      ],
      popular: false,
    },
    {
      name: 'Grand Celebration',
      price: 'From $8,500',
      description: 'Exceptional experience for 50-100 guests',
      features: [
        'Michelin-starred chef collaboration',
        'Custom multi-course menu',
        'Sommelier & wine pairing',
        'Full service team',
        'Luxury décor & styling',
        'Entertainment coordination',
        'Photography service',
        'Concierge on-site',
      ],
      popular: true,
    },
    {
      name: 'Corporate Excellence',
      price: 'Custom Quote',
      description: 'Bespoke solutions for corporate events',
      features: [
        'Unlimited guest capacity',
        'Venue selection assistance',
        'Complete event management',
        'Audio-visual production',
        'Branding & customization',
        'Multi-day coordination',
        'VIP guest services',
        'Dedicated event director',
      ],
      popular: false,
    },
  ];

  const accommodations = [
    {
      name: 'Boutique Stay',
      price: 'From $350/night',
      features: [
        'Luxury suite accommodation',
        'Daily concierge service',
        'Gourmet breakfast',
        'Premium amenities',
      ],
    },
    {
      name: 'Extended Experience',
      price: 'From $2,200/week',
      features: [
        'Private residence accommodation',
        '24/7 butler service',
        'Personal chef available',
        'Chauffeur service',
        'Curated local experiences',
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-charcoal to-charcoal-dark py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-6xl md:text-7xl text-primary-red mb-6">Services to Book</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-sans text-xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Select from our curated collection of hospitality experiences
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="font-serif text-4xl text-text-dark text-center mb-12">Catering Packages</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gold text-background-light px-4 py-1 rounded-full font-sans text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className={`relative backdrop-blur-md rounded-lg p-8 h-full ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold'
                      : 'bg-charcoal-light/50 border border-gold/20'
                  }`}
                >
                  <h4 className="font-serif text-3xl text-text-dark mb-2">{pkg.name}</h4>
                  <p className="font-serif text-2xl text-primary-red mb-4">{pkg.price}</p>
                  <p className="font-sans text-text-dark/70 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-text-dark/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onBookService(pkg.name)}
                    className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-background-light font-serif tracking-wider rounded-lg"
                  >
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-4xl text-text-dark text-center mb-12">
            Accommodation Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {accommodations.map((acc, index) => (
              <motion.div
                key={acc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-charcoal-light/50 backdrop-blur-md border border-gold/20 rounded-lg p-8">
                  <h4 className="font-serif text-2xl text-text-dark mb-2">{acc.name}</h4>
                  <p className="font-serif text-xl text-primary-red mb-6">{acc.price}</p>
                  <ul className="space-y-3 mb-8">
                    {acc.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-red mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-text-dark/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onBookService(acc.name)}
                    className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-background-light font-serif tracking-wider rounded-lg"
                  >
                    INQUIRE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
