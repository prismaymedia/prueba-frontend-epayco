import { useRef } from 'react';
import { useInfiniteItems } from '@/application/hooks/useInfiniteItems';
import { useInfiniteScroll } from '@/application/hooks/useInfiniteScroll';
import type { Item } from '@/domain/models/Item';

interface Props {
    items?: Item[];
}

export const ItemList = ({ items }: Props) => {
    const { visibleItems, hasMore } = useInfiniteItems();
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useInfiniteScroll(loadMoreRef, !items);

    const data = items ?? visibleItems;

    if (data.length === 0) {
        return <p className="text-center text-gray-500">Cargando post...</p>;
    }

    return (
        <div className="space-y-4 mt-4">
            {data.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.body}</p>
                </div>
            ))}
            {!items && (
                <div
                    ref={loadMoreRef}
                    style={{ height: '40px' }}
                    aria-hidden="true"
                />
            )}
            {!items && !hasMore && (
                <p className="text-center text-sm text-gray-400">No hay más post</p>
            )}
        </div>
    );
};
