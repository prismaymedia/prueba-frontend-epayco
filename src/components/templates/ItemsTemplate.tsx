import AddItemForm from "../molecules/AddItemForm";
import ItemList from "../organisms/ItemList";

interface ItemsTemplateProps {
  onSubmit: (data: { title: string; body: string }) => void;
  isLoading: boolean;
  items: { id: number; title: string; body: string }[];
  successMessage: string | null;
}

const ItemsTemplate: React.FC<ItemsTemplateProps> = ({
  onSubmit,
  isLoading,
  items,
  successMessage
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Item</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
          {successMessage}
        </div>
      )}

      <AddItemForm onSubmit={onSubmit} isLoading={isLoading} />
      <h2 className="text-xl font-bold text-gray-800 mt-6">Items List</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemsTemplate;
