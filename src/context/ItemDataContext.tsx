import { createContext } from "react";
import { ItemData } from "../components";

interface ItemDataContextType {
  data: ItemData[];
  setData: (val: ItemData[]) => void;
}
const defaultValue = {
  data: [] as ItemData[],
  setData: (_val: ItemData[]) => undefined,
};

export const ItemDataContext = createContext<ItemDataContextType>(defaultValue);
