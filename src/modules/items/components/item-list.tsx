import type { FC } from "react";
import { Item } from "./item";

interface ItemListProps {
    items: Item[];
}

export const ItemList: FC<ItemListProps> = ({ items }) => {
    return (
        <div className="flex flex-col gap-4 lg:max-h-full max-h-[300px] overflow-y-auto">
            {items.length === 0 && (
                <div className="flex flex-col items-center mt-4">
                    <span>No items found</span>
                </div>
            )}
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
