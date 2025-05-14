import { ItemCard, ItemType } from '../molecules/ItemCard/ItemCard';

interface ItemListProps {
  items: ItemType[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="mt-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
