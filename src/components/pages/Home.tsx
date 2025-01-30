import { useState } from "react";
import { useItems, useAddItem } from "../../services/posts";
import ItemsTemplate from "../templates/ItemsTemplate";

const Home = () => {
  const { data: items } = useItems();
  const mutation = useAddItem();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data: { title: string; body: string; userId: number }) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setSuccessMessage("Item added successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      },
    });
  };

  return (
    <ItemsTemplate
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
      items={items || []}
      message={successMessage}
    />
  );
};

export default Home;
