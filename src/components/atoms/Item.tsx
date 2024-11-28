import { Item as ItemType } from "../../domain/entities/Item";

interface ItemProps {
  item: ItemType;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="bg-orange-400 rounded-md p-2">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
