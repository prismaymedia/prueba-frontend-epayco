import { Item } from "components/molecules/Item";
import { ItemsProps } from "types";

export function ItemList({ items }: Readonly<ItemsProps>) {
  return (
    <>
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  )
}
