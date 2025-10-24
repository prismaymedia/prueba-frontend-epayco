import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

export interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: FieldError;
  children: ReactNode;
  helpText?: string;
}
