import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../atoms/Input';
import { Item } from '../../types/item';

interface Props {
  onSubmit: (item: Item) => void;
}

export const ItemForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Item>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow">
      <Input
        label="Título"
        {...register('title', { required: 'El título es obligatorio' })}
        error={errors.title?.message}
      />
      <Input
        label="Descripción"
        {...register('body', { required: 'La descripción es obligatoria' })}
        error={errors.body?.message}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
        Agregar
      </button>
    </form>
  );
};