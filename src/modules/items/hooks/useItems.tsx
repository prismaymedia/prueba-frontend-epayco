import { useQuery } from "react-query";
import { fetchItems } from "../services/fetch-items";

export const useItems = () => {
    return useQuery("items", fetchItems, {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
};
