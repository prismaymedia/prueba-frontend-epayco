import { Item } from '../../domain/entities/Item';

type ItemCardProps = {
  item: Item;
};

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="card p-4 transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-slate-700">{item.body}</p>
    </div>
  );
}


