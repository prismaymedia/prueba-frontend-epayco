import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../../atoms/LoadingSpinner/LoadingSpinner';
import { PostCard } from '../../molecules/PostCard/PostCard';
import { Pagination } from '../../molecules/Pagination/Pagination';
import { SearchBar } from '../../molecules/SearchBar/SearchBar';
import { useSearchAndFilter } from '../../../hooks/useSearchAndFilter';
import { PostListProps } from './PostList.types';

const ITEMS_PER_PAGE = 9;

/**
 * PostList Organism Component
 * Lista de posts con grid responsive y paginación
 */
export const PostList = ({
  posts,
  isLoading,
  error,
  newPostId,
  onOpenAddPost,
}: PostListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Hook de búsqueda y filtrado
  const {
    searchQuery,
    setSearchQuery,
    filteredPosts,
    resultsCount,
    totalCount,
  } = useSearchAndFilter(posts || []);

  // Resetear a la primera página cuando cambian los posts filtrados
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPosts.length]);

  // Calcular posts para la página actual (sobre posts filtrados)
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave hacia arriba al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Estado de carga
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <LoadingSpinner size="lg" text="Cargando posts..." />
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <svg
          className="w-12 h-12 text-red-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-red-900 mb-2">
          Error al cargar posts
        </h3>
        <p className="text-red-700">{error.message}</p>
      </div>
    );
  }

  // Estado vacío
  if (!posts || posts.length === 0) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No hay posts aún
        </h3>
        <p className="text-gray-600">
          Agrega tu primer post usando el formulario arriba
        </p>
      </div>
    );
  }

  // Lista de posts
  return (
    <div className="animate-fade-in">
      {/* Header con título y botón */}
      <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur-sm rounded-2xl p-7 md:p-8 shadow-lg border-2 border-white/50">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Posts
            </h2>
            <p className="text-sm font-semibold text-gray-600 mt-0.5">
              {totalCount} {totalCount === 1 ? 'publicación' : 'publicaciones'} disponibles
            </p>
          </div>
        </div>
        
        {/* Botón Agregar Post */}
        <button
          onClick={onOpenAddPost}
          className="group relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Agregar Post</span>
        </button>
      </div>

      {/* Barra de búsqueda */}
      <div className="mb-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Buscar por título o contenido..."
          resultsCount={resultsCount}
          totalCount={totalCount}
        />
      </div>

      {/* Grid de posts */}
      {currentPosts.length === 0 ? (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No se encontraron resultados
          </h3>
          <p className="text-gray-600">
            No hay posts que coincidan con tu búsqueda "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isNew={post.id === newPostId}
            />
          ))}
        </div>
      )}

      {/* Componente de paginación */}
      {currentPosts.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={filteredPosts.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      )}
    </div>
  );
};
