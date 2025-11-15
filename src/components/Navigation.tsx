import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.team'), id: 'team' },
    { label: t('nav.catalog'), id: 'catalog' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
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
                className={`px-4 py-2 text-sm font-sans transition-colors ${
                  activeSection === item.id
                    ? 'text-forest font-semibold'
                    : 'text-navy hover:text-forest'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Language Switcher - Desktop */}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
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
                    className={`px-4 py-3 text-left text-sm font-sans transition-colors rounded ${
                      activeSection === item.id
                        ? 'bg-forest/10 text-forest font-semibold'
                        : 'text-navy hover:bg-silver/20'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Language Switcher - Mobile */}
                <div className="px-4 pt-2 pb-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;