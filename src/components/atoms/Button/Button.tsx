import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ isSubmitting, isDisabled, className, ...props }) => (
  <button
    className={`home__button ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary'} ${className}`}
    type="submit"
    disabled={isDisabled}
    {...props}
  >
    {isSubmitting ? 'Submitting...' : 'Add Item'}
  </button>
);

export default Button;
