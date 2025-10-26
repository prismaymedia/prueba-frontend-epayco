export interface Item {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export interface CreateItemRequest {
  title: string;
  body: string;
}
