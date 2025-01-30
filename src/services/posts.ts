import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchItems = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data.slice(-1); // Solo el último ítem
};

interface Item {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const addItem = async (newItem: Omit<Item, 'id'>): Promise<Item> => {
    const response = await axios.post<Item>("https://jsonplaceholder.typicode.com/posts", newItem);
    return response.data;
};

export const useItems = () => {
  return useQuery("items", fetchItems, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: (newItem) => {
      queryClient.setQueryData("items", [newItem]); // Reemplaza la lista con el nuevo ítem
    },
  });
};
