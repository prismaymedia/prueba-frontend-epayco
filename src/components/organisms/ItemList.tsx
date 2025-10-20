import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertCircle, Package, List } from 'lucide-react';
import { ItemCard } from '../molecules';
import { Item } from '@/domain/entities';

interface ItemListProps {
  items: Item[];
  isLoading?: boolean;
  error?: Error | null;
}

export const ItemList: React.FC<ItemListProps> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return (
      <motion.div 
        className="flex flex-col justify-center items-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-16 h-16 text-purple-600 dark:text-purple-400" />
        </motion.div>
        <p className="text-gray-600 dark:text-gray-400 font-medium mt-4">Loading items...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-red-50/80 dark:bg-red-900/30 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-6 py-5 rounded-xl shadow-lg"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-lg mb-1">Error occurred</p>
            <p className="text-sm">{error.message}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-purple-900/50 rounded-2xl backdrop-blur-sm border border-purple-100 dark:border-purple-800/30"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-4"
        >
          <Package className="w-20 h-20 text-gray-400 dark:text-gray-500" />
        </motion.div>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
          No items found
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Add your first item using the form above
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm px-5 py-3 rounded-xl border border-purple-200 dark:border-purple-800/50"
      >
        <List className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Items List
        </h2>
        <motion.span 
          className="ml-auto bg-purple-500 dark:bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
        >
          {items.length}
        </motion.span>
      </motion.div>
      
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};