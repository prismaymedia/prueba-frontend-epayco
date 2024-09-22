import { createContext } from "react";

interface CreateItemsContextType {
  isCreating: boolean;
  setIsCreating: (val: boolean) => void;
}
const defaultValue = {
  isCreating: false,
  setIsCreating: (val: boolean) => undefined,
};

export const CreateItemContext =
  createContext<CreateItemsContextType>(defaultValue);
