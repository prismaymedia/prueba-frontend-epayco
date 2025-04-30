const Item = ({ item }) => (
    <div className="bg-gray-50 p-3 rounded shadow-sm">
      <h3 className="text-blue-700 font-semibold">{item.title}</h3>
      <p className="text-gray-700">{item.body}</p>
    </div>
  );
  
  export default Item;