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
  Clock
} from 'lucide-react';

export default function ProfessionalFooter() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-gradient-to-br from-navy via-navy/95 to-forest text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info Column */}
          <div className="lg:col-span-1">
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

              {/* Certifications */}
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-forest" />
                <span className="text-sm text-white/70">ISO 9001:2015 Certified</span>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-forest" />
                <span className="text-sm text-white/70">Mon-Fri: 9AM - 6PM</span>
              </div>
            </motion.div>
          </div>

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

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3 text-white">Stay Updated</h3>
            <p className="text-white/70 mb-6 text-sm">
              Get the latest insights on recruitment trends and industry news
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-forest focus:bg-white/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-forest hover:bg-forest/90 text-white font-semibold rounded-lg transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Refined Recruitment. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge Strip */}
      <div className="bg-forest/20 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-xs">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" /> ISO Certified
            </span>
            <span>•</span>
            <span>GDPR Compliant</span>
            <span>•</span>
            <span>SOC 2 Type II</span>
            <span>•</span>
            <span>Equal Opportunity Employer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}