import { Item } from "../molecules/Item";
import { Item as ItemType } from "../../../infrastructure/Item";
import { Header } from "../atoms/Header";
import { Button } from "../atoms/Button";

interface Props {
  items: ItemType[];
  onBack?: () => void;
}
export const ItemList = ({ items, onBack }: Props) => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-20 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/tecno.jpg')] bg-no-repeat bg-cover bg-center opacity-25 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Header title={"Items List"} position={"text-left"} size={"text-lg"} />
        <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scroll">
          <div
            className={`grid gap-6 mt-2 ${
              items.length === 1
                ? "grid-cols-1 items-center"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
            {onBack && (
              <div className="w-full mt-4 flex text-center justify-center">
                <Button label="Show full list" type="button" onClick={onBack} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
