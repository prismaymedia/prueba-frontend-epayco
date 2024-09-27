import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface FormValues {
  title: string;
  body: string;
}

interface FormProps {
  onSubmit: (data: FormValues) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = data => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div>
        <Input
          {...register('title', { required: 'Title is required' })}
          label="Title"
          placeholder="Enter title"
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <p className="text-red-600 text-sm mt-2">{errors.title.message}</p>}
      </div>
      
      <div>
        <Input
          {...register('body', { required: 'Body is required' })}
          label="Body"
          placeholder="Enter body"
          as="textarea"
          className="border rounded-md p-3 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.body && <p className="text-red-600 text-sm mt-2">{errors.body.message}</p>}
      </div>
      
      <Button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
        Add Item
      </Button>
    </form>
  );
};

export default Form;
