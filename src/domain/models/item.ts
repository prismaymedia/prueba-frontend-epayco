export type Item = {
  id: number;
  title: string;
  body: string;
};

export type ItemForm = Omit<Item, 'id'>;