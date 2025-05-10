import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`border p-2 w-full ${props.className ?? ''}`}
    />
  );
};

export default Input;