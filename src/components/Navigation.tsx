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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 z-50"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-forest rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-off-white font-serif font-bold text-base sm:text-lg">R</span>
            </div>
            <div className="hidden xs:block">
              <p className="font-serif font-semibold text-navy text-xs sm:text-sm">REFINED</p>
              <p className="font-sans text-[10px] sm:text-xs text-stone">Recruitment</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ color: '#2d5a3d' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 xl:px-4 py-2 text-sm font-sans transition-colors ${
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
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language switcher for mobile (icon only) */}
            <div className="scale-90 sm:scale-100">
              <LanguageSwitcher />
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy hover:bg-silver/20 rounded transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-navy/20 backdrop-blur-sm lg:hidden"
                onClick={() => setIsOpen(false)}
                style={{ top: '64px' }} // Below navbar
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-16 sm:top-20 bottom-0 w-full max-w-sm bg-off-white border-l border-silver shadow-2xl lg:hidden overflow-y-auto"
              >
                <div className="flex flex-col p-4 sm:p-6 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full px-4 sm:px-5 py-4 text-left text-base sm:text-lg font-sans transition-all rounded-lg touch-manipulation ${
                        activeSection === item.id
                          ? 'bg-forest/10 text-forest font-semibold shadow-sm'
                          : 'text-navy hover:bg-silver/30 active:bg-silver/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-forest rounded-full"
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-off-white via-off-white to-transparent border-t border-silver">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleNavClick('contact');
                    }}
                    className="w-full px-6 py-4 bg-forest hover:bg-forest/90 active:bg-forest/80 text-white font-semibold rounded-lg transition-all shadow-lg text-base sm:text-lg touch-manipulation"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;