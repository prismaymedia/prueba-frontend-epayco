import { useState } from 'react';
import { Item } from '../types/item';
import { addItem } from '../services/itemService';

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = async (item: Item) => {
    const newItem = await addItem(item);
    setItems([newItem]); // Solo muestra el nuevo ítem
  };

  return { items, handleAddItem };
};