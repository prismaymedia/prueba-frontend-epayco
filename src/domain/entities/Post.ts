// Domain Entity - Pure business logic, no external dependencies
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreatePostRequest {
  title: string;
  body: string;
}

export interface PostFormData {
  title: string;
  body: string;
}