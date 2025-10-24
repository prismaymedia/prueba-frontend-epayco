import { useQuery } from 'react-query';
import { Post } from '../../domain/entities/Post.entity';
import { GetPostsUseCase } from '../../domain/useCases/GetPosts.useCase';
import { QUERY_KEYS } from '../constants/queryKeys';
import { QUERY_CONFIG } from '../../data/config/api.config';

/**
 * Custom Hook: usePosts
 * Hook para obtener la lista de posts usando React Query
 */
export const usePosts = (getPostsUseCase: GetPostsUseCase) => {
  return useQuery<Post[], Error>(
    QUERY_KEYS.POSTS,
    () => getPostsUseCase.execute(),
    {
      staleTime: QUERY_CONFIG.STALE_TIME,
      cacheTime: QUERY_CONFIG.CACHE_TIME,
      retry: QUERY_CONFIG.RETRY,
      retryDelay: QUERY_CONFIG.RETRY_DELAY,
    }
  );
};
