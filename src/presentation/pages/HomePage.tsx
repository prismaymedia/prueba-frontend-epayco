import React, { useMemo } from 'react';
import { Item } from '../../domain/entities/Item';
import { ItemApiRepository } from '../../infrastructure/http/ItemApiRepository';
import { FetchItems } from '../../domain/usecases/FetchItems';
import { AddItem } from '../../domain/usecases/AddItem';
import { useItems } from '../../application/queries/useItems';
import { useAddItem } from '../../application/mutations/useAddItem';
import { ItemForm } from '../organisms/ItemForm';
import { ItemList } from '../organisms/ItemList';

export function HomePage() {
  const repo = useMemo(() => new ItemApiRepository(), []);
  const fetchItemsUseCase = useMemo(() => new FetchItems(repo), [repo]);
  const addItemUseCase = useMemo(() => new AddItem(repo), [repo]);

  const { data: items, error, isLoading } = useItems(() => fetchItemsUseCase.execute());
  const mutation = useAddItem((input: Omit<Item, 'id'>) => addItemUseCase.execute(input));

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Items</h1>
          <p className="text-slate-600">Add a new item and manage the list below.</p>
        </div>

        <div className="card p-6">
          <h2 className="section-title">Add New Item</h2>
          <ItemForm onSubmit={(data) => mutation.mutate(data)} isSubmitting={mutation.isLoading} />
        </div>

        <div className="card p-6">
          <h2 className="section-title">Items List</h2>
          {isLoading && <div className="text-slate-600">Loading...</div>}
          {error && (
            <div className="text-red-700 bg-red-50 border border-red-200 rounded p-3">
              {(error as Error).message}
            </div>
          )}
          {items && (
            <ItemList items={items} />
          )}
        </div>
      </div>
    </div>
  );
}


