import { PostList } from './PostList';
import { LoadingSpinner } from '../components/atoms/LoadingSpinner';
import type { Post } from '../../domain/entities/Post';
import type { UseQueryResult } from 'react-query';

interface Props {
  query: UseQueryResult<Post[], Error>;
}

export const PostListSection = ({ query }: Props) => {
  const { data: posts = [], isLoading, error } = query;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600">Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 font-medium mb-2">Error al cargar los posts</div>
        <p className="text-red-500 text-sm">{error.message}</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <div className="text-gray-500 text-lg font-medium mb-2">
          No hay posts disponibles
        </div>
        <p className="text-gray-400">
          Crea tu primer post usando el formulario de arriba
        </p>
      </div>
    );
  }

  return <PostList posts={posts} />;
};
