import { PostForm } from '../components/molecules/PostForm';
import { Post, PostFormData } from '../../domain/entities/Post';
import { UseMutationResult } from 'react-query';

type Props = {
  mutation: UseMutationResult<Post, Error, PostFormData>;
};

export const PostFormSection = ({ mutation }: Props) => {
  const handleCreatePost = (data: PostFormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Crear Nuevo Post</h2>
        <p className="text-gray-600">Completa el formulario para agregar un nuevo post</p>
      </div>

      <div className="max-w-2xl">
        <PostForm onSubmit={handleCreatePost} isLoading={mutation.isLoading} />
      </div>

      {mutation.isSuccess && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-green-800 font-medium">¡Post creado exitosamente!</div>
          <p className="text-green-600 text-sm mt-1">
            Tu nuevo post se ha agregado y ahora es visible en la lista.
          </p>
        </div>
      )}

      {mutation.isError && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-red-800 font-medium">Error al crear el post</div>
          <p className="text-red-600 text-sm mt-1">
            {mutation.error instanceof Error ? mutation.error.message : 'Ha ocurrido un error inesperado'}
          </p>
        </div>
      )}
    </section>
  );
};
