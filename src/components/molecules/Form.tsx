import React from 'react';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  title: string;
  body: string;
};

type FormProps = {
  onSubmit: SubmitHandler<FormData>;
};

const Form = ({ onSubmit }: FormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 text-center">
      <Input placeholder="Title" register={register('title', { required: 'Title is required' })} required />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <Textarea placeholder="Body" register={register('body', { required: 'Body is required' })} required />
      {errors.body && <p className="text-red-500">{errors.body.message}</p>}
      <button type="submit" className="w-32 p-2 bg-[#000000] text-white rounded hover:bg-[#999999] mx-auto transition-colors duration-300">
        Add Item
      </button>
    </form>
  );
};

export default Form;
