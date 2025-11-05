import React from 'react';
import { motion } from 'framer-motion';

const barVariants = {
  animate: {
    scaleY: [0.4, 1, 0.4],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const LoadingIndicator = () => {
  return (
    <div className="mt-8 flex items-end justify-center gap-2" aria-hidden="true">
      {[0, 0.15, 0.3, 0.45].map((delay, idx) => (
        <motion.span
          key={idx}
          className="h-6 w-1.5 rounded-full bg-gradient-to-b from-[#6C6CE5] via-cyan-300 to-[#330867] shadow-[0_0_12px_rgba(108,108,229,0.6)]"
          variants={barVariants}
          animate="animate"
          style={{ filter: 'drop-shadow(0 0 12px rgba(51,8,103,0.45))', transformOrigin: '50% 100%' }}
          transition={{ delay }}
        />
      ))}
    </div>
  );
};

export default LoadingIndicator;
