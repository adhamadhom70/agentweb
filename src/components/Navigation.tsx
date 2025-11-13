import { motion } from 'framer-motion';
import { Home, Utensils } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'team', label: 'THE AGENTS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'catalog', label: 'SERVICES TO BOOK' },
    { id: 'contact', label: 'INQUIRY' },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-gold/20 to-gold/10 backdrop-blur-md border border-gold/30 rounded-lg px-4 py-2 cursor-pointer"
        >
          <span className="text-primary-red font-serif text-sm tracking-wider">AGENT PROFILE</span>
        </motion.div>
      </motion.div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="#bg-card-light/90 backdrop-blur-md border border-gold/20 rounded-lg px-6 py-3 shadow-2xl">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-sans text-sm tracking-wider transition-colors ${
                  activeSection === item.id ? 'text-primary-red' : 'text-text-dark/70 hover:text-primary-red'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate('home')}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark border-2 border-gold-light shadow-2xl flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-0.5">
          <Home className="w-5 h-5 text-background-light" />
          <Utensils className="w-4 h-4 text-background-light" />
        </div>
      </motion.button>
    </>
  );
};

export default Navigation;
