import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';

interface ItemFormData {
  title: string;
  body: string;
}

interface ItemFormProps {
  onSubmit: (data: ItemFormData) => void;
  isLoading?: boolean;
  className?: string;
}

export const ItemForm: React.FC<ItemFormProps> = ({ 
  onSubmit, 
  isLoading = false, 
  className = '' 
}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ItemFormData>();
  const [customErrors, setCustomErrors] = useState<{title?: string; body?: string}>({});

  const validateForm = (data: ItemFormData) => {
    const newErrors: {title?: string; body?: string} = {};

    if (!data.title.trim()) {
      newErrors.title = 'El título es requerido';
    } else if (data.title.trim().length < 3) {
      newErrors.title = 'El título debe tener al menos 3 caracteres';
    }

    if (!data.body.trim()) {
      newErrors.body = 'El contenido es requerido';
    } else if (data.body.trim().length < 10) {
      newErrors.body = 'El contenido debe tener al menos 10 caracteres';
    }

    setCustomErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (data: ItemFormData) => {
    if (validateForm(data)) {
      onSubmit(data);
      reset();
      setCustomErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={`space-y-4 ${className}`}>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Título
        </label>
        <Input
          {...register('title', { required: 'El título es requerido' })}
          placeholder="Ingresa el título del elemento"
          error={errors.title?.message || customErrors.title}
        />
      </div>

      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
          Contenido
        </label>
        <Textarea
          {...register('body', { required: 'El contenido es requerido' })}
          placeholder="Describe el contenido del elemento..."
          rows={4}
          error={errors.body?.message || customErrors.body}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Agregando...' : 'Agregar Elemento'}
      </Button>
    </form>
  );
};
