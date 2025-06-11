import React from 'react';
import { Item } from '../../domain/entities/Item';
import { ItemCard } from '../molecules/ItemCard';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

interface ItemListProps {
  items: Item[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
}

export const ItemList: React.FC<ItemListProps> = ({
  items,
  isLoading = false,
  error = null,
  className = '',
}) => {
  if (isLoading) {
    return (
      <div className={`flex justify-center items-center py-12 ${className}`}>
        <LoadingSpinner size="lg" className="text-blue-600" />
        <span className="ml-3 text-gray-600">Cargando elementos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
        <h3 className="text-red-800 font-medium mb-2">Error al cargar los elementos</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No hay elementos</h3>
        <p className="text-gray-600">Agrega tu primer elemento usando el formulario de arriba.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
