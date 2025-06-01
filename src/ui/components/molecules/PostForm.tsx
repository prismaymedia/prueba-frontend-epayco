import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import { postFormSchema, type PostFormInput } from '../../../validation/postSchema';
import type { PostFormData } from '../../../domain/entities/Post';

interface PostFormProps {
  onSubmit: (data: PostFormData) => void;
  isLoading?: boolean;
}

export const PostForm = ({ onSubmit, isLoading = false }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<PostFormInput>({
    resolver: zodResolver(postFormSchema),
    mode: 'onChange',
  });

  const handleFormSubmit = (data: PostFormInput) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <Input
          {...register('title')}
          label="Título"
          placeholder="Ingresa el título del post"
          error={errors.title?.message}
          isRequired
        />
      </div>

      <div>
        <Textarea
          {...register('body')}
          label="Contenido"
          placeholder="Escribe el contenido del post"
          error={errors.body?.message}
          isRequired
        />
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        disabled={!isValid || isLoading}
        className="w-full"
      >
        {isLoading ? 'Creando post...' : 'Crear Post'}
      </Button>
    </form>
  );
};