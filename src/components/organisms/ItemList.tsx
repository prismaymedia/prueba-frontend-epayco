import Item from './Item';

const ItemList = ({ items }) => (
  <div className="space-y-3 mt-4">
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);

export default ItemList;