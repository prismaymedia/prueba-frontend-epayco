import { useState, useMemo } from 'react';
import { Post } from '../../domain/entities/Post.entity';

/**
 * Custom Hook para búsqueda y filtrado de posts
 * @param posts Lista completa de posts
 * @returns Estado y funciones para búsqueda
 */
export const useSearchAndFilter = (posts: Post[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar posts basado en la búsqueda
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const bodyMatch = post.body.toLowerCase().includes(query);
      return titleMatch || bodyMatch;
    });
  }, [posts, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredPosts,
    clearSearch,
    isSearching: searchQuery.trim().length > 0,
    resultsCount: filteredPosts.length,
    totalCount: posts.length,
  };
};
