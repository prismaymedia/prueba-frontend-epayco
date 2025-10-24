import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { FormField } from '../../molecules/FormField/FormField';
import { PostFormProps, PostFormData } from './PostForm.types';
import { postFormValidation } from './PostForm.validation';
import { VALIDATION_RULES } from '../../../constants/validationRules';

/**
 * PostForm Organism Component
 * Formulario completo para agregar un nuevo post
 */
export const PostForm = ({ onSubmit, isLoading, onDirtyChange }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm<PostFormData>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      body: '',
    },
  });

  // Notificar cambios en isDirty
  useEffect(() => {
    if (onDirtyChange) {
      onDirtyChange(isDirty);
    }
  }, [isDirty, onDirtyChange]);

  // Observar valores para contadores
  const titleValue = watch('title', '');
  const bodyValue = watch('body', '');

  const onFormSubmit = (data: PostFormData) => {
    onSubmit({
      title: data.title.trim(),
      body: data.body.trim(),
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="relative space-y-6"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200 via-cyan-200 to-teal-200 rounded-full -ml-24 -mb-24 opacity-20 blur-3xl pointer-events-none"></div>
      
      {/* Contenido */}
      <div className="relative z-10 pt-4">
        {/* Header del formulario */}
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-start gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Agregar Nuevo Post
              </h2>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-1.5">
                <span className="text-lg">📝</span>
                <span>Completa los campos para crear un nuevo post</span>
              </p>
            </div>
          </div>
        </div>

        <FormField
          label="Título"
          name="title"
          required
          error={errors.title}
          helpText={`${titleValue.length}/${VALIDATION_RULES.TITLE.MAX_LENGTH} caracteres`}
        >
          <Input
            id="title"
            placeholder="Escribe un título descriptivo..."
            error={errors.title?.message}
            {...register('title', postFormValidation.title)}
          />
        </FormField>

        <FormField
          label="Contenido"
          name="body"
          required
          error={errors.body}
          helpText={`${bodyValue.length}/${VALIDATION_RULES.BODY.MAX_LENGTH} caracteres`}
        >
          <TextArea
            id="body"
            placeholder="Escribe el contenido de tu post..."
            rows={6}
            error={errors.body?.message}
            {...register('body', postFormValidation.body)}
          />
        </FormField>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200 gap-4 flex-wrap">
          {isDirty && !isValid && (
            <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-2.5 rounded-xl border border-red-200 shadow-sm">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-sm">Corrige los errores antes de enviar</span>
            </div>
          )}

          <div className="flex items-center gap-3 ml-auto">
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              disabled={!isDirty || isLoading}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpiar
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
              disabled={!isDirty || !isValid || isLoading}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Agregar Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
