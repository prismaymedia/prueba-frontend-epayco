import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  variant = 'glass' 
}) => {
  const variants = {
    default: 'bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50',
    glass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-white/20 dark:border-gray-700/50',
  };

  return (
    <div className={`rounded-xl p-6 transition-all duration-300 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};