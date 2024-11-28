import { Item as ItemType } from "../../domain/entities/Item";
import Item from "../atoms/Item";

interface ItemListProps {
  items: ItemType[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-3 max-h-96 overflow-auto">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
