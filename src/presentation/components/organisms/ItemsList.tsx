import { ItemsListProps } from "../../../domain/model/interfaces";
import { TypeItem } from "../../../domain/model/types";
import Item from "./Item";



const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
    return (
        <div>
            <ul>
                {Array.isArray(items) && items.length > 0 ? (
                    items.map((item: TypeItem) => <Item key={item.id} item={item} />)
                ) : (
                    <li>Items no disponibles</li>
                )}
            </ul>
        </div>
    );
};

export default ItemsList;