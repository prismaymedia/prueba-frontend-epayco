import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../atoms';
import { useTheme } from '@/context';

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 relative overflow-hidden transition-all duration-700">
      {/* Grid pattern overlay para dark mode */}
      {isDark && (
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      )}

      {/* Decorative blobs */}
      <motion.div 
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
        animate={{
          scale: [1, 0.9, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Stars for dark mode */}
      {isDark && (
        <>
          <motion.div 
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white rounded-full"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </>
      )}
      
      <div className="relative container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h1 className="text-5xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Item Manager
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg ml-1">
                Manage your items with style
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </header>
        <main>{children}</main>
        
        {/* Footer */}
        <motion.footer 
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="flex items-center justify-center gap-2">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>Pedro Mollehuanca Torres</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
};