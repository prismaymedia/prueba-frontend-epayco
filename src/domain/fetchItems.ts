import { fetchItemsAPI } from "../infrastructure/itemRepository";

export const fetchItems = async () => {
  return await fetchItemsAPI();
};