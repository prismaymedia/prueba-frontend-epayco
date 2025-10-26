import { useState, useCallback } from 'react';
import { Item } from '../types';

export const useCreatedItems = () => {
  const [createdItems, setCreatedItems] = useState<Item[]>([]);
  const [showOnlyCreated, setShowOnlyCreated] = useState(false);

  const addCreatedItem = useCallback((item: Item) => {
    // Generate unique ID for created items to avoid key conflicts
    const uniqueItem = {
      ...item,
      id: Math.floor(Math.random() * 1000000) + Date.now() // Generate unique numeric ID
    };
    setCreatedItems(prev => [uniqueItem, ...prev]);
    setShowOnlyCreated(true);
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowOnlyCreated(prev => !prev);
  }, []);

  const getItemsToDisplay = useCallback(
    (allItems: Item[]) => {
      if (showOnlyCreated) {
        return createdItems;
      }
      return allItems;
    },
    [showOnlyCreated, createdItems]
  );

  const itemsCount = createdItems.length;

  return {
    createdItems,
    showOnlyCreated,
    addCreatedItem,
    toggleShowAll,
    getItemsToDisplay,
    itemsCount,
  };
};
