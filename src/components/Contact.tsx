import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

interface ContactProps {
  selectedService?: string;
}

const Contact = ({ selectedService }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || '',
    date: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-charcoal-dark to-charcoal py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-6xl md:text-7xl text-primary-red mb-6">Book Your Experience</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-sans text-xl text-text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Begin your journey to exceptional hospitality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="#bg-card-light-light/50 backdrop-blur-md border border-gold/20 rounded-lg p-8 mb-8">
              <h3 className="font-serif text-3xl text-text-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-red mt-1" />
                  <div>
                    <p className="font-sans text-text-dark/90">+1 (555) 123-4567</p>
                    <p className="font-sans text-text-dark/60 text-sm">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-red mt-1" />
                  <div>
                    <p className="font-sans text-text-dark/90">concierge@luxuryservice.com</p>
                    <p className="font-sans text-text-dark/60 text-sm">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-red mt-1" />
                  <div>
                    <p className="font-sans text-text-dark/90">123 Prestige Avenue</p>
                    <p className="font-sans text-text-dark/60 text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-gold/5 backdrop-blur-md border border-gold/30 rounded-lg p-8">
              <h3 className="font-serif text-2xl text-primary-red mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  'Immediate response to all inquiries',
                  'Customized service proposals',
                  'Transparent pricing with no hidden fees',
                  'Dedicated agent for your event',
                  'Flexible cancellation policies',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary-red mr-3 mt-1">✓</span>
                    <span className="font-sans text-text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="#bg-card-light-light/50 backdrop-blur-md border border-gold/20 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2">Service Type *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Intimate Gathering">Intimate Gathering</option>
                    <option value="Grand Celebration">Grand Celebration</option>
                    <option value="Corporate Excellence">Corporate Excellence</option>
                    <option value="Boutique Stay">Boutique Stay</option>
                    <option value="Extended Experience">Extended Experience</option>
                    <option value="Custom Request">Custom Request</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-red" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-text-dark/90 mb-2">Number of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-sans text-text-dark/90 mb-2">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full #bg-card-light/50 border border-gold/30 rounded px-4 py-3 text-text-dark font-sans focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-background-light font-serif text-lg tracking-wider rounded-lg shadow-lg"
              >
                {submitted ? 'INQUIRY SUBMITTED ✓' : 'SUBMIT INQUIRY'}
              </motion.button>

              <p className="text-text-dark/60 text-sm text-center mt-4 font-sans">
                We'll respond within 2 hours to discuss your requirements
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
