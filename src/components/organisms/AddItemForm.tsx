import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../atoms/Input';
import { TextArea } from '../atoms/TextArea';
import { Button } from '../atoms/Button';

type FormData = {
  title: string;
  body: string;
};

interface AddItemFormProps {
  onSubmit: (data: Partial<FormData>) => void;
  isLoading?: boolean;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      body: ''
    }
  });

  const handleFormSubmit = (data: Partial<FormData>) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form 
        onSubmit={handleSubmit(handleFormSubmit)} 
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Add New Item</h2>
          <p className="text-gray-500">Fill in the details below to create a new item</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Input
              label="Title"
              {...register('title', { 
                required: 'Title is required',
                minLength: { value: 3, message: 'Title must be at least 3 characters' }
              })}
              error={errors.title?.message as string}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <TextArea
              label="Body"
              {...register('body', { 
                required: 'Body is required',
                minLength: { value: 10, message: 'Body must be at least 10 characters' }
              })}
              error={errors.body?.message as string}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[120px]"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit" 
              disabled={isLoading}
              className="w-full btn-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Adding...</span>
                </div>
              ) : (
                'Add Item'
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}; 