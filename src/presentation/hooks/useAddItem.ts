import { useMutation } from "react-query";
import { addItem } from "../../domain/addItems";
import { Item } from "../../infrastructure/Item";


export const useAddItem = (onSuccessCallback: (item: Item) => void) => {
  return useMutation<Item, Error, Item>(addItem, {
    onSuccess: (data) => {
      onSuccessCallback(data)
    },
  });
};
