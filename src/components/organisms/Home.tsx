import { useAddItem } from "../../hooks/useAddItem";
import { SubmitHandler, useForm } from "react-hook-form";
import ItemList from "../molecules/ItemList";
import { useItems } from "../../hooks/useItems";
import Form from "../molecules/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { newItem } from "../../domain/entities/Item";
import toast from "react-hot-toast";
import Loader from "../atoms/Loader";

const schema = yup
  .object({
    title: yup.string().required(),
    body: yup.string().required(),
  })
  .required();

const Home = () => {
  const { data: items, isLoading } = useItems();
  const mutation = useAddItem();
  const { register, reset, handleSubmit } = useForm<newItem>({
    resolver: yupResolver<newItem>(schema),
  });

  const onSubmit: SubmitHandler<newItem> = (data) => {
    try {
      mutation.mutate(data);
      reset();
      toast.success("Post creado");
    } catch (error) {
      console.log("error", error);
      toast.error("Error al crear el post");
    }
  };

  if (isLoading) return <Loader />;
  return (
    <div className="home-container bg-[#2A3335] text-white h-[100vh] p-4">
      <div className=" sm:w-full xl:w-[800px] m-auto mt-5">
        <h1 className="text-2xl font-bold">Crear post</h1>
        <br />
        <Form register={register} onSubmit={handleSubmit(onSubmit)} />
        <h2 className="text-xl font-semibold mt-4">Lista de post</h2>
        <br />

        {items?.length ? <ItemList items={items} /> : <h1>Sin post</h1>}
      </div>
    </div>
  );
};

export default Home;
