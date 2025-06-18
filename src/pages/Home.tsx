import React from 'react';
import { useItems } from '../hooks/useItems';
import { ItemForm } from '../components/organisms/ItemForm';

export const Home: React.FC = () => {
  const { items, handleAddItem } = useItems();

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-50 p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Agregar nuevo ítem
      </h1>
      <ItemForm onSubmit={handleAddItem} />
      
      <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
        Lista de ítems
      </h2>
      <ul className="space-y-4">
        {items.map(item => (
          <li 
            key={item.id} 
            className="border rounded p-4 bg-white shadow-sm"
          >
            <strong className="block text-lg text-blue-600">
              {item.title}
            </strong>
            <p className="text-gray-700">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};