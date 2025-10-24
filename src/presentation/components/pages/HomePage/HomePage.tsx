import { useState } from 'react';
import { Post, CreatePostDto } from '../../../../domain/entities/Post.entity';
import { usePosts } from '../../../hooks/usePosts';
import { useAddPost } from '../../../hooks/useAddPost';
import { useToast } from '../../../hooks/useToast';
import { MainLayout } from '../../templates/MainLayout/MainLayout';
import { PostForm } from '../../organisms/PostForm/PostForm';
import { PostList } from '../../organisms/PostList/PostList';
import { Modal } from '../../molecules/Modal/Modal';
import { ConfirmDialog } from '../../molecules/ConfirmDialog/ConfirmDialog';
import { Button } from '../../atoms/Button/Button';
import { HomePageProps } from './HomePage.types';

/**
 * HomePage Component
 * Página principal con funcionalidad completa de posts
 */
export const HomePage = ({ getPostsUseCase, addPostUseCase }: HomePageProps) => {
  const [displayMode, setDisplayMode] = useState<'all' | 'new'>('all');
  const [newPost, setNewPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  // Hook de toast para notificaciones
  const toast = useToast();

  // Obtener posts
  const { data: posts, isLoading, error } = usePosts(getPostsUseCase);

  // Mostrar toast de error si falla la carga de posts
  if (error && !isLoading) {
    toast.error('Error al cargar los posts. Por favor, intenta de nuevo.');
  }

  // Agregar post con callback para mostrar solo el nuevo
  const { mutate: addPost, isLoading: isAdding } = useAddPost(
    addPostUseCase,
    (data: Post) => {
      setNewPost(data);
      setDisplayMode('new');
      setIsModalOpen(false); // Cerrar modal al agregar post
      
      // Mostrar toast de éxito
      toast.success('¡Post creado exitosamente! 🎉');
    },
    (error: Error) => {
      // Mostrar toast de error
      toast.error(`Error al crear el post: ${error.message}`);
    }
  );

  // Handler para enviar el formulario
  const handleSubmit = (data: CreatePostDto) => {
    addPost(data);
  };

  // Handler para volver a ver todos los posts
  const handleViewAll = () => {
    setDisplayMode('all');
    setNewPost(null);
  };

  // Handler para intentar cerrar el modal
  const handleModalCloseAttempt = (): boolean => {
    if (isFormDirty) {
      setShowConfirmDialog(true);
      return false; // No cerrar todavía
    }
    return true; // Permitir cerrar
  };

  // Handler para confirmar cierre con cambios
  const handleConfirmClose = () => {
    setShowConfirmDialog(false);
    setIsModalOpen(false);
    setIsFormDirty(false);
  };

  // Handler para cancelar cierre
  const handleCancelClose = () => {
    setShowConfirmDialog(false);
  };

  // Determinar qué posts mostrar
  const postsToDisplay = displayMode === 'new' && newPost ? [newPost] : posts || [];

  return (
    <MainLayout>
      <div>
        {/* Modal con formulario */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCloseAttempt={handleModalCloseAttempt}
          size="lg"
        >
          <div className="p-8">
            <PostForm 
              onSubmit={handleSubmit} 
              isLoading={isAdding}
              onDirtyChange={setIsFormDirty}
            />
          </div>
        </Modal>

        {/* Diálogo de confirmación */}
        <ConfirmDialog
          isOpen={showConfirmDialog}
          title="¿Descartar cambios?"
          message="Tienes cambios sin guardar en el formulario. ¿Estás seguro de que deseas cerrar y perder estos cambios?"
          confirmText="Sí, descartar"
          cancelText="No, continuar editando"
          onConfirm={handleConfirmClose}
          onCancel={handleCancelClose}
          type="warning"
        />

        {/* Indicador de modo de visualización mejorado */}
        {displayMode === 'new' && newPost && (
          <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl animate-slide-up overflow-hidden mb-10">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mr-16 -mt-16 opacity-30 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full -ml-12 -mb-12 opacity-30 blur-2xl"></div>
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg animate-pulse-subtle">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-indigo-900 text-lg flex items-center gap-2">
                  <span>¡Post Agregado Exitosamente!</span>
                  <span className="text-2xl">🎉</span>
                </h3>
                <p className="text-sm text-indigo-700 mt-1 leading-relaxed">
                  Tu nuevo post ha sido creado y está siendo destacado. 
                  <br className="hidden md:block" />
                  Haz clic en el botón para ver todos los posts.
                </p>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleViewAll}
              className="relative z-10 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Ver Todos los Posts
              </span>
            </Button>
          </div>
        )}

        {/* Lista de posts */}
        <section>
          <PostList
            posts={postsToDisplay}
            isLoading={isLoading}
            error={error}
            newPostId={newPost?.id}
            onOpenAddPost={() => setIsModalOpen(true)}
          />
        </section>
      </div>
    </MainLayout>
  );
};
