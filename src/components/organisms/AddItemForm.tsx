import React from 'react';
import Form from '../molecules/Form';
import { useAddItem } from '../../hooks/useAddItem';
import { AddItemError } from '../../types/types';
import { Item } from '../molecules/ItemCard';

interface AddItemFormProps {
  onSubmit: (data: { title: string; body: string }) => void;
  onNewItemAdded?: (newItemId: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit, onNewItemAdded }) => {
  const onSuccess = (newItem: Item) => {
    console.log('Item added successfully');
    if (onNewItemAdded) {
      onNewItemAdded(newItem.id); 
    }
  };

  const onError = (error: AddItemError) => {
    console.error('Error adding item:', error.message);
  };

  const { mutate, isLoading } = useAddItem(onSuccess, onError);

  const handleSubmit = (data: { title: string; body: string }) => {
    mutate(data);
  };

  return (
    <div className="bg-gray-100  flex items-start justify-center ">
      <div className="lg:p-5 p-4 rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Item</h1>
        <Form onSubmit={handleSubmit} />
        {isLoading && <p className="text-blue-500 mt-4">Adding item...</p>}
      </div>
    </div>
  );
};

export default AddItemForm;
