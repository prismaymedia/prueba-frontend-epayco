import React, { useEffect, useState } from 'react';
import { ItemList } from '../components/molecules/ItemList';
import { useItemContext } from '../context/ItemContext';
import { Item } from '../interfaces/Item.interface';
import { ItemForm } from '../components/organism/ItemForm';
import { Typography } from '../components/atoms/Typography'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  const { items, addItem } = useItemContext();
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const handleAddItem = async (data: Omit<Item, 'id'>) => {
    try {
      const newItem = await addItem(data);
      setCurrentItem(newItem); 
    } catch (error) {
      console.error("Error adding item:", error); 
    }
  };
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <div className='home'>
      <div className='home__container' data-aos="fade-up">
        <Typography 
          text="Add New Item" 
          tag="h1" 
          className="home__title" 
        />
        <ItemForm onSubmit={handleAddItem} /> 
      </div>
      
      <div className='home__list'>
        <Typography 
          text="Items List" 
          tag="h2" 
          className="home__list__title" 
        />
        <ItemList items={currentItem ? [currentItem] : items}  /> 
      </div>
    </div>
  );
};

export default Home;
