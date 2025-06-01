import { FC } from "react";

interface ItemProps {
    item: Item;
}

export const Item: FC<ItemProps> = ({ item }) => {
    return (
        <div className="card">
            <h3 className="text font-semibold">{item.title}</h3>
            <p className="text-sm text-neutral-600">{item.body}</p>
        </div>
    );
};
