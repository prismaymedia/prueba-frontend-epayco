import { Item } from "../../domain/models/Item";
import { Card } from "../atoms/Card";

interface ItemListProps {
    items: Item[];
  }
  
  export const ItemList = ({ items }: ItemListProps) => (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="border border-gray-200">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.body}</p>
        </Card>
      ))}
    </div>
  );