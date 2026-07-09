import type { Item as ItemType } from '@/domain/models/Item';

interface Props {
    item: ItemType;
}

export const Item = ({ item }: Props) => {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.body}</p>
        </div>
    );
};
