import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX, CheckCircle, Award } from 'lucide-react';

interface VideoHeroProps {
  onBookNow: () => void;
  videoUrl?: string;
  fallbackImage?: string;
}

export default function MobileOptimizedVideoHero({ 
  onBookNow,
  videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-an-office-4628-large.mp4",
  fallbackImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isMobile]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    { icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />, text: "98% Satisfaction" },
    { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Industry Leading" },
    { icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />, text: "24/7 Available" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image - Always visible on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
        
        {/* Video - Hidden on small mobile for performance */}
        {!isMobile && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}

        {/* Overlay - Darker on mobile for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy/90 sm:from-navy/80 sm:via-navy/70 sm:to-navy/90" />
        
        {/* Animated Gradient */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(45, 90, 61, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(45, 90, 61, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(45, 90, 61, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      {/* Video Controls - Only show on desktop when video is playing */}
      {!isMobile && (
        <div className="absolute top-6 right-6 z-30 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all border border-white/30"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all border border-white/30"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </motion.button>
        </div>
      )}

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge - Responsive text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-forest rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-white">Premium Recruitment Excellence</span>
          </motion.div>

          {/* Main Heading - Responsive sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
          >
            Transform Your Team with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-forest drop-shadow-lg">Elite Talent</span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-1 sm:bottom-2 left-0 h-2 sm:h-3 bg-forest/40 blur-sm -z-0"
              />
            </span>
          </motion.h1>

          {/* Subheading - Responsive sizing and spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
          >
            We connect exceptional professionals with world-class organizations.
          </motion.p>

          {/* Feature Pills - Responsive layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 px-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full"
              >
                <span className="text-forest flex-shrink-0">{feature.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Stack on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookNow}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-forest hover:bg-forest/90 active:bg-forest/80 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-2xl hover:shadow-forest/50 flex items-center justify-center gap-2 touch-manipulation"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 active:bg-white/40 text-white text-sm sm:text-base font-semibold rounded-lg transition-all border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2 touch-manipulation"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" />
              </div>
              <span className="hidden xs:inline">Watch Success Stories</span>
              <span className="xs:hidden">Watch Video</span>
            </motion.button>
          </motion.div>

          {/* Trust Stats - Responsive grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {[
                { value: '500+', label: 'Placements' },
                { value: '98%', label: 'Satisfaction' },
                { value: '15+', label: 'Years' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/80"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-forest rounded-full"
          />
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}