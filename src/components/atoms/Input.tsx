import React from 'react'
import { UseFormRegister } from 'react-hook-form';
import { Item } from '../../types/itemType';

interface Props {
  placeholder: string;
  register: (name: keyof Item) => ReturnType<UseFormRegister<Item>>
  name: keyof Item;
  error?: string;
}

export const Input: React.FC<Props> = ({
  placeholder,
  register,
  name,
  error
}) => {
  return (
    <div className='mb-4'>
      <input
        {...register(name)}
        type='text'
        placeholder={placeholder}
        className='w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
