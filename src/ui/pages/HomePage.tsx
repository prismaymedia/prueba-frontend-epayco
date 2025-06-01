// src/ui/pages/HomePage.tsx

import { PageHeader } from '../layout/PageHeader';
import { PageFooter } from '../layout/PageFooter';
import { PostFormSection } from '../containers/PostFormSection';
import { PostListSection } from '../containers/PostListSection';
import { usePosts } from '../../infrastructure/hooks/usePosts';
import { useCreatePost } from '../../infrastructure/hooks/useCreatePost';

export const HomePage = () => {
  const postsQuery = usePosts(); // Trae los posts
  const createPostMutation = useCreatePost(); // Hook para mutación

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <PageHeader />

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* Formulario para crear nuevo post */}
        <PostFormSection mutation={createPostMutation} />

        {/* Lista de posts existentes */}
        <PostListSection query={postsQuery} />
      </main>

      {/* Pie de página */}
      <PageFooter />
    </div>
  );
};
