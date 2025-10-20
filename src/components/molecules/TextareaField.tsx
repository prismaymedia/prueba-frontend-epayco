import React from 'react';
import { motion } from 'framer-motion';
import { Label, Textarea } from '../atoms';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, required, ...props }, ref) => {
    return (
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Label required={required}>{label}</Label>
        <Textarea ref={ref} error={error} {...props} />
      </motion.div>
    );
  }
);

TextareaField.displayName = 'TextareaField';