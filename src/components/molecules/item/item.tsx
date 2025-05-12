import { motion } from "motion/react"
import { ItemInterface } from "../../../types/item";

const Item = ({ item }: { item: ItemInterface }) => {
  return (
    <motion.article  initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }}  className="px-4 py-2 mb-2  border-0 border-l-3 border-l-blue-500 ">
      <h3 className="font-bold text-2xl md:text-3xl mb-2 capitalize">{item.title}</h3>
      <p className="italic md:text-lg">{item.body}</p>
    </motion.article>
  );
};

export default Item;