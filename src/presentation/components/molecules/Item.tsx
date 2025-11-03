import { Item as ItemType } from "../../../infrastructure/Item";

interface Props {
  item: ItemType;
}

export const Item = ({ item }: Props) => {
  return (
    <div className="border-2 border-gray-400 hover:border-[#870412] rounded-3xl p-6 shadow-sm bg-gray-50 cursor-pointer">
      <h3 className="text-lg font-bold text-gray-800 ">{item.title}</h3>
      <p className="text-sm text-gray-600 mt-2 text-justify">{item.body}</p>
    </div>
  );
};
