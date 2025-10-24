import { CreatePostDto } from '../../../../domain/entities/Post.entity';

export interface PostFormProps {
  onSubmit: (data: CreatePostDto) => void;
  isLoading: boolean;
  onDirtyChange?: (isDirty: boolean) => void;
}

export interface PostFormData {
  title: string;
  body: string;
}
