import React from 'react';
import { Item } from '../../domain/entities/Item';

interface ItemCardProps {
  item: Item;
  className?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full ${className}`}>
      {/* Contenido principal que ocupará el espacio disponible */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-700 leading-relaxed line-clamp-3">
          {item.body}
        </p>
      </div>
      
      {/* Pie de tarjeta siempre al final */}
      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">ID: {item.id}</span>
        {item.id > 100 && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Local
          </span>
        )}
      </div>
    </div>
  );
};