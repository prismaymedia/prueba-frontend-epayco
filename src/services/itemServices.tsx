// src/services/itemService.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addItem = async (newItem: { title: string; body: string }) => {
  const response = await axios.post(API_URL, newItem);
  return response.data;
};
