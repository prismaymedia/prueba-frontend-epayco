import { useContext } from "react";
import { ItemContext } from "../context/item-context";

export const useItemContext = () => {
    const { items, addItem } = useContext(ItemContext);
    return { items, addItem };
};
