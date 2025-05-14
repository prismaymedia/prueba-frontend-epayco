import { Item } from '../../../domain/models/item';
import { ItemCard } from '../molecules/ItemCard/ItemCard';

interface ItemListProps {
  items: Item[] | null;
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="mt-6">
      {items && items.length !== 0 ? (
      items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))) : (
        <div className="text-center text-gray-500">Sin elementos</div>
      )}
    </div>
  );
};
