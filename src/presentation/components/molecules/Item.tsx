import { ItemType } from '@/shared/types';
import { Typography } from '../atoms/Typography';

const Item = ({ item }:{ item: ItemType }) => {
    return (
      <div className='p-4 mb-6 bg-slate-100 shadow-md rounded-lg'>
        <Typography tag='h3' text={item.title} className='text-[20px] mb-2 font-bold'/>
        <Typography tag='p' text={item.body}/>
      </div>
    );
};
  
export default Item;