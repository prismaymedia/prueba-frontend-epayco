import axios from "axios";
import { Item } from "../types/item";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const pendingRequests = new Map();

export const itemsApi = {
  getItems: async (): Promise<Item[]> => {
    if (pendingRequests.has("getItems")) {
      return pendingRequests.get("getItems");
    }

    const request = axios
      .get(`${BASE_URL}/posts`)
      .then((response) => response.data)
      .finally(() => {
        pendingRequests.delete("getItems");
      });

    pendingRequests.set("getItems", request);
    return request;
  },

  addItem: async (item: Item): Promise<Item> => {
    const requestKey = `addItem-${JSON.stringify(item)}`;

    if (pendingRequests.has(requestKey)) {
      return pendingRequests.get(requestKey);
    }

    const request = axios
      .post(`${BASE_URL}/posts`, {
        ...item,
        userId: 1,
      })
      .then(() => item)
      .finally(() => {
        pendingRequests.delete(requestKey);
      });

    pendingRequests.set(requestKey, request);
    return request;
  },
};
