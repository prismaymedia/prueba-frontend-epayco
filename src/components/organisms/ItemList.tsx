import Item from '../molecules/Items.tsx'
import { Item as ItemType } from '../../types/item';

const ItemList = ({ items }: { items: ItemType[] }) => {
  return (
    <div className="mt-4">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;