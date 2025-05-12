import { ItemInterface } from "../../../types/item";
import Item from "../../molecules/item/item";

const ItemList = ({ items }: {items: ItemInterface[]}) => {
  return (
    <section className="flex md:flex-1/2 items-start">
      <div className="container mx-auto p-2">
        <h2 className="mt-0 pt-10 md:pt-0 mb-10 pb-4 text-5xl font-bold border-b-2 border-b-[#cecece]" >Items List</h2>
        <div className="grid grid-cols-1 gap-4 md:max-h-[60vh] md:overflow-y-scroll min-h-[60vh]">
          {items.map(item => (
              <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;