import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle, Star, Lock } from 'lucide-react';

export default function TrustBadgesSection() {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 9001:2015",
      subtitle: "Quality Management Certified",
      color: "forest"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "GDPR Compliant",
      subtitle: "Data Protection Assured",
      color: "navy"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leader",
      subtitle: "Award-Winning Service",
      color: "forest"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Verified Partner",
      subtitle: "Trusted by Fortune 500",
      color: "navy"
    }
  ];

  const partnerships = [
    { name: "LinkedIn Certified", logo: "LI" },
    { name: "Indeed Premier", logo: "IN" },
    { name: "Glassdoor Partner", logo: "GD" },
    { name: "Monster Alliance", logo: "MO" },
    { name: "CareerBuilder Pro", logo: "CB" },
    { name: "ZipRecruiter Elite", logo: "ZR" }
  ];

  const testimonialStats = [
    { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "Average Rating" },
    { icon: <Users className="w-5 h-5" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="w-5 h-5" />, value: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5a3d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest/10 border border-forest/20 rounded-full mb-4"
          >
            <Shield className="w-4 h-4 text-forest" />
            <span className="text-sm font-semibold text-forest">Trusted & Certified</span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Your Trust is <span className="text-forest">Our Priority</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Backed by industry certifications and trusted partnerships
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-silver hover:border-forest/30 transition-all shadow-md hover:shadow-xl"
            >
              <div className={`w-16 h-16 mb-4 bg-${cert.color}/10 rounded-xl flex items-center justify-center text-${cert.color}`}>
                {cert.icon}
              </div>
              <h3 className="font-semibold text-navy text-lg mb-1">{cert.title}</h3>
              <p className="text-stone text-sm">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-stone text-sm mb-8 uppercase tracking-wider font-semibold">
            Official Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg border border-silver hover:border-forest/30 transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-forest/10 to-navy/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-forest">{partner.logo}</span>
                  </div>
                  <p className="text-xs text-stone font-medium">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-forest to-navy rounded-2xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3 text-white/80">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 text-stone text-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-forest" />
              <span>256-bit SSL Encryption</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-forest" />
              <span>SOC 2 Type II Compliant</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-forest" />
              <span>Background Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}