import axios from 'axios';
import { CreatePost } from '../../models/post';

const SERVICE_URL = "https://jsonplaceholder.typicode.com"

const fetchItems = async () => {
  const response = await axios.get(`${SERVICE_URL}/posts`);
  return response.data;
};

const addItem = async (newItem: CreatePost) => {
  const response = await axios.post(`${SERVICE_URL}/posts`, newItem);
  return response.data;
};

export {
    fetchItems,
    addItem
}