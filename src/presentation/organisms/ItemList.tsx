import { Item } from '../../domain/entities/Item';
import { ItemCard } from '../molecules/ItemCard';

type Props = {
  items: Item[];
};

export function ItemList({ items }: Props) {
  return (
    <div>
      {items.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">No items yet. Add one above!</div>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <ItemCard key={item.id ?? item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}


