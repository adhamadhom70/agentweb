import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Clock } from 'lucide-react';

interface ContactButtonProps {
  phoneNumber?: string; // Format: 1234567890 (no + or spaces)
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}

export default function WhatsAppContactButton({
  phoneNumber = "1234567890", // Replace with your actual number
  message = "Hello! I'm interested in your luxury concierge services.",
  position = "bottom-right"
}: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  const quickMessages = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "General Inquiry",
      message: "Hello! I'd like to know more about your services."
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Book Consultation",
      message: "I'd like to schedule a consultation to discuss my needs."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Urgent Request",
      message: "I need immediate assistance with a time-sensitive matter."
    }
  ];

  const handleQuickMessage = (msg: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`absolute ${position === 'bottom-right' ? 'right-0' : 'left-0'} bottom-20 mb-4 w-80`}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-amber-500/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Chat with us</h3>
                    <p className="text-green-100 text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Available 24/7
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">
                  Hello! 👋 How can we assist you today?
                </p>

                {/* Quick Message Buttons */}
                <div className="space-y-2">
                  {quickMessages.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickMessage(item.message)}
                      className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-amber-500/50 rounded-xl transition-all group"
                    >
                      <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-white text-sm font-medium">{item.title}</div>
                        <div className="text-gray-400 text-xs">{item.message.substring(0, 30)}...</div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@yourdomain.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Phone className="w-4 h-4" />
                    <span>+1 (234) 567-8900</span>
                  </div>
                </div>

                {/* Custom Message Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-green-500/50"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Custom Message
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 group"
      >

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-400 rounded-full"
        />

        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: position === 'bottom-right' ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: position === 'bottom-right' ? 10 : -10 }}
              className={`absolute ${position === 'bottom-right' ? 'right-full mr-3' : 'left-full ml-3'} whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl border border-gray-700`}
            >
              Chat with us on WhatsApp
              <div className={`absolute top-1/2 -translate-y-1/2 ${position === 'bottom-right' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}>
                <div className={`w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${position === 'bottom-right' ? 'border-l-8 border-l-gray-900' : 'border-r-8 border-r-gray-900'}`}></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Text (appears occasionally) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [20, 0, 0, 20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 10,
              times: [0, 0.1, 0.9, 1]
            }}
            className={`absolute bottom-20 ${position === 'bottom-right' ? 'right-0' : 'left-0'} bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap`}
          >
            💬 Need help? Chat with us!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}