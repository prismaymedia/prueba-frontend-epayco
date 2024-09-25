export interface ItemBase {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type ItemDto = Omit<IItem, "id" | "userId">;
