export interface ItemProps {
  id: number;
  title: string;
  body: string;
}

export type ItemsArr = ItemProps[];

export type CreateItemForm = Omit<ItemProps, 'id'>;

export type CreateItemDTO = Pick<ItemProps, "title" | "body">;
