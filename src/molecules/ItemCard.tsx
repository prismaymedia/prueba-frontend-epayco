import { Item } from "@/types/item";

interface ItemCardProps {
  item: Item;
}

export const ItemCard = ({ item }: ItemCardProps) => (
  <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {item.body}
        </p>
      </div>
      <span className="ml-4 text-sm text-gray-400 whitespace-nowrap">
        #{item.id}
      </span>
    </div>
  </div>
);