import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!displayedText && delay > 0) {
      const timer = setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          if (index > text.length) {
            clearInterval(interval);
          }
        }, 30);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, displayedText, delay]);

  return (
    <>
      {displayedText}
      {displayedText !== text && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-primary-red"
        >
          |
        </motion.span>
      )}
    </>
  );
};

export default TypewriterText;
