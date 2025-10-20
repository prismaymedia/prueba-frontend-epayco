
import {  useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import {  addItemUseCase } from "../../app/dependency-injection";
import { Post } from "../../domain/entities/post";


export const useAddPost = ():UseMutationResult<Post, Error,Omit<Post, "id">> => {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, Omit<Post, "id">>({
      mutationFn: (newPost: Post) => addItemUseCase.execute(newPost),
      onSuccess: (createdPost) => {
      queryClient.setQueryData<Post[]>(["posts"], () => [createdPost]);
      queryClient.setQueryData(["showOnlyNew"], true);
    },
    });
};