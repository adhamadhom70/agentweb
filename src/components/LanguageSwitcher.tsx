import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

const languages: Language[] = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr'
  },
  { 
    code: 'ar', 
    name: 'Arabic', 
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl'
  },
  { 
    code: 'fr', 
    name: 'French', 
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr'
  }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    const selectedLang = languages.find(lang => lang.code === langCode);
    
    if (selectedLang) {
      i18n.changeLanguage(langCode);
      
      // Update HTML dir and lang attributes
      document.documentElement.dir = selectedLang.dir;
      document.documentElement.lang = langCode;
      
      // Store preference
      localStorage.setItem('preferredLanguage', langCode);
      
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-amber-500/20 rounded-full hover:bg-gray-700/50 hover:border-amber-500/40 transition-all group"
      >
        <Globe className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="text-white font-medium text-sm hidden sm:inline">
          {currentLanguage.flag} {currentLanguage.nativeName}
        </span>
        <span className="text-white font-medium text-sm sm:hidden">
          {currentLanguage.flag}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-amber-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-gray-900 to-gray-800 border border-amber-500/20 rounded-xl shadow-2xl overflow-hidden z-50"
            >
              <div className="p-2">
                <div className="px-3 py-2 mb-2 border-b border-gray-700">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Select Language
                  </p>
                </div>

                {languages.map((lang, index) => {
                  const isActive = lang.code === currentLanguage.code;
                  
                  return (
                    <motion.button
                      key={lang.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${
                        isActive 
                          ? 'bg-amber-500/20 border border-amber-500/40' 
                          : 'hover:bg-gray-700/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <div className="text-left">
                          <p className={`text-sm font-medium ${
                            isActive ? 'text-amber-400' : 'text-white'
                          }`}>
                            {lang.nativeName}
                          </p>
                          <p className="text-xs text-gray-400">
                            {lang.name}
                          </p>
                        </div>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        >
                          <Check className="w-5 h-5 text-amber-400" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Info Footer */}
              <div className="px-4 py-3 bg-gray-900/50 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  Language preference saved automatically
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}