import { ItemForm } from "@/organisms/ItemForm";
import { ItemCard } from "@/molecules/ItemCard";
import { useCallback, useMemo, useState } from "react";
import { useAddItem, useItems } from "@/hooks/useItems";
import Tabs from "@/atoms/TabButton";

export const Home = () => {
  const [activeTab, setActiveTab] = useState<"latest" | "all">("latest");
  const [latestItemId, setLatestItemId] = useState<number | null>(null);
  const { data: items = [], error, isLoading: isLoadingItems } = useItems();
  const addItemMutation = useAddItem();

  const getNextItemId = useCallback(() => {
    if (items.length === 0) return 1;
    const maxId = Math.max(...items.map((item) => item.id));
    return maxId + 1;
  }, [items]);

  // Ordenar items con los más recientes primero
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b.id - a.id);
  }, [items]);

  const latestItem = useMemo(() => {
    if (!latestItemId) return null;
    return items.find((item) => item.id === latestItemId);
  }, [items, latestItemId]);

  const ItemCounter = useCallback(
    () => (
      <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
        {items.length} {items.length === 1 ? "item" : "items"}
      </div>
    ),
    [items.length]
  );

  const handleAddItem = useCallback(
    async (data: any) => {
      try {
        const nextId = getNextItemId();
        const itemWithId = { ...data, id: nextId };
        const result = await addItemMutation.mutateAsync(itemWithId);
        setLatestItemId(nextId);
        setActiveTab("latest");
      } catch (error) {
        console.error("Error adding item:", error);
      }
    },
    [addItemMutation, getNextItemId]
  );

  if (isLoadingItems) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex space-x-2 items-center bg-blue-50 px-6 py-3 rounded-lg">
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <span className="text-blue-600 font-medium">Loading items...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg border border-red-200">
          <p className="font-medium">Error loading items</p>
          <p className="text-sm mt-1 text-red-500">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Item Manager</h1>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Add New Item
            </h2>
            {addItemMutation.isLoading && (
              <span className="text-sm text-blue-600 animate-pulse">
                Adding item...
              </span>
            )}
          </div>
          <ItemForm
            onSubmit={handleAddItem}
            isLoading={addItemMutation.isLoading}
          />
          {addItemMutation.error && (
            <div className="mt-4 bg-red-50 text-red-600 px-4 py-3 rounded-md">
              <p className="text-sm">
                {addItemMutation.error instanceof Error
                  ? addItemMutation.error.message
                  : "Failed to add item"}
              </p>
            </div>
          )}
        </div>

        <Tabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          latestItem={latestItem && <ItemCard item={latestItem} />}
          allItems={
            sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <div
                  key={item.id}
                  className="transition-all duration-300 hover:transform hover:translate-x-1"
                >
                  <ItemCard item={item} />
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-2">No items yet</p>
                <p className="text-sm text-gray-400">
                  Create your first item using the form above
                </p>
              </div>
            )
          }
          ItemCounter={ItemCounter}
        />
      </div>
    </div>
  );
};
