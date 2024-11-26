import { useState } from "react";
import { useAddItem } from "../../application/hooks";

export const queryItems = () => {
  const addItemMutation = useAddItem();
  const [newItem, setNewItem] = useState({ title: "", body: "", userId: 1 });


  const handleAddItem = () => {
    console.log("newItem ", newItem);
    addItemMutation.mutate(newItem);
    setNewItem(newItem)
  };

  // Debugging logs
  console.log("items: ", items);
  console.log("Is items an array? ", Array.isArray(items));
};
export default queryItems;
