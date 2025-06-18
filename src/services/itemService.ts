import { Item } from '../types/item';

export const addItem = async (item: Item): Promise<Item> => {
  // Simulación de API
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...item, id: Date.now() }), 500);
  });
};