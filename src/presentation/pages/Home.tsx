import { useItems } from '@/application/hooks/useItems';
import { useItemDisplayStrategy } from '@/application/hooks/useItemDisplayStrategy';
import { ItemForm } from '@/presentation/components/organisms/ItemForm';
import { ItemList } from '@/presentation/components/organisms/ItemList';
import { LoadingMessage } from '@/presentation/components/atoms/LoadingMessage';
import { ErrorMessage } from '@/presentation/components/atoms/ErrorMessage';

export const Home = () => {
    const { data: fetchedItems, isLoading, error } = useItems();
    const { itemsToRender, setAddedItem, hasAddedItem } = useItemDisplayStrategy(fetchedItems ?? []);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            {isLoading && <LoadingMessage />}
            {error instanceof Error && <ErrorMessage message={error.message} />}

            {!isLoading && !error && (
                <>
                    <h1 className="text-2xl font-bold mb-4">Agregar nuevo post</h1>
                    <ItemForm onAdd={setAddedItem} />
                    <h2 className="text-xl font-semibold mt-8 mb-2">Posts</h2>
                    {hasAddedItem
                        ? <ItemList items={itemsToRender} />
                        : <ItemList />}
                </>
            )}
        </div>
    );
};
