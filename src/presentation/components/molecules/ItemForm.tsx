import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FormData } from '../../../domain/models/ItemData';

interface ItemFormProps {
  onSubmit: SubmitHandler<FormData>;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    onSubmit(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-md lg:max-w-lg xl:max-w-1/3 mx-auto space-y-4 bg-white shadow-md rounded-lg p-6">
      <Input
        placeholder="Title"
        register={register('title', {
          required: true,
          validate: (value) => value.trim() === value || 'It must not contain spaces at the beginning or end',
        })}
        error={errors.title?.message}
      />
      <Input
        placeholder="Body"
        register={register('body', {
          required: true,
          validate: (value) => value.trim() === value || 'It must not contain spaces at the beginning or end',
        })}
        error={errors.body?.message}
      />
      <Button
        label="Add Item"
        type="submit"
      />
    </form>

  );
};

export default ItemForm;