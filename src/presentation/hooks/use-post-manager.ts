import { UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post } from "../../domain/entities/post";

import { useAddPost } from "./use-add-post";
import { useGetPosts } from "./use-get-posts";

type MessageHandler = (err: Error) => void;

export type UsePostManagerReturn = {
  postsToRender: Post[];
  showOnlyNew: boolean;
  handleAddPost: (
    data: Omit<Post, "id">,
    onSuccess?: () => void,
    onError?: MessageHandler
  ) => void;
  handleShowAll: () => Promise<void>;
  mutation: UseMutationResult<Post, Error, Omit<Post, "id">>;
  isLoading: boolean;
  error: Error | null;
};


export const usePostManager = ():UsePostManagerReturn => {
   
   const { data: posts = [], error , isLoading, refetch } = useGetPosts();
   const mutation = useAddPost();
   const queryClient = useQueryClient();
   
       
  const { data: showOnlyNew = false } = useQuery({
    queryKey: ["showOnlyNew"],
    queryFn: () => false, 
    staleTime: Infinity,
  });
    
     
    const handleAddPost = (
        data: Omit<Post, "id">,
        onSuccess?: () => void,
        onError?: (err: Error) => void
    ) => {
      mutation.mutate(data, { onSuccess, onError });
  };

  const handleShowAll = async () => {
     queryClient.setQueryData(["showOnlyNew"], false);
     await refetch();
  };
const postsToRender = showOnlyNew
    ? (queryClient.getQueryData(["posts"]) as Post[]) ?? []
    : posts;  
    
  return {
    postsToRender,
    showOnlyNew,
    handleAddPost,
    handleShowAll,
    mutation,
    isLoading,
    error,
   };
};
