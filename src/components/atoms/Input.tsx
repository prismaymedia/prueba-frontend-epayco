import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <motion.input
          ref={ref}
          className={`w-full px-4 py-3 border rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${
            error ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
          } ${className}`}
          whileFocus={{ scale: 1.01 }}
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          {...props}
        />
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 dark:text-red-400 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';