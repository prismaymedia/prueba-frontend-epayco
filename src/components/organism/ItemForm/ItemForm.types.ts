import { Item } from "../../../interfaces/Item.interface";

export type ItemFormProps = {
    onSubmit: (data: Omit<Item, 'id'>) => Promise<void>;
  }