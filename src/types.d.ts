export interface BaseItem {
  title: string;
  body: string;
}
export interface Item extends BaseItem {
  userId: number;
  id: number;
}

export interface NewItem extends BaseItem {
  userId: number
}

export type ResponseItems = {
  data: Item[]
}

export type ResponseItem = {
 data: Item
}
