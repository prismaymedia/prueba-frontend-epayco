import { HTMLAttributes } from 'react';
import { cn } from '../../../../utils/cn';

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
}

/**
 * ErrorMessage Atom Component
 * Muestra mensajes de error de formularios
 */
export const ErrorMessage = ({ message, className, ...props }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <p
      className={cn(
        'text-sm text-red-600 mt-1.5 animate-fade-in',
        className
      )}
      role="alert"
      {...props}
    >
      {message}
    </p>
  );
};
