import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Talent', id: 'team' },
    { label: 'Placements', id: 'catalog' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-off-white/95 backdrop-blur-md border-b border-silver">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
              <span className="text-off-white font-serif font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-navy text-sm">REFINED</p>
              <p className="font-sans text-xs text-stone">Recruitment</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ color: '#2d5a3d' }}
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 text-sm font-sans text-navy hover:text-forest transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy hover:bg-silver/20 rounded transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-silver bg-off-white"
            >
              <div className="flex flex-col py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 8 }}
                    onClick={() => handleNavClick(item.id)}
                    className="px-4 py-3 text-left text-sm font-sans text-navy hover:bg-silver/20 transition-colors rounded"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
