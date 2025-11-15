import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactProps {
  selectedService?: string;
}

const Contact = ({ selectedService }: ContactProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: selectedService || '',
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
    <section id="contact" className="relative py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-forest" />
                <span className="text-sm font-sans font-semibold text-forest tracking-widest uppercase">
                  {t('contact.overline')}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-navy">
                {t('contact.title')}
              </h2>
            </div>

            <p className="text-lg text-stone font-sans leading-relaxed">
              {t('contact.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 pt-8 border-t border-silver">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <p className="text-sm text-stone font-sans uppercase tracking-widest mb-1">{t('contact.email.label')}</p>
                  <a
                    href="mailto:hello@refined-recruitment.com"
                    className="text-lg font-sans font-semibold text-navy hover:text-forest transition-colors"
                  >
                    hello@refined-recruitment.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <p className="text-sm text-stone font-sans uppercase tracking-widest mb-1">{t('contact.phone.label')}</p>
                  <a
                    href="tel:+1-800-555-0123"
                    className="text-lg font-sans font-semibold text-navy hover:text-forest transition-colors"
                  >
                    +1 (800) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <p className="text-sm text-stone font-sans uppercase tracking-widest mb-1">{t('contact.address.label')}</p>
                  <p className="text-lg font-sans font-semibold text-navy">
                    {t('contact.address.value')}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-off-white-warm border border-silver rounded-lg p-6"
            >
              <p className="text-sm text-forest font-sans font-semibold uppercase tracking-widest mb-2">
                {t('contact.responseTime.title')}
              </p>
              <p className="text-navy font-serif">{t('contact.responseTime.message')}</p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-off-white-warm border border-silver rounded-lg p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-sans font-semibold text-navy mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-off-white border border-silver rounded px-4 py-3 text-navy font-sans focus:outline-none focus:border-forest transition-colors"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-sans font-semibold text-navy mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-off-white border border-silver rounded px-4 py-3 text-navy font-sans focus:outline-none focus:border-forest transition-colors"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-sans font-semibold text-navy mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-off-white border border-silver rounded px-4 py-3 text-navy font-sans focus:outline-none focus:border-forest transition-colors"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              {/* Interest */}
              <div>
                <label className="block text-sm font-sans font-semibold text-navy mb-2">
                  {t('contact.form.interest')}
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-off-white border border-silver rounded px-4 py-3 text-navy font-sans focus:outline-none focus:border-forest transition-colors"
                >
                  <option value="">{t('contact.form.selectOption')}</option>
                  <option value="candidate">{t('contact.form.options.candidate')}</option>
                  <option value="employer">{t('contact.form.options.employer')}</option>
                  <option value="consultation">{t('contact.form.options.consultation')}</option>
                  <option value="other">{t('contact.form.options.other')}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-sans font-semibold text-navy mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-off-white border border-silver rounded px-4 py-3 text-navy font-sans focus:outline-none focus:border-forest transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-forest hover:bg-forest-dark text-off-white font-sans font-semibold rounded transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {submitted ? t('contact.form.messageSent') : t('contact.form.submit')}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-forest/10 border border-forest/30 rounded p-4"
                >
                  <p className="text-forest font-sans font-semibold text-center">
                    {t('contact.form.successMessage')}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
