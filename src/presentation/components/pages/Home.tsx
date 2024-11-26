import ItemsList from "../organisms/ItemsList";
import Form from "../molecules/Form";
import { useItems } from "../../../application/hooks";

const Home = () => {
  const { data: items, error, isLoading } = useItems();

  if (isLoading) return <div className="flex items-center justify-center h-screen text-5xl text-ft-Notificaiton">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-ft-Gray-2 flex justify-center items-center min-h-screen">
      <section className="bg-ft-Gray-1 mt-20 mb-10 p-6 rounded shadow-md w-full max-w-2xl">
        <div className="pr-32">
          <h3 className="text-3xl font-medium mb-4 text-left text-ft-Black">Add New Item</h3>
          <Form />
        </div>
        <ItemsList items={items} />
      </section>
    </main>
  );
};

export default Home;
