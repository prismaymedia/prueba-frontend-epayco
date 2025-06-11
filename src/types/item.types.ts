export interface Item {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export interface CreateItemDto {
  title: string;
  body: string;
  userId?: number;
}

export interface ItemFormData {
  title: string;
  body: string;
}

export interface ValidationErrors {
  title?: string;
  body?: string;
}
