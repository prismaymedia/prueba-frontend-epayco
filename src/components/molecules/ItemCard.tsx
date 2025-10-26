import { Typography } from "../atoms/Typography";
import { Item } from "../../types";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 cursor-pointer">
      <Typography
        variant="h3"
        className="mb-3 text-xl font-semibold text-stone-800"
      >
        {item.title}
      </Typography>
      <Typography variant="p" className="text-stone-600 mb-3">
        {item.body}
      </Typography>
      <Typography variant="p" className="text-xs text-stone-400 opacity-70">
        ID: {item.id}
      </Typography>
    </div>
  );
}

export { ItemCard };
