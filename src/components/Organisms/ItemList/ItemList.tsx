import clsx from "clsx";
import { Item } from "../../Molecules/Item/Item";
import { ItemListProps } from "./ItemList.types";
import { useItemList } from "./useItemList";

export const ItemList: React.FC<ItemListProps> = (props) => {
  const { items, handleSubmit, isCreating } = useItemList(props);

  return (
    <div
      className={clsx(
        "w-full",
        "h-full",
        "flex",
        "flex-wrap",
        "justify-center",
        "items-center",
        "gap-3",
        "transition-all"
      )}
    >
      <Item
        className={clsx(
          "origin-left",
          "duration-500",
          isCreating
            ? clsx("transition-all", "scale-x-100", "flex")
            : clsx("transition-none", "scale-x-0", "hidden")
        )}
        onSubmit={handleSubmit}
        body=""
        title=""
        isCreating
        id={-1}
      />

      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
