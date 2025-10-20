import React from 'react';
import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';
import { Card } from '../atoms';
import { Item } from '@/domain/entities';

interface ItemCardProps {
  item: Item;
  index?: number;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        transition: { duration: 0.3 }
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      layout
    >
      <Card className="mb-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Hash className="w-6 h-6" />
          </motion.div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                #{item.id}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.body}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};