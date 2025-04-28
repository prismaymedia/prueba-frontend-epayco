import type { Item } from "../../types/Item";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => (
  <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow p-5 flex flex-col h-full">
    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    <p className="text-gray-700 flex-grow">{item.body}</p>
    <div className="mt-4 text-right">
      <span className="text-sm text-gray-500">ID: {item.id}</span>
    </div>
  </div>
);

export default ItemCard;
