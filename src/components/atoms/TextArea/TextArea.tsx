import React from 'react';
import { TextAreaProps } from './TextArea.types';

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, register, errors, className }) => (
  <>
    <textarea
      className={`${className} ${errors[name] ? 'border-accent' : 'border-gray-300'}`}
      {...register(name)}
      placeholder={placeholder}
    />
    {errors[name] && <p className="text-accent">{errors[name].message}</p>}
  </>
);

export default TextArea;
