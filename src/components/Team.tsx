import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Team = () => {
  const agents = [
    { name: 'Alexander Sterling', role: 'Chief Concierge', specialty: 'Fine Dining & Events' },
    { name: 'Victoria Ashford', role: 'Senior Agent', specialty: 'Luxury Accommodations' },
    { name: 'Sebastian Moore', role: 'Hospitality Specialist', specialty: 'Private Catering' },
    { name: 'Eleanor Cross', role: 'Guest Relations', specialty: 'Bespoke Experiences' },
    { name: 'Harrison Webb', role: 'Service Director', specialty: 'Corporate Events' },
    { name: 'Penelope Grant', role: 'Lifestyle Curator', specialty: 'VIP Services' },
    { name: 'Theodore Blake', role: 'Culinary Liaison', specialty: 'Gourmet Catering' },
    { name: 'Arabella Knight', role: 'Concierge Agent', specialty: 'Personal Service' },
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
          <h2 className="font-serif text-6xl md:text-7xl text-primary-red mb-6">The Agents</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-sans text-xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Our distinguished team of hospitality professionals brings decades of combined
            experience in delivering exceptional service to the world's most discerning clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative #bg-card-light-light/50 backdrop-blur-md border border-gold/20 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/30">
                    <User className="w-16 h-16 text-primary-red" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-text-dark mb-1">{agent.name}</h3>
                  <p className="font-sans text-primary-red text-sm mb-2">{agent.role}</p>
                  <p className="font-sans text-text-dark/60 text-sm">{agent.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
