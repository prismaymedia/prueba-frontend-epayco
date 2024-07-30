import React from 'react';

type ItemProps = {
  item: { title: string; body: string };
};

const Item = ({ item }: ItemProps) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
