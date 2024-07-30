import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button (props: Readonly<ButtonProps>) {
  return <button {...props} />
}
