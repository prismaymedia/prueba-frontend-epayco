import axios from "axios";
import { Item } from "../types/Item";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getItems = async (): Promise<Item[]> =>
  (await axios.get<Item[]>(API_URL)).data;

export const createItem = async (item: Item): Promise<Item> =>
  (await axios.post<Item>(API_URL, item)).data;
