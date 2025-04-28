import ItemCard from "../molecules/ItemCard";
import type { Item } from "../../types/Item";

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item) => (
      <ItemCard key={item.id} item={item} />
    ))}
  </div>
);

export default ItemList;
