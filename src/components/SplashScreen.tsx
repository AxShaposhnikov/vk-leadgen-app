import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { splashAnimation } from './animations/splashAnimation';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const duration = 4000; // 4 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Lottie Animation */}
        <div className="w-64 h-64 mb-4">
          <Lottie 
            animationData={splashAnimation} 
            loop={true} 
            className="w-full h-full"
          />
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          AI LeadGen VK
        </h1>
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          ЗАГРУЗКА...
        </p>
      </motion.div>
    </div>
  );
}
