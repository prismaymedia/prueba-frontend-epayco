interface ItemProps {
    title: string;
    body: string;
}

const Item = ({title, body}: ItemProps) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4 border border-gray-500">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default Item;