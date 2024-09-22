import { useContext } from "react";
import { CreateItemContext } from "../../../context/CreateItemContext";
import { ItemDataContext } from "../../../context/ItemDataContext";
import { useAddItem } from "../../../services";
import { ItemData } from "../../Molecules/Item/Item.types";
import { ItemListProps } from "./ItemList.types";

export const useItemList = (props: ItemListProps) => {
  const { items } = props;
  const { mutate } = useAddItem();
  const { isCreating, setIsCreating } = useContext(CreateItemContext);
  const { setData, data: currentData } = useContext(ItemDataContext);

  const handleSubmit = (data: Omit<ItemData, "id">) => {
    mutate({ body: data.body, title: data.title });
    setIsCreating(false);
    setData([...currentData, { ...data, id: currentData.length }]);
  };

  return { items, handleSubmit, isCreating };
};
