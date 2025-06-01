import { z } from 'zod';

export const postFormSchema = z.object({
  title: z
    .string()
    .min(1, 'El título es obligatorio')
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(100, 'El título no puede exceder 100 caracteres')
    .trim(),
  body: z
    .string()
    .min(1, 'El contenido es obligatorio')
    .min(10, 'El contenido debe tener al menos 10 caracteres')
    .max(500, 'El contenido no puede exceder 500 caracteres')
    .trim(),
});

export const createPostRequestSchema = z.object({
  title: z.string().min(1).trim(),
  body: z.string().min(1).trim(),
});

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

// Type inference from schemas
export type PostFormInput = z.infer<typeof postFormSchema>;
export type CreatePostRequestInput = z.infer<typeof createPostRequestSchema>;
export type PostInput = z.infer<typeof postSchema>;