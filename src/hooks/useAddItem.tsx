import { CreateItemDTO, ItemProps } from "@/components/posts/types";
import { addItem } from "@/services/addItem";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation<ItemProps, Error, CreateItemDTO>({
    mutationKey: ["addItem"],
    mutationFn: addItem,
    onSuccess: (created) => {
      queryClient.setQueryData(["items"], [created]);
    },
  });
};
