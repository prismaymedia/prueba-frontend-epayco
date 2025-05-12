import { useItems } from '../../hooks/react-query/useItems';
import { ItemInterface } from '../../types/item';
import ItemList from '../organisms/itemList/itemList';
import ItemForm from '../organisms/itemForm/itemForm';
import Layout from '../../templates/layout';
import Loading from '../organisms/loading/loading';
import ErrorPage from '../organisms/errorPage/errorPage';


const Home = () => {
  const { data: items, error, isLoading } = useItems() as {
    data: ItemInterface[] | undefined;
    error: Error | null;
    isLoading: boolean;
  };
  


  const errorMessage = error ? error.message : null;

 
  return (
   <Layout>
      {
         items && (
            <div className='container mx-auto p-2 flex flex-col lg:flex-row-reverse justify-between gap-2'>
             
                <ItemForm />
              
              {items &&<ItemList items={items} />}
              
              
            </div>
         )
      }
      {isLoading && <Loading />}
      {
        error && <ErrorPage error={errorMessage || 'Error'} />
      }
   </Layout>
  );
};
export default Home;