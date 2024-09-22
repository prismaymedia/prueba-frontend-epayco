import React from 'react';
import { ItemProps } from './ItemProps.types';


const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className='home__list__card' data-aos="fade-up">
      <h3 className='home__card__title'>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default ItemComponent;