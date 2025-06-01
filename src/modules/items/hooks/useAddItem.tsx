import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../services/add-item";
import { useItemContext } from "./useItemContext";

export const useAddItem = () => {
    const queryClient = useQueryClient();
    const { addItem: addItemToContext } = useItemContext();
    const mutation = useMutation(addItem, {
        onSuccess: (data) => {
            queryClient.invalidateQueries("items");
            addItemToContext(data);
        },
    });
    return { mutation, isLoading: mutation.isLoading };
};
