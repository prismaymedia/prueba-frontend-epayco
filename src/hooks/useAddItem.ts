import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../services/addItem";
import { ItemInterface } from "../types/item";

const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: (newItem: ItemInterface) => {

      // destructure newItem
      const { title, body } = newItem;

      // get old query
      const getOldQuery = queryClient.getQueryData(['items']) as ItemInterface[] | undefined;

      // filter query.... is the user id undefined return the item
      const queryFilter = getOldQuery?.filter(item=> item.userId === undefined);
      
      // add new item
      const query = [...queryFilter!, { title, body, id: queryFilter?.length }];
      queryClient.setQueryData(['items'], query);
    },
  });
};


export default useAddItem;