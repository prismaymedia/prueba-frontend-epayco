import { ItemBase } from "../../types/Item";
import {Item} from "../atoms/Item.tsx";

interface Props {
    items: ItemBase[] | undefined;
    isLoading: boolean;
    isError: boolean;
}
export const ItemList = ({ items, isError, isLoading }: Props) => {
    return (
      <>
          {isLoading && <p className="message-loading">Cargando...</p>}

          {isError && (
            <p className="message-error">
                Ha ocurrido un error al cargar los comentarios.
            </p>
          )}

          {items && (
            <ul>
                <li className="item-list">
                    {items.map((item) => (
                      <Item key={item.id} item={item} />
                    ))}
                </li>
            </ul>
          )}
      </>
    );
};
