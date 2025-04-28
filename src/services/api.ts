import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import axios from "axios";
import { Item } from "../types/Item";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const addItem = async (newItem: Item): Promise<Item> => {
  const response = await axios.post(`${BASE_URL}/posts`, newItem);
  return response.data;
};

export const useItems = (): UseQueryResult<Item[], Error> => {
  return useQuery<Item[], Error>("items", fetchItems);
};

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });
};
