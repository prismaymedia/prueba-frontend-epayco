import { useQuery, UseQueryResult} from "@tanstack/react-query";
import { getItemsUseCase } from "../../app/dependency-injection";
import { Post } from "../../domain/entities/post";



export const useGetPosts = ():UseQueryResult<Post[], Error> => {
    return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => getItemsUseCase.execute(),
    staleTime: 1000 * 60 * 5,
   });
};


