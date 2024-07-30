import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input (props: Readonly<InputProps>) {
  return <input {...props} />
}
