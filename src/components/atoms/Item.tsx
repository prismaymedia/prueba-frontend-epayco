import { ItemBase } from "../../types/Item";

interface Props {
  item: ItemBase;
}
export const Item = ({ item }: Props) => {
  return (
    <article className="item">
      <h3 className="item__title">{item.title}</h3>
      <p className="item__body">{item.body}</p>
    </article>
  );
};
