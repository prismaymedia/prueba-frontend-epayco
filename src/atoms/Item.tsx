import React from 'react';

import { ItemInterface } from '../interfaces/models'

interface ItemProps {
    item: ItemInterface
}

export const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className="bg-white border-1 border-gray-100 rounded-lg max-w-150 p-4 m-auto my-4 drop-shadow">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
};