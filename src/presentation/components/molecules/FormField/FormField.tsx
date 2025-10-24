import { Label } from '../../atoms/Label/Label';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import { FormFieldProps } from './FormField.types';

/**
 * FormField Molecule Component
 * Combina Label + Input/TextArea + ErrorMessage
 */
export const FormField = ({
  label,
  name,
  required,
  error,
  children,
  helpText,
}: FormFieldProps) => {
  return (
    <div className="w-full">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {children}
      {error && <ErrorMessage message={error.message} />}
      {!error && helpText && (
        <p className="text-xs text-gray-500 mt-1.5">{helpText}</p>
      )}
    </div>
  );
};
