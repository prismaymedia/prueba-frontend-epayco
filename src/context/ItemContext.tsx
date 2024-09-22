import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Item } from '../interfaces/Item.interface';
import { fetchItems, items$, addItem as addItemService } from '../services/itemService';

type ItemContextType = {
  items: Item[];
  addItem: (item: Omit<Item, 'id'>) => Promise<Item>; 
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

interface ItemProviderProps {
  children: ReactNode;
}

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const initialItems = await fetchItems(); // Cargamos los ítems iniciales
      setItems(initialItems); // Actualiza el estado con los ítems cargados
    };

    loadItems();

    const subscription = items$.subscribe(setItems); // Nos suscribimos al observable de ítems

    return () => subscription.unsubscribe(); // Limpiamos la suscripción
  }, []);

  const addItem = async (newItem: Omit<Item, 'id'>): Promise<Item> => { 
    const addedItem = await addItemService(newItem); // Agrega el ítem y espera el resultado
    // Ya no llamamos `setItems` aquí, el observable manejará la actualización
    return addedItem; // Retorna el nuevo ítem
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItemContext must be used within ItemProvider');
  }
  return context;
};
