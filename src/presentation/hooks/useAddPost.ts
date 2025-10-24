import { useMutation, useQueryClient } from 'react-query';
import { Post, CreatePostDto } from '../../domain/entities/Post.entity';
import { AddPostUseCase } from '../../domain/useCases/AddPost.useCase';
import { QUERY_KEYS } from '../constants/queryKeys';

/**
 * Custom Hook: useAddPost
 * Hook para agregar un nuevo post usando React Query Mutation
 */
export const useAddPost = (
  addPostUseCase: AddPostUseCase,
  onSuccess?: (data: Post) => void,
  onError?: (error: Error) => void
) => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, CreatePostDto>(
    (postData: CreatePostDto) => addPostUseCase.execute(postData),
    {
      onSuccess: (data) => {
        // Invalidar la query de posts para refrescar la lista
        queryClient.invalidateQueries(QUERY_KEYS.POSTS);
        
        // Ejecutar callback personalizado si existe
        if (onSuccess) {
          onSuccess(data);
        }
      },
      onError: (error) => {
        console.error('Error al crear post:', error);
        
        // Ejecutar callback personalizado si existe
        if (onError) {
          onError(error);
        }
      },
    }
  );
};
