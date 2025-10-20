import React from 'react';
import { motion } from 'framer-motion';
import { Label, Input } from '../atoms';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, required, ...props }, ref) => {
    return (
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Label required={required}>{label}</Label>
        <Input ref={ref} error={error} {...props} />
      </motion.div>
    );
  }
);

FormField.displayName = 'FormField';