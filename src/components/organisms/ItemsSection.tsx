import ItemList from "./ItemList";
import Button from "../atoms/Button";
import type { Item } from "../../types/Item";

interface ItemsSectionProps {
  items: Item[];
  onReload: () => void;
  isLoading: boolean;
}

const ItemsSection = ({ items, onReload, isLoading }: ItemsSectionProps) => (
  <section className="bg-gray-300 p-6 rounded-lg shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Items List</h2>
      <Button
        onClick={onReload}
        disabled={isLoading}
        className="bg-green-500 hover:bg-green-600"
      >
        {isLoading ? "Reloading…" : "Reload All"}
      </Button>
    </div>
    <div className="max-h-[60vh] overflow-y-auto">
      <ItemList items={items} />
    </div>
  </section>
);

export default ItemsSection;
