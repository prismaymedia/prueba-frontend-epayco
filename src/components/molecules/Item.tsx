import React from 'react';

interface ItemProps {
  title: string;
  body: string;
}

export const Item: React.FC<ItemProps> = ({ title, body }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-300">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}; 