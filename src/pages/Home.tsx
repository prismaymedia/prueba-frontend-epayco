import { useItems } from '../hooks/useItems';
import AddElementForm from '../components/organisms/addElementForm';
import ElementList from '../components/organisms/elementList';
import HeaderTitle from '../components/atoms/headerTitle';
import HeaderSubtitle from '../components/atoms/headerSubtitle';

export const Home = () => {
  const { data: items, error, isLoading } = useItems();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className='flex flex-col items-center py-10'>
      <HeaderTitle title='Lista de Tareas' />
      <HeaderSubtitle text='Crea y gestiona tus tareas con facilidad' />
      <AddElementForm />
      <ElementList items={items || []}/>
    </div>
  );
};
