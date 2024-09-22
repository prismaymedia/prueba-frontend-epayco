import { useContext } from "react";
import { CreateItemContext } from "../../../context/CreateItemContext";
import { ItemDataContext } from "../../../context/ItemDataContext";
import { useItems } from "../../../services";
import { HomeTemplate } from "../../Templates/HomeTemplate";

export const Home = () => {
  const { data: items, isLoading } = useItems();
  const { setIsCreating, isCreating } = useContext(CreateItemContext);
  const { data } = useContext(ItemDataContext);

  if (isLoading) return <div>Loading...</div>;

  return (
    <HomeTemplate
      onCreateButtonClick={() => setIsCreating(true)}
      items={data.length > 0 ? data : items}
      isCreating={isCreating}
    ></HomeTemplate>
  );
};
