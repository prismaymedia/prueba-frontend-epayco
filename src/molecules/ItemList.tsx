import { ItemInterface } from '../interfaces/models'

import { Item } from '../atoms/Item';

interface ItemListProps {
    items: ItemInterface[]
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <div>
            {items?.map((item: ItemInterface) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};