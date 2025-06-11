import React, { useState } from 'react';
import { useItems, useAddItem } from '../../hooks/useItems';
import { LocalStorageService } from '../../services/LocalStorageService';
import { PageLayout } from '../templates/PageLayout';
import { ItemForm } from '../molecules/ItemForm';
import { ItemList } from '../organisms/ItemList';
import { Item } from '../../domain/entities/Item';
import { useQueryClient } from 'react-query';

interface ItemFormData {
  title: string;
  body: string;
}

export const HomePage: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const addItemMutation = useAddItem();
  const queryClient = useQueryClient();
  const [recentlyAdded, setRecentlyAdded] = useState<Item | null>(null);

  const handleAddItem = async (data: ItemFormData) => {
    try {
      const newItem = await addItemMutation.mutateAsync(data);
      setRecentlyAdded(newItem);
      
      setTimeout(() => {
        setRecentlyAdded(null);
      }, 3000);
    } catch (error) {
      console.error('Error al agregar elemento:', error);
    }
  };

  const handleClearLocalItems = () => {
    LocalStorageService.clear();
    queryClient.invalidateQueries('items');
    setRecentlyAdded(null);
  };

  return (
    <PageLayout 
      title="Gestión de Elementos" 
      subtitle="Agrega y visualiza elementos de manera eficiente"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Formulario de agregado */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Agregar Nuevo Elemento
          </h2>
          <ItemForm 
            onSubmit={handleAddItem}
            isLoading={addItemMutation.isLoading}
          />
        </section>

        {/* Lista de elementos */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Lista de Elementos
            </h2>
            <div className="flex gap-2">
              <button
                onClick={handleClearLocalItems}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800 border border-red-300 hover:border-red-400 rounded-lg transition-colors"
              >
                Limpiar elementos locales
              </button>
            </div>
          </div>
          
          {/* Mensaje de éxito */}
          {recentlyAdded && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✅ ¡Elemento "{recentlyAdded.title}" agregado exitosamente!</p>
              <p className="text-green-600 text-sm mt-1">El elemento se ha agregado a tu lista</p>
            </div>
          )}
          
          <ItemList
            items={items || []}
            isLoading={isLoading}
            error={error?.message}
          />
        </section>
      </div>
    </PageLayout>
  );
};
