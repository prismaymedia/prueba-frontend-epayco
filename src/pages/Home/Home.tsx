import { useForm } from "react-hook-form";
import ItemList from "../../components/UI/ItemList";
import { useItems } from "../../hooks/useItems";
import { useAddItem } from "../../hooks/useAddNewItem";

const Home = () => {
    const { data: items, error, isLoading } = useItems();
    const { register, handleSubmit, reset } = useForm();
    const mutation = useAddItem();
  
    const onSubmit = (data) => {
      mutation.mutate(data);
      reset();
    };
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    return (
      <div >
      {/* <div className="bg-blue-500 min-h-screen p-4"> */}
        <h1>Add New Item</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('title')} placeholder="Title" required />
          <textarea {...register('body')} placeholder="Body" required />
          <button type="submit">Add Item</button>
        </form>
        <h2>Items List</h2>
        <ItemList items={items} />
      </div>
    );
  };

  export default Home;