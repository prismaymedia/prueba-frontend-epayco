import { FC } from 'react';
import { Item } from './Item';
import { ItemResponse } from '../models/models';

interface items{
	id: number,
	items: dataItem[]
}

type dataItem = {
    title: string,
	  body?: string,
}


export const ItemList: FC<items> = ({ id,items }) => {
  console.log(items)
    return (
      <div className='col-span-12 grid grid-flow-dense gap-6 font-light normal-case'>
        {items.map(item => (
          <Item key={id} title={item.title} body={item.body}/>
        ))}
      </div>
    );
  };