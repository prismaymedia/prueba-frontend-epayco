import { ItemCard } from '../molecules/ItemCard';
import { Item } from '../../types';
import { Typography } from '../atoms/Typography';

interface ItemListProps {
  items: Item[];
}

function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <Typography variant="p" className="text-gray-500">
          No items to display
        </Typography>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export { ItemList };
