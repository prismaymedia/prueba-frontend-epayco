import { Item } from '../domain/entities/Item';

const LOCAL_STORAGE_KEY = 'user-items';
const COUNTER_KEY = 'user-items-counter';

export class LocalStorageService {
  static getItems(): Item[] {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!stored) return [];
      
      const parsedItems = JSON.parse(stored);
      return parsedItems.map((item: any) => 
        new Item(item.id, item.title, item.body, item.userId)
      );
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  static getNextId(): number {
    try {
        const existingItems = this.getItems();
        const stored = existingItems.length;
        let currentId = stored > 0 ? stored : 100; // Comenzar desde 100 si no hay elementos
      
        if (existingItems.length > 0) {
        const maxExistingId = Math.max(...existingItems.map(item => item.id));
        if (maxExistingId >= currentId) {
          currentId = maxExistingId;
        }
      }
      
      const nextId = currentId + 1;
      localStorage.setItem(COUNTER_KEY, nextId.toString());
      
      return nextId;
    } catch (error) {
      console.error('Error getting next ID:', error);
      return Date.now(); // Fallback al timestamp
    }
  }

  static saveItems(items: Item[]): void {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  static addItem(item: Item): void {
    const existingItems = this.getItems();
    const updatedItems = [item, ...existingItems];
    this.saveItems(updatedItems);
  }

  static removeItem(id: number): void {
    const existingItems = this.getItems();
    const updatedItems = existingItems.filter(item => item.id !== id);
    this.saveItems(updatedItems);
  }

  static clear(): void {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}
