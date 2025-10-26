import { useState } from 'react';
import { AddItemFormData } from '../types';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (field: string, value: string): string | null => {
    if (field === 'title') {
      if (!value.trim()) return 'Title is required';
      if (value.trim().length < 3) return 'Title must be at least 3 characters';
    }

    if (field === 'body') {
      if (!value.trim()) return 'Body is required';
      if (value.trim().length < 10)
        return 'Body must be at least 10 characters';
    }

    return null;
  };

  const validateAll = (data: AddItemFormData): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    const titleError = validate('title', data.title);
    if (titleError) newErrors.title = titleError;

    const bodyError = validate('body', data.body);
    if (bodyError) newErrors.body = bodyError;

    setErrors(newErrors);
    return newErrors;
  };

  const clearError = (field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validate,
    validateAll,
    clearError,
    clearAllErrors,
  };
};
