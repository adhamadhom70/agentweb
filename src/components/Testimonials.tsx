import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Global Tech Ventures",
    text: "The level of attention to detail was extraordinary. They transformed our annual gala into an unforgettable experience that exceeded every expectation. Their team's professionalism and creativity are unmatched.",
    rating: 5,
    service: "Corporate Event Planning"
  },
  {
    id: 2,
    name: "James Richardson",
    role: "Private Client",
    company: "Entrepreneur",
    text: "From booking impossible reservations to arranging private yacht charters, they handle everything with grace and efficiency. This service has become indispensable to my lifestyle.",
    rating: 5,
    service: "VIP Travel & Dining"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    company: "Luxury Brands International",
    text: "We've worked with several concierge services, but none compare. Their network, responsiveness, and ability to make the impossible happen consistently amazes us. Truly exceptional.",
    rating: 5,
    service: "Corporate Concierge"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Investor",
    company: "Thompson Holdings",
    text: "Whether it's last-minute travel arrangements or securing exclusive event access, they deliver every single time. The peace of mind they provide is invaluable.",
    rating: 5,
    service: "Lifestyle Management"
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Fashion Designer",
    company: "IM Couture",
    text: "They curated the most spectacular fashion week experience for our brand. Every detail was perfection, from venue selection to VIP guest management. Simply outstanding.",
    rating: 5,
    service: "Event Production"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Quote className="w-12 h-12 text-amber-400 mx-auto" />
          </motion.div>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Client <span className="text-amber-400">Testimonials</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from those who experience excellence firsthand
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(...args) => {
                  const [, info] = args as [any, { offset: { x: number; y: number }; velocity: { x: number; y: number } }];
                  const { offset, velocity } = info;
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-amber-500/20">
                  {/* Stars */}
                  <div className="flex justify-center gap-2 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Service Tag */}
                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold">
                      {currentTestimonial.service}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center mb-8">
                    <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic">
                      "{currentTestimonial.text}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <h4 className="font-sans text-xl font-bold text-white mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="font-sans text-amber-400 font-medium">
                      {currentTestimonial.role}
                    </p>
                    <p className="font-sans text-gray-400 text-sm">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 flex items-center justify-center text-amber-400 hover:bg-amber-500/30 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="pointer-events-auto w-14 h-14 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 flex items-center justify-center text-amber-400 hover:bg-amber-500/30 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-400 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "1000+", label: "Events Managed" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="font-sans text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}