import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-20 h-10 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-700 dark:to-gray-600 rounded-full p-1 cursor-pointer shadow-lg dark:shadow-gray-900/50 border-2 border-purple-300 dark:border-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        animate={{
          x: isDark ? 38 : 0
        }}
      >
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ 
            rotate: isDark ? 360 : 0,
            scale: isDark ? 1 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-white" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};