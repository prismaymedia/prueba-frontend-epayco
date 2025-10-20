import React from 'react';
import { motion } from 'framer-motion';
import { MainTemplate } from '@/components/templates/MainTemplate';
import { ItemForm, ItemList } from '@/components/organisms';
import { useItems, useAddItem } from '@/hooks';
import { Item } from '@/domain/entities';

export const HomePage: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();

  const handleAddItem = (data: Omit<Item, 'id'>) => {
    mutation.mutate(data);
  };

  return (
    <MainTemplate>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <ItemForm onSubmit={handleAddItem} isLoading={mutation.isPending} />
        <ItemList 
          items={items || []} 
          isLoading={isLoading} 
          error={error} 
        />
      </motion.div>
    </MainTemplate>
  );
};