import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  ArrowRight,
  Award,
  Clock,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function MobileOptimizedFooter() {
  const currentYear = new Date().getFullYear();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Success Stories', href: '#catalog' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Executive Search', href: '#services' },
    { label: 'Permanent Recruitment', href: '#services' },
    { label: 'Contract Staffing', href: '#services' },
    { label: 'Talent Consulting', href: '#services' },
    { label: 'Employer Branding', href: '#services' }
  ];

  const legal = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR Compliance', href: '/gdpr' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-br from-navy via-navy/95 to-forest text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        
        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">R</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-white text-lg">REFINED</p>
                <p className="font-sans text-xs text-white/70">Recruitment</p>
              </div>
            </div>

            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Excellence in talent acquisition since 2010. Connecting exceptional professionals with world-class organizations.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-forest" />
              <span className="text-sm text-white/70">ISO 9001:2015 Certified</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-forest" />
              <span className="text-sm text-white/70">Mon-Fri: 9AM - 6PM</span>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@refined-recruitment.com"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 text-forest group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm">contact@refined.com</p>
                </div>
              </a>

              <a 
                href="tel:+12345678900"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 text-forest group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm">+1 (234) 567-8900</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 text-forest" />
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm">123 Business Ave<br/>Suite 456<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-forest rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Layout (< lg) - Accordion Style */}
        <div className="lg:hidden space-y-4 mb-8">
          
          {/* Company Info - Always visible on mobile */}
          <div className="pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-forest rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg sm:text-xl">R</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-white text-base sm:text-lg">REFINED</p>
                <p className="font-sans text-[10px] sm:text-xs text-white/70">Recruitment</p>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Excellence in talent acquisition since 2010.
            </p>

            {/* Contact Info - Prominent on mobile */}
            <div className="space-y-3">
              <a href="mailto:contact@refined.com" className="flex items-center gap-3 text-white/90 text-sm">
                <Mail className="w-4 h-4 text-forest" />
                <span>contact@refined.com</span>
              </a>
              <a href="tel:+12345678900" className="flex items-center gap-3 text-white/90 text-sm">
                <Phone className="w-4 h-4 text-forest" />
                <span>+1 (234) 567-8900</span>
              </a>
            </div>

            {/* Social Links - Mobile */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-white/10 active:bg-forest rounded-lg flex items-center justify-center transition-colors touch-manipulation"
                  aria-label={social.label}
                >
                  <div className="scale-90">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Collapsible */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('links')}
              className="w-full flex items-center justify-between py-4 text-white font-semibold text-sm touch-manipulation"
            >
              <span>Quick Links</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'links' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'links' && (
              <div className="pb-4 space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/70 active:text-white text-sm py-2 touch-manipulation"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services - Collapsible */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between py-4 text-white font-semibold text-sm touch-manipulation"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'services' && (
              <div className="pb-4 space-y-2">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block text-white/70 active:text-white text-sm py-2 touch-manipulation"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 sm:py-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-white">Stay Updated</h3>
            <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">
              Get the latest insights on recruitment trends and industry news
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 sm:py-3 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-forest focus:bg-white/20 transition-all touch-manipulation"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-forest hover:bg-forest/90 active:bg-forest/80 text-white text-sm font-semibold rounded-lg transition-all whitespace-nowrap touch-manipulation"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Mobile optimized */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Refined Recruitment. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white active:text-white transition-colors text-xs sm:text-sm touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge Strip - Mobile optimized */}
      <div className="bg-forest/20 backdrop-blur-sm border-t border-white/10 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/60 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" /> ISO Certified
            </span>
            <span className="hidden xs:inline">•</span>
            <span>GDPR Compliant</span>
            <span className="hidden xs:inline">•</span>
            <span className="hidden sm:inline">SOC 2 Type II</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Equal Opportunity Employer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}