import { Item as ItemType } from '../../types/item';

const Item = ({ item }: { item: ItemType }) => {
  return (
    <div className="p-4 border rounded mb-2">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;